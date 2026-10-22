/**
 * converter.js — Audio/video conversion using ffmpeg.
 *
 * Security notes:
 *  - All ffmpeg arguments are from fixed arrays defined in this file; no user
 *    input ever reaches spawn() arguments.
 *  - Temp-file extensions are validated against an allowlist to prevent path
 *    traversal via maliciously crafted extension strings.
 *  - The tmp/ directory is created if absent so the module works on a fresh clone.
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const TMP_DIR = path.join(__dirname, '..', 'tmp');
// Ensure tmp dir exists
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

// Allowlist of safe extensions that may appear in temp filenames
const ALLOWED_EXT = new Set([
    'mp3','mp4','ogg','opus','aac','wav','flac','webm','mkv','avi','mov','3gp','m4a','gif','png','jpg','jpeg','webp'
]);

function safeExt(ext) {
    const clean = String(ext).toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!ALLOWED_EXT.has(clean)) throw new Error(`converter: unsupported extension "${ext}"`);
    return clean;
}

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
    const e1 = safeExt(ext);
    const e2 = safeExt(ext2);
    return new Promise(async (resolve, reject) => {
        try {
            const base = path.join(TMP_DIR, `${Date.now()}_${Math.random().toString(36).slice(2)}`);
            const tmp  = `${base}.${e1}`;
            const out  = `${base}.${e2}`;
            await fs.promises.writeFile(tmp, buffer);

            const proc = spawn('ffmpeg', ['-y', '-i', tmp, ...args, out]);
            let stderr = '';
            proc.stderr.on('data', (d) => { stderr += d; });
            proc
                .on('error', reject)
                .on('close', async (code) => {
                    try { await fs.promises.unlink(tmp); } catch {}
                    if (code !== 0) {
                        try { await fs.promises.unlink(out); } catch {}
                        return reject(new Error(`ffmpeg exited ${code}: ${stderr.slice(-300)}`));
                    }
                    try {
                        const result = await fs.promises.readFile(out);
                        await fs.promises.unlink(out);
                        resolve(result);
                    } catch (e) { reject(e); }
                });
        } catch (e) { reject(e); }
    });
}

/** Convert audio to MP3 (WhatsApp audio) */
function toAudio(buffer, ext) {
    return ffmpeg(buffer, ['-vn', '-ac', '2', '-b:a', '128k', '-ar', '44100', '-f', 'mp3'], ext, 'mp3');
}

/** Convert audio to Opus PTT (WhatsApp voice note) */
function toPTT(buffer, ext) {
    return ffmpeg(buffer, ['-vn', '-c:a', 'libopus', '-b:a', '128k', '-vbr', 'on', '-compression_level', '10'], ext, 'opus');
}

/** Convert video to MP4 (WhatsApp video) */
function toVideo(buffer, ext) {
    return ffmpeg(buffer, ['-c:v', 'libx264', '-c:a', 'aac', '-ab', '128k', '-ar', '44100', '-crf', '32', '-preset', 'slow'], ext, 'mp4');
}

module.exports = { toAudio, toPTT, toVideo, ffmpeg };
