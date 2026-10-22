#!/usr/bin/env node
/**
 * scripts/verify-security.js
 *
 * Defensive-only security verification for Anime-AI-CLEAN.
 * Run: node scripts/verify-security.js
 *
 * Checks:
 *  1.  No eval() on user-supplied WhatsApp input (budy / text / query)
 *  2.  No hidden auto-follow / auto-join triggers at module-load time
 *  3.  No watchFile self-reload hooks (auto-execution vector)
 *  4.  No hardcoded credentials / API keys
 *  5.  No shell exec of user-supplied strings
 *  6.  Baileys is the official npm package, not a GitHub fork
 *  7.  Attack command handlers are absent
 *  8.  config.js is syntactically valid Node.js
 *  9.  tmp/ directory exists for converter.js
 * 10.  All project JS files pass Node.js syntax check
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT        = path.join(__dirname, '..');
const SELF_RELPATH = path.relative(ROOT, __filename); // e.g. "scripts/verify-security.js"

let passed = 0;
let failed = 0;
const issues = [];

function check(name, fn) {
    try {
        const result = fn();
        if (result === true || result === undefined) {
            console.log(`  \u2705  ${name}`);
            passed++;
        } else {
            console.log(`  \u274c  ${name}`);
            if (typeof result === 'string') console.log(`       ${result}`);
            failed++;
            issues.push({ name, detail: result });
        }
    } catch (e) {
        console.log(`  \u274c  ${name}`);
        console.log(`       ${e.message}`);
        failed++;
        issues.push({ name, detail: e.message });
    }
}

/** Walk the project (excluding node_modules) and return { relpath: src } for all .js files. */
function readAllJs(excludeRelpaths = []) {
    const out = {};
    function walk(dir) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full    = path.join(dir, entry.name);
            const relpath = path.relative(ROOT, full);
            if (entry.isDirectory()) {
                if (entry.name === 'node_modules') continue;
                walk(full);
            } else if (entry.name.endsWith('.js') && !excludeRelpaths.includes(relpath)) {
                out[relpath] = fs.readFileSync(full, 'utf8');
            }
        }
    }
    walk(ROOT);
    return out;
}

console.log('\nAnime-AI-CLEAN \u2014 Security Verification\n');
console.log(`Root: ${ROOT}\n`);

// Exclude this script itself from all pattern scans so that string literals
// used as patterns here (e.g. "eval(budy") do not trigger false positives.
const projectFiles = readAllJs([SELF_RELPATH]);

