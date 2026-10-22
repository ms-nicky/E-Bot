const fs   = require("fs");
const path = require("path");

const PLUGINS_DIR = path.resolve(__dirname);

const handler = async (m, { isOwner, reply, text }) => {
    if (!isOwner) return reply(global.mess.owner);
    if (!text)    return m.reply("Masukkan nama file plugin");
    if (!text.endsWith(".js")) return m.reply("Nama file harus berformat .js");

    // Prevent path traversal.
    const safeName = path.basename(text.trim().toLowerCase());
    const target   = path.resolve(PLUGINS_DIR, safeName);
    if (!target.startsWith(PLUGINS_DIR + path.sep)) {
        return m.reply("Nama plugin tidak valid.");
    }
    if (!fs.existsSync(target)) return m.reply("File plugins tidak ditemukan!");

    const content = fs.readFileSync(target, "utf-8");
    return m.reply(content.toString());
};

handler.command = ["getp","gp","getplugins","getplugin"];
module.exports = handler;
