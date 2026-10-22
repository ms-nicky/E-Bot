require("./LightSecret")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// Bebas Ubah
global.owner = process.env.BOT_OWNER || "YOUR_NUMBER"
global.nobot = process.env.BOT_NUMBER || global.owner
global.namaowner = process.env.BOT_OWNER_NAME || "ANIME-AI"
global.namaBot = "ANIMEAI"
global.title = "ANIME-AI"

// Jangan Di ubah
global.creator = `${owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = "New"
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner

// Bebas Ubah
// True = on || False = Off 
global.status = true
global.owneroff = true
global.autoread = true
global.autotyping = true
global.Antilinkgc = true
global.Antilinkch = true
global.antispam = true
global.onlygc = false

// Set Payment
global.qris = process.env.QRIS_URL || ""
global.dana = process.env.DANA_NUMBER || ""
global.gopay = process.env.GOPAY_NUMBER || ""

// ===={ Set Link }
global.ch = process.env.CHANNEL_URL || ""
global.idch = process.env.CHANNEL_JID || ""
global.linkgc = process.env.GROUP_LINK || ""
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = process.env.GROUP_JID || ""
// set prefix
global.setprefix = ".", "/", "#"

// User Sosmed — ganti via environment variables, jangan hardcode di source
global.tt = process.env.BOT_TIKTOK || ""
global.yt = process.env.BOT_YOUTUBE || ""
global.ig = process.env.BOT_INSTAGRAM || ""

// Setting Api cVPS
global.doToken = process.env.DIGITALOCEAN_TOKEN || ""
global.linodeToken = process.env.LINODE_TOKEN || ""

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://"
global.apikey = process.env.PTERODACTYL_API_KEY || "" //ptla
global.capikey = process.env.PTERODACTYL_CLIENT_KEY || "" //ptlc

// [ THEME URL & URL ] ========//
global.thumbnail = process.env.BOT_THUMBNAIL_URL || 'https://files.catbox.moe/4wk4wd.jpg'

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner",
    prem: "Khusus Premium",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat",
    done: "Sukses"
}

global.packname = nama
global.author = namaBot

//
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//
