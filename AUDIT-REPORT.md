# ANIME-AI Clean Build — Audit Report

Date: 2026-08-27

## Verdict

The supplied source archive should **not** be run unchanged on a primary WhatsApp account. A clean derivative has been produced with the known unsolicited and attack-oriented behaviors removed.

This is a **static source-code cleanup**, not a mathematical guarantee of safety. NPM dependencies and remote APIs remain third-party software/services.

## Removed from executable source

- Hidden Base64/eval startup wrapper in `index.js`.
- Automatic follow of hard-coded WhatsApp newsletter/channel JIDs when the connection opens.
- Automatic join of a hard-coded WhatsApp group when the connection opens.
- Bug/crash/force-close payload functions and commands: `fclose`, `forceclose`, `fc-invis`, `delaymaker`, `delayinvis`, `crash`, `delayip`.
- The `.menubug` command/menu.
- Owner shell command execution through messages beginning with `$`.
- Owner JavaScript execution through messages beginning with `>` / `<`.
- The `javascript-obfuscator` runtime command and package dependency.
- Hard-coded Google/TimeZoneDB/Anabot/Tenor API keys.
- Hard-coded Pinterest session cookie.
- The unnecessary npm `child_process` dependency. Node's built-in `child_process` remains only where FFmpeg media conversion uses it.
- Original payment/owner/channel/group identifiers in `config.js`; these are now environment variables/placeholders.

## Deliberately retained

- Normal bot features such as AI, media conversion, games, downloads, and group utilities.
- Explicit owner-only `.join`/`.joingc` command. This is **manual**, not automatic; the bot will not join a group merely because it connects.
- FFmpeg process execution required by media conversion features.
- Third-party HTTP/API calls used by normal bot features.

## Remaining risks / limitations

1. `@whiskeysockets/baileys` is still declared from the source archive's GitHub fork (`github:Daff404/Baileys`). It was not replaced automatically because the supplied code imports several APIs and changing the library can require a compatibility migration. Treat this dependency as a separate review item.
2. The project still automates a WhatsApp account rather than using the official WhatsApp Business Platform. Use a dedicated test account and follow WhatsApp rules.
3. Some bot features upload user-supplied media to third-party services. Do not process confidential material without reviewing those services.
4. `npm install` dependency auditing could not be completed within the available execution window, so transitive dependency safety is **not certified**.
5. Before first real use, configure secrets through environment variables and keep the generated `session/` directory private.

## Verification performed

- Node syntax checks passed for `index.js`, `LightSecret.js`, `config.js`, `command/time.js`, and `lib/scraper.js`.
- No `newsletterFollow` call remains.
- No automatic group invite acceptance remains in the connection-open handler.
- No attack payload function remains.
- No runtime `atob()`/`eval()` obfuscation remains.
- No original Google/TimeZoneDB API keys remain.
