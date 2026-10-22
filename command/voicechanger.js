/**
 * voicechanger.js
 *
 * Security note: `exec` is used with an ffmpeg command.  The `set` argument
 * is chosen from a fixed whitelist of ffmpeg filter strings (never from raw
 * user input), and the media temp path is produced internally by
 * downloadAndSaveMediaMessage.  Both are quoted with shell-escape to prevent
 * argument injection in case a filename contains special characters.
 */
const { exec } = require("child_process");
const fs       = require("fs");
const path     = require("path");
const { getRandom } = require("../lib/myfunction");

/** Simple shell-argument quoting: wrap in single quotes, escape embedded ones. */
function shellQuote(s) {
    return "'" + String(s).replace(/'/g, "'\\''") + "'";
}

const FILTER_MAP = {
    bass:      "-af equalizer=f=54:width_type=o:width=2:g=20",
    blown:     "-af acrusher=.1:1:64:0:log",
    deep:      "-af atempo=4/4,asetrate=44500*2/3",
    earrape:   "-af volume=12",
    fast:      '-filter:a "atempo=1.63,asetrate=44100"',
    fat:       '-filter:a "atempo=1.6,asetrate=22100"',
    nightcore: "-filter:a atempo=1.06,asetrate=44100*1.25",
    reverse:   '-filter_complex "areverse"',
    robot:     "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"",
    slow:      '-filter:a "atempo=0.7,asetrate=44100"',
    smooth:    "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"",
    tupai:     '-filter:a "atempo=0.5,asetrate=65100"',
};

const handler = async (m, { mime, client, reaction, quoted, command, reply, prefix }) => {
    if (!/audio/.test(mime))
        return reply(`Reply audio, dengan caption ${prefix + command}`);

    const set = FILTER_MAP[command];
    if (!set) return reply("Filter tidak dikenali.");

    if (/audio/.test(mime)) {
        let media;
        try {
            media = await client.downloadAndSaveMediaMessage(quoted);
        } catch (err) {
            console.error("[voicechanger] download error:", err);
            return reply("Gagal mengunduh media.");
        }

        await reaction(m.chat, "⚡");
        const ran = getRandom(".mp3");

        // Use path.resolve to prevent any traversal, then shell-quote both paths.
        const safeSrc  = shellQuote(path.resolve(media));
        const safeDest = shellQuote(path.resolve(ran));

        const cmd = `ffmpeg -i ${safeSrc} ${set} ${safeDest}`;

        exec(cmd, (err) => {
            // Always clean up the source temp file.
            try { fs.unlinkSync(media); } catch (_) {}

            if (err) {
                console.error("[voicechanger] ffmpeg error:", err.message);
                try { fs.unlinkSync(ran); } catch (_) {}
                return reply("Terjadi kesalahan saat memproses audio.");
            }

            let buff;
            try {
                buff = fs.readFileSync(ran);
            } catch (readErr) {
                console.error("[voicechanger] read output error:", readErr);
                return reply("Terjadi kesalahan saat membaca output audio.");
            }

            client.sendMessage(m.chat, {
                audio:    buff,
                mimetype: "audio/mpeg",
                ptt:      true,
            });

            try { fs.unlinkSync(ran); } catch (_) {}
        });
    }
};

handler.help    = ["voice changer"];
handler.tags    = ["voice"];
handler.command = ["tupai","smooth","slow","robot","reverse","nightcore",
                   "fat","fast","earrape","deep","blown","bass"];

module.exports = handler;
