# Anime-AI Clean Build — Security Notes

This build is a cleaned derivative of the supplied archive. The following behaviors were removed:

- automatic WhatsApp channel/newsletter follows
- automatic joining of a hard-coded WhatsApp group on connection
- bug/crash/force-close attack functions and their menu entries
- owner-triggered shell execution via `$`
- owner-triggered JavaScript `eval` commands via `>` / `<`
- startup obfuscation in `index.js`
- hard-coded API keys and the hard-coded Pinterest cookie
- the unused `child_process` and `javascript-obfuscator` package dependencies

Important limitations:

1. The project still uses Baileys to automate a WhatsApp account. This is not the official WhatsApp Business Platform. Use a dedicated test account and follow WhatsApp rules.
2. The bot still calls third-party APIs for some features. Review each endpoint before sending sensitive data.
3. FFmpeg is still invoked by media conversion features. That is an intended local media-processing dependency, not a general-purpose shell command interface.
4. This is a static source audit/cleanup, not a guarantee that every transitive npm dependency or remote API is safe.
5. Run `npm install` from this clean directory and keep the generated `session/` directory private.
