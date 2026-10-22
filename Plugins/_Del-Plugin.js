const fs   = require("fs");
const path = require("path");

const PLUGINS_DIR = path.resolve(__dirname);

const handler = async (m, { reply, isOwner, text, command }) => {
    try {
        if (!isOwner) return reply(mess.owner);
        const plugins = fs.readdirSync(PLUGINS_DIR);
        if (plugins.length < 1) return reply("Tidak ada file plugin");
        if (!text || !text.endsWith(".js"))
            return reply(`*contoh:* ${command} ping.js`);

        // Prevent path traversal.
        const safeName = path.basename(text.trim().toLowerCase());
        const target   = path.resolve(PLUGINS_DIR, safeName);
        if (!target.startsWith(PLUGINS_DIR + path.sep)) {
            return reply("Nama plugin tidak valid.");
        }
        if (!plugins.map(p => p.toLowerCase()).includes(safeName))
            return reply("Plugin tidak ditemukan");

        fs.unlinkSync(target);
        return reply(`Berhasil menghapus plugin *${safeName}*`);
    } catch (err) {
        console.error("[delplugin]", err);
    }
};

handler.command = ["delp","dp","delplugin","delplugins"];
module.exports = handler;
