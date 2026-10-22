const fs   = require("fs");
const path = require("path");

const PLUGINS_DIR = path.resolve(__dirname);

const handler = async (m, { reply, isOwner, text, cmd, command }) => {
    try {
        if (!isOwner) return reply(mess.owner);
        if (!text || !m.quoted || !m.quoted.text)
            return reply(`Reply kode & input nama plugin\n*contoh:* ${command} menu.js dengan reply codenya`);
        if (!text.endsWith(".js"))
            return reply(`Nama file plugin harus berakhiran .js`);

        // Prevent path traversal: strip any directory components, then verify
        // the resolved destination is inside PLUGINS_DIR.
        const safeName = path.basename(text.trim());
        const dest = path.resolve(PLUGINS_DIR, safeName);
        if (!dest.startsWith(PLUGINS_DIR + path.sep)) {
            return reply("Nama plugin tidak valid.");
        }

        const action = ["saveplugin","saveplugins","svp","sp"].includes(command)
            ? "save" : "menambah";

        fs.writeFileSync(dest, m.quoted.text);
        return reply(`Berhasil ${action} plugin *${safeName}*`);
    } catch (err) {
        console.error("[addplugin]", err);
    }
};

handler.command = ["addp","addplugin","addplugins","saveplugin","saveplugins","svp","sp"];
module.exports = handler;