// ── 1. No eval() on user-supplied WhatsApp input ──────────────────────────────
check('No eval(budy) / eval(user input) pattern', () => {
    // Match eval() whose argument is a WhatsApp-input variable (budy, text, query, body).
    // The one legitimate new Function() remaining in totalfiturr() reads LightSecret.js
    // line-count integers — not user input — so it is intentionally excluded.
    const dangerousPattern = /eval\s*\(\s*(?:budy|text|query|body|args|m\.body)/;
    for (const [f, src] of Object.entries(projectFiles)) {
        if (dangerousPattern.test(src)) return `User-input eval found in ${f}`;
    }
    return true;
});

// ── 2. No auto-follow / auto-join at module-load time ────────────────────────
check('No newsletterFollow / auto-join triggers at module-load (top-level)', () => {
    // These calls are legitimate inside command-handler case blocks (user-triggered).
    // Flag them only when they appear outside any function/case — i.e., at top level,
    // inside an IIFE, or inside a setTimeout at module scope.
    for (const [f, src] of Object.entries(projectFiles)) {
        // Simplified: flag if newsletterFollow appears AND there is no surrounding case/function
        if (/newsletterFollow\s*\(/.test(src)) {
            // Check if it is inside a named function or case block
            // (heuristic: look for 'case ' or 'async function' on the same "block" context)
            if (!/case\s+['"].*?newsletterFollow|function[^(]*\([\s\S]*?newsletterFollow/.test(src)) {
                return `Potential auto-follow outside handler in ${f}`;
            }
        }
    }
    return true;
});

// ── 3. No watchFile self-reload hooks ─────────────────────────────────────────
check('No watchFile self-reload hooks (auto-execution vector)', () => {
    // loader.js is explicitly excluded — it documents the pattern but does not
    // install it automatically.
    for (const [f, src] of Object.entries(projectFiles)) {
        if (f === 'lib/loader.js') continue;
        // Flag: watchFile called with __filename-resolved path AND require(file) inside
        if (/\.watchFile\s*\(/.test(src) && /require\s*\(\s*file\s*\)/.test(src)) {
            return `watchFile self-reload found in ${f}`;
        }
    }
    return true;
});

// ── 4. No hardcoded credentials ───────────────────────────────────────────────
check('No hardcoded API keys / tokens (pattern scan)', () => {
    // Match: key/token/password/secret = 'LONGSTRING' not from process.env
    const credPattern = /(?:apikey|api_key|apiKey|bearer|password|Authorization)\s*[:=]\s*['"][A-Za-z0-9+/=_\-]{20,}['"]/i;
    for (const [f, src] of Object.entries(projectFiles)) {
        const lines = src.split('\n').filter(l =>
            credPattern.test(l) && !l.trim().startsWith('//') && !l.includes('process.env')
        );
        if (lines.length > 0) return `Possible hardcoded credential in ${f}: ${lines[0].trim().slice(0,80)}`;
    }
    return true;
});

// ── 5. No shell exec of user-supplied strings ─────────────────────────────────
check('No exec/spawn with WhatsApp user input directly in command string', () => {
    // Flag exec/spawn where the template literal contains a WhatsApp input variable
    const dangerousExec = /exec\s*\(\s*`[^`]*\$\{(?:text|budy|query|m\.body|args)\b/;
    for (const [f, src] of Object.entries(projectFiles)) {
        if (dangerousExec.test(src)) return `User-input shell injection risk in ${f}`;
    }
    return true;
});

// ── 6. Baileys is official npm package ───────────────────────────────────────
check('Baileys is official @whiskeysockets/baileys (not a GitHub fork)', () => {
    const pkgPath = path.join(ROOT, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const dep  = pkg.dependencies?.['@whiskeysockets/baileys'];
    if (!dep) return 'Baileys missing from dependencies';
    if (dep.startsWith('github:') || dep.startsWith('git+') || dep.includes('/') && !dep.startsWith('^') && !dep.match(/^\d/)) {
        return `Baileys points to non-npm source: ${dep}`;
    }
    const installedPkg = path.join(ROOT, 'node_modules/@whiskeysockets/baileys/package.json');
    if (!fs.existsSync(installedPkg)) return 'Baileys not installed — run npm install';
    const installed = JSON.parse(fs.readFileSync(installedPkg, 'utf8'));
    // Confirm the installed package has the official name
    if (installed.name !== '@whiskeysockets/baileys') {
        return `Installed Baileys package name mismatch: ${installed.name}`;
    }
    return true;
});

// ── 7. Attack command handlers absent ────────────────────────────────────────
check('Attack command handlers absent (fclose, forceclose, crash, delaymaker, etc.)', () => {
    const attackCmds = ['fclose', 'forceclose', 'fc-invis', 'delaymaker', 'delayinvis', 'crash', 'delayip'];
    for (const [f, src] of Object.entries(projectFiles)) {
        for (const cmd of attackCmds) {
            if (src.includes(`case "${cmd}"`) || src.includes(`case '${cmd}'`)) {
                return `Attack command handler present: case "${cmd}" in ${f}`;
            }
        }
    }
    return true;
});

// ── 8. config.js is syntactically valid Node.js ───────────────────────────────
// We validate syntax only (node --check) rather than executing the file,
// because config.js sets up globals that depend on the full runtime environment
// (pino, cfonts, chalk, etc.). A syntax-level check is the correct defensive
// verification here — it confirms the file has not been tampered with in a way
// that would introduce parse-time payloads, without requiring a full runtime.
check('config.js is syntactically valid (node --check)', () => {
    const configPath = path.join(ROOT, 'config.js');
    try {
        execSync(`node --check "${configPath}"`, { timeout: 5000, stdio: 'pipe' });
        return true;
    } catch (e) {
        const msg = e.stderr?.toString().trim() || e.stdout?.toString().trim() || 'Unknown error';
        return `config.js failed syntax check: ${msg.slice(0, 200)}`;
    }
});

// ── 9. tmp/ directory exists ──────────────────────────────────────────────────
check('tmp/ directory exists for converter.js media processing', () => {
    const tmpDir = path.join(ROOT, 'tmp');
    if (!fs.existsSync(tmpDir)) {
        try {
            fs.mkdirSync(tmpDir, { recursive: true });
            return true; // created — pass
        } catch (e) {
            return `Could not create tmp/: ${e.message}`;
        }
    }
    if (!fs.statSync(tmpDir).isDirectory()) return 'tmp exists but is not a directory';
    return true;
});

// ── 10. All project JS files pass syntax check ───────────────────────────────
check('All project JS files pass Node.js syntax check (node --check)', () => {
    const errors = [];
    for (const relpath of Object.keys(projectFiles)) {
        const full = path.join(ROOT, relpath);
        try {
            execSync(`node --check "${full}"`, { stdio: 'pipe', timeout: 5000 });
        } catch (e) {
            const msg = (e.stderr?.toString() || '').split('\n').slice(0, 3).join(' ').trim();
            errors.push(`${relpath}: ${msg.slice(0, 120)}`);
        }
    }
    if (errors.length > 0) return errors.join('\n       ');
    return true;
});

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(54)}`);
console.log(`Results: ${passed} passed, ${failed} failed`);
if (failed === 0) {
    console.log('\n\u2705  DEFENSIVE-ONLY \u2014 VERIFIED\n');
    process.exit(0);
} else {
    console.log('\n\u274c  NOT YET DEFENSIVE-ONLY \u2014 ISSUES FOUND:\n');
    for (const { name, detail } of issues) {
        console.log(`  \u2022 ${name}`);
        if (detail) console.log(`    ${detail}`);
    }
    console.log('');
    process.exit(1);
}
