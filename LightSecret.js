require('./config');
require('./menu');
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const cheerio = require('cheerio');
const crypto = require('crypto');
const yts = require('yt-search');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const ytdl = require('@vreden/youtube_scraper');
const { GoogleGenerativeAI } = require("@google/generative-ai")
const genshindb = require("genshin-db")
const { SnackVideo } = require('./lib/function/snackvideo')
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { tiktokSearchVideo } = require('./lib/scraper');
const owner = JSON.parse(fs.readFileSync("./lib/database/owner.json"))
const {
	UploadFileUgu
} = require('./lib/uploaderr')
const { CatBox, TelegraPh, floNime, uptotelegra } = require('./lib/uploader');
let db_respon_list = JSON.parse(fs.readFileSync('./lib/list-message.json'));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const contacts = JSON.parse(fs.readFileSync("./lib/database/contacts.json"))
const loadPluginsCommand = require("./lib/handler.js")
const { msgFilter } = require('./lib/antispam')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { exec } = require('child_process');
/** Quote a path for safe use in shell exec strings (single-quote style). */
const _shellQ = (s) => "'" + String(s).replace(/'/g, "'\\''") + "'";
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
// NOTE: this list was previously ~65 names, most of which do not exist on
// the current @whiskeysockets/baileys API (they came from an old/legacy
// Baileys version). Verified against actual usage in this file: only the
// names below are ever called directly by their bare identifier. Names
// used elsewhere via `proto.Message.X` (e.g. InteractiveMessage, Header) or
// as custom properties on the `LightSecret` socket object (e.g.
// downloadAndSaveMediaMessage, defined in index.js) are intentionally not
// re-imported here since they were never really coming from this import.
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, areJidsSameUser, getContentType, proto, relayWAMessage, Browsers, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')

const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function.js');

module.exports = LightSecret = async (LightSecret, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? LightSecret.user.id.split(":")[0] + "@s.whatsapp.net" || LightSecret.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : `${setprefix}`;
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const isPrivate = from.endsWith("@s.whatsapp.net");
        
        const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
        const pler = JSON.parse(fs.readFileSync('./command/idgrup.json').toString())
        const aksesGB = isGroup ? pler.includes(m.chat) : false
        const botNumber = await LightSecret.decodeJid(LightSecret.user.id);
        const isOwner = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const LightSecretdev = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const isPremium = premium.includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await LightSecret.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const qkontak = {
key: {
participant: `13135550002@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=13135550002:+1 (313) 555-0002\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
//
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');
//
        if (time2 < "05:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "11:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "15:00:00") {
	ucapanWaktu = "Selamat Siang 🌅";
} else if (time2 < "18:00:00") {
	ucapanWaktu = "Selamat Sore 🌇";
} else if (time2 < "19:00:00") {
	ucapanWaktu = "Selamat Petang 🌆";
}
//

        const menureply = (teks) => {
LightSecret.sendMessage(m.chat,
{ text: `
Hallo Kak ${pushname}, Perkenalkan nama saya ${namaBot}, Saya adalah Bot WhatsApp yang diciptakan oleh ${namaowner}, Saya siap membantu mu kapanpun dan dimanapun 🤗

╔═══☢︎ *Informasi User*
║ ◈ Nama : ${pushname}
║ ◈ Nomor : ${m.sender.split("@")[0]}
║ ◈ Role : ${isOwner ? 'Owner' : isPremium ? 'VIP' : 'Free'}
╠═══════════════════⪨
║
╠═══☢︎ *Informasi Bot*
║ ◈ Nama-Bot : ${namaBot}
║ ◈ Devoloper : ${namaowner}  
║ ◈ Mode : ${LightSecret.public ? 'Public' : 'Self'} 
║ ◈ Version : ${versi}
║ ◈ Runtime : ${runtime(process.uptime())}
║ ◈ Total-Fitur : ${totalfitur}
╠═══════════════════⪨
║
╠═══☢︎ *Sosmed Owner*
║ ◈ Tiktok : ${tt}
║ ◈ YouTube : ${yt}
║ ◈ Instagram : ${ig}
╚═══════════════════⪨

${teks}
`,
contextInfo:{
mentionedJid:[sender],
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: "120363368222492263@newsletter",
newsletterName: `${ucapanWaktu}`, 
serverId: 200
}, 
externalAdReply: {
title: `© ${namaBot}`, 
thumbnailUrl: global.thumbnail, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "https://Arisu-MD", 
}}
}, {quoted: m })
}
//
const reply = (teks) => {
LightSecret.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: "120363368222492263@newsletter",
newsletterName: `${ucapanWaktu}`, 
serverId: 0
}, 
externalAdReply: {
title: `© ${namaBot}`, 
thumbnailUrl: thumbnail, 
renderLargerThumbnail: false, 
mediaType: 0, 
previewType: 0, 
sourceUrl: "https://LightSecret-Dev", 
}}
}, {quoted: m })
}
//
//
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize,
            randomKarakter
            } = require('./lib/myfunction');          
// No automatic newsletter/channel follows are performed by the clean build.
//theme sticker reply
        const LightSecretwet = () => {
        let LightSecretStickRep = fs.readFileSync('./lib/sticker_reply/wait.webp')
        LightSecret.sendMessage(from, { sticker: LightSecretStickRep }, { quoted: m })
        }
        const LightSecretadmn = () => {
        let LightSecretStickRep = fs.readFileSync('./lib/sticker_reply/admin.webp')
        LightSecret.sendMessage(from, { sticker: LightSecretStickRep }, { quoted: m })
        }
        const LightSecretbotadmin = () => {
        let LightSecretStickRep = fs.readFileSync('./lib/sticker_reply/botadmin.webp')
        LightSecret.sendMessage(from, { sticker: LightSecretStickRep }, { quoted: m })
        }
        const LightSecretowner = () => {
        let LightSecretStickRep = fs.readFileSync('./lib/sticker_reply/owner.webp')
        LightSecret.sendMessage(from, { sticker: LightSecretStickRep }, { quoted: m })
        }
        const LightSecretongb = () => {
        let LightSecretStickRep = fs.readFileSync('./lib/sticker_reply/group.webp')
        LightSecret.sendMessage(from, { sticker: LightSecretStickRep }, { quoted: m })
        }
        const LightSecretpriv = () => {
        let LightSecretStickRep = fs.readFileSync('./lib/sticker_reply/prem.webp')
        LightSecret.sendMessage(from, { sticker: LightSecretStickRep }, { quoted: m })
        }
        let cihuy = thumbnail
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#000000").bold(`▢ New Message Script By LightSecret-Dev`));
            console.log(
                chalk.bgHex("#ffffff").black(
                    `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${senderNumber}`
                )
            );
            
            if (isGroup) {
                console.log(
                    chalk.bgHex("#ffffff").black(
                        `   ⌬ Grup: ${groupName} \n` +
                        `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        
        const reaction = async (jidss, emoji) => {
            LightSecret.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
//

// Anti spam
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await LightSecret.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// AntiBot
global.botWarnings = global.botWarnings || {}
global.antibotGroups = global.antibotGroups || {}
function getTextFromMsg(msg) {
  try {
    return (
      msg?.conversation ||
      msg?.extendedTextMessage?.text ||
      msg?.imageMessage?.caption ||
      msg?.videoMessage?.caption ||
      msg?.documentMessage?.caption ||
      msg?.buttonsMessage?.contentText ||
      msg?.templateMessage?.hydratedTemplate?.hydratedContentText ||
      msg?.listMessage?.description ||
      msg?.viewOnceMessage?.message?.conversation ||
      ''
    ).toLowerCase()
  } catch {
    return ''
  }
}
if (
  m.isGroup &&
  !isOwner &&
  global.antibotGroups[m.chat]
) {
  const groupId = m.chat
  const sender = m.sender
  const pushName = m.pushName?.toLowerCase() || ''
  const textMsg = getTextFromMsg(m.message)
  const ctx =
    m.message?.extendedTextMessage?.contextInfo ||
    m.message?.imageMessage?.contextInfo ||
    m.message?.videoMessage?.contextInfo ||
    m.message?.documentMessage?.contextInfo ||
    m.message?.buttonsMessage?.contextInfo ||
    m.message?.templateMessage?.contextInfo ||
    {}
  let isPossibleBot =
    pushName.match(/botz|bot|wa bot|whatsapp bot/) ||
    textMsg.match(/hallo pengguna|silakan tekan tombol|permintaan anda sedang diproses/i) ||
    textMsg.match(/hello user|please wait|click the button|your request is being processed/i) ||
    ctx.externalAdReply != null ||
    ctx.forwardedNewsletterMessageInfo != null
  if (isPossibleBot) {
    global.botWarnings[groupId] = global.botWarnings[groupId] || {}
    global.botWarnings[groupId][sender] = (global.botWarnings[groupId][sender] || 0) + 1
    const warnCount = global.botWarnings[groupId][sender]
    if (warnCount <= 2) { // max warn ubah ae
      await LightSecret.sendMessage(groupId, {
        text: `⚠️ *Antibot aktif!*\nBot tidak diizinkan di grup ini!\nPeringatan ke-${warnCount}/3`,
        mentions: [sender]
      })
      await LightSecret.sendMessage(groupId, { delete: m.key }).catch(() => {})
    } else {
      await LightSecret.sendMessage(groupId, {
        text: `Bot @${sender.split('@')[0]} telah dikeluarkan dari grup karena melanggar aturan.`,
        mentions: [sender]
      })
      await LightSecret.groupParticipantsUpdate(groupId, [sender], 'remove').catch(() =>
        LightSecret.sendMessage(groupId, { text: '⚠️ Gagal kick bot. Mungkin bot bukan admin.' })
      )
      delete global.botWarnings[groupId][sender]
    }
  }
}
//
        async function totalfiturr() {
   const fitur1 = () =>{
            var mytext = fs.readFileSync("./LightSecret.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./LightSecret.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }
 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return 
console.log("!")
}
}
const totalfitur = await totalfiturr()
//
// FUNCTION
if (global.autotyping) {
if (command) { LightSecret.readMessages([m.key])}
LightSecret.sendPresenceUpdate('composing', from)
}
if (global.autoread) {
LightSecret.readMessages([m.key])
        };

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}


LightSecret.enhancer = LightSecret.enhancer ? LightSecret.enhancer : {};
        
LightSecret.autoshalat = LightSecret.autoshalat ? LightSecret.autoshalat : {}
    let id = m.chat
    if (id in LightSecret.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        LightSecret.autoshalat[id] = [
            LightSecret.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnailUrl: "https://img1.pixhost.to/images/6601/612882514_LightSecret.jpg",
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete LightSecret.autoshalat[m.chat]
            }, 5000)
        ]
    }
    }
		async function emote(emo) {
			LightSecret.sendMessage(m.chat, {
				react: {
					text: emo,
					key: m.key
				}
			});
		}
		//
		//
//
function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
//
global.menfess = global.menfess ? global.menfess : {}
         let mf = Object.values(global.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Balas Pesan Menfess Mu Di Private Chat`)
          //  if (!/conversation|extended/.test(m.type)) return reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await LightSecret.sendMessage(mf.from, { text: text }).then(async () => {
               m.reply(`pesan Berhasil Terkirim!!`)
               await sleep(1000)
               delete global.menfess[mf.id]
               return !0
            })
         }     
         //
               //
               if (global.autoaigc && !m.key.fromMe && !isCmd) {
    try {
        const ai_name = "Xenovia";
        const logic = "kamu adalah Xenovia ai, asisten ai yang di buat oleh LightSecret, kamu bisa mempromosikan link group https://chat.whatsapp.com/FKLOiDRsK4T9DcSvFGxNBx tetapi agak jarang saja jangan terlalu sering mempromosikan nya, kamu adalah asisten ai cerdas yang cantik dan ramah kamu suka emot 🐱😄😆, jangan sering menyapa orang, dan kamu bisa bahasa Jepang tapi jangan kebanyakan jepang";
        const url = `${global.nekorin}/ai/chatbot?ai_name=${encodeURIComponent(ai_name)}&text=${encodeURIComponent(body)}&logic=${encodeURIComponent(logic)}`;
        const res = await fetch(url);
        const json = await res.json();

        if (json?.status && json?.result) {
            m.reply(json.result);
        } else {
            m.reply('Maaf, aku tidak mengerti maksudmu.');
        }
    } catch (error) {
        console.error("AutoAI Error:", error);
        m.reply("Upss error silahkan hubungi owner agar di fix");
    }
}
//
// GAME TEBAK KATA
if (global.tebakkata) {
let { soal, jawaban, waktu } = tebakkata
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete tebakkata
}
}
// GAME ASAH OTAK
if (global.asahotak) {
let { soal, jawaban, waktu } = asahotak
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete asahotak
}
}
// Game Susun Kata
if (global.susunkata) {
let { soal, jawaban, waktu } = susunkata
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete susunkata
}
}
// Game Tebak Gambar
if (global.tebakgambar) {
let { soal, jawaban, waktu } = tebakgambar
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete tebakgambar
}
}
// Game Tebak Bendera
if (global.tebakbendera) {
let { soal, jawaban, waktu } = tebakbendera
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete tebakbendera
}
}
// Game Tebak Kimia
if (global.tebakkimia) {
let { soal, jawaban, waktu } = tebakkimia
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete tebakkimia
}
}
// Game Family 100
if (global.family) {
let { soal, jawaban, waktu } = family
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}`)
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family
}
}
//

//
		// FUNCTION Onlygc
//if (!isCreator && global.onlygc && !m.isGroup && isCmd && !['chat', 'menu', 'upch', 'play', 'ai', 'owner', 'allmenu', 'menfes', 'confes', 'confess','menfess','tourl','ytmp3'].includes(command)) return m.reply(`bot sedang mode group🤐`)
        if (!isOwner && global.onlygc && !m.isGroup && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return LightSecret.sendMessage(m.chat, {image: {url: thumbnail }, caption: `*akses ditolak*\n\nBot Sedang Mode Only Group, Join group agar bisa menggunakan bot\n${linkgc}` }, {quoted: m})
//
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
//Plugin
const handleData = { LightSecret, text, args, isCmd, mime, qmsg, isOwner, command, reply }
if (isCmd) {
await loadPluginsCommand(m, command, handleData)
}
//
		
//============= [ COMMANDS ] ====================================================
        switch (command) {
case 'owner': {
 let name = m.pushName || LightSecret.getName(m.sender);
let panduan = foother

const url = `${global.thumbnail}`
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: LightSecret.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` } }, { upload: LightSecret.waUploadToServer })),
          gifPlayback: false,
          hasMediaAttachment: false
        }),
                body: {
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Kirim pesan\",\"url\":\"https://wa.me/${global.owner}?text=Hai+Owner\",\"merchant_url\":\"https://whatsapp.com\"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await LightSecret.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
}
break

// ============{ Menu } ===============//
case "menu": {
let me = m.sender
menureply(`${global.menu}`)
}
break
case "menuall": {
let me = m.sender
menureply(`${global.allmenu}`)
}
break
case "menuowner": {
let me = m.sender
menureply(`${global.menuowner}`)
}
break
case "menugroup": {
let me = m.sender
menureply(`${global.menugroup}`)
}
break
case "menupanel": {
let me = m.sender
menureply(`${global.menupanel}`)
}
break
case "menuai": {
let me = m.sender
menureply(`${global.menuai}`)
}
break
case "menudownload": {
let me = m.sender
menureply(`${global.menudownload}`)
}
break
case "menuconvert": {
let me = m.sender
menureply(`${global.menuconvert}`)
}
break
case "menusound": {
let me = m.sender
menureply(`${global.menusound}`)
}
break
case "menurandom": {
let me = m.sender
menureply(`${global.menurandom}`)
}
break
case "menufun": {
let me = m.sender
menureply(`${global.menufun}`)
}
break
case "menuother": {
let me = m.sender
menureply(`${global.menuother}`)
}
break
case "menunsfw": {
let me = m.sender
menureply(`${global.menunsfw}`)
}
break
case "menuprimbon": {
let me = m.sender
menureply(`${global.menuprimbon}`)
}
break
case "menuquotes": {
let me = m.sender
menureply(`${global.menuquotes}`)
}
break
case "menucecan": {
let me = m.sender
menureply(`${global.menucecan}`)
}
break
case "menupush": {
let me = m.sender
menureply(`${global.menupush}`)
}
break
case "menuislam": {
let me = m.sender
menureply(`${global.menuislam}`)
}
break
case "menuanime": {
let me = m.sender
menureply(`${global.menuanime}`)
}
break
case "menumaker": {
let me = m.sender
menureply(`${global.menumaker}`)
}
break
case "menusad": {
let me = m.sender
menureply(`${global.menusad}`)
}
break
case "menugenshin": {
let me = m.sender
menureply(`${global.menugenshin}`)
}
break
case "menuberita": {
let me = m.sender
menureply(`${global.menuberita}`)
}
break
case "menurandomvid": {
let me = m.sender
menureply(`${global.menurandomvid}`)
}
break
case "menulinode": {
let me = m.sender
menureply(`${global.menulinode}`)
}
break
case "menumenfess": {
let me = m.sender
menureply(`${global.menumenfess}`)
}
break
case "menugame": {
let me = m.sender
menureply(`${global.menugame}`)
}
break
case "menustore": {
let me = m.sender
menureply(`${global.menustore}`)
}
break
case "menusearch": {
let me = m.sender
menureply(`${global.menuse}`)
}
break
// ============{ Batas }==========//
// ============Owner
case "listcase": {
if (!isOwner) return reply(mess.owner)
const code = fs.readFileSync('LightSecret.js', 'utf8');
const regex = /case\s+["'`](.+?)["'`]\s*:/g;
let match;
const cases = [];
while ((match = regex.exec(code)) !== null) {
  cases.push(match[1]);
}
return reply(`
*Total Case:* ${cases.length}

> ${cases.join("\n> ")}
`)
}
break
case "reactch":
case "rch": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Contoh:\n.reactch https://whatsapp.com/channel/xxx/123 ❤️LightSecret\n.reactch https://whatsapp.com/channel/xxx/123 ❤️LightSecret|5");

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const [mainText, offsetStr] = text.split('|');
    const argsa = mainText.trim().split(" ");
    const link = argsa[0];

    if (!link.includes("https://whatsapp.com/channel/")) {
        return m.reply("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan ❤️biyu|3");
    }

    const channelId = link.split('/')[4];
    const rawMessageId = parseInt(link.split('/')[5]);
    if (!channelId || isNaN(rawMessageId)) return m.reply("Link tidak lengkap!");
    const offset = parseInt(offsetStr?.trim()) || 1;
    const teksNormal = argsa.slice(1).join(' ');
    const teksTanpaLink = teksNormal.replace(link, '').trim();
    if (!teksTanpaLink) return m.reply("Masukkan teks/emoji untuk direaksikan.");
    const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
        if (c === ' ') return '―';
        return hurufGaya[c] || c;
    }).join('');

    try {
        const metadata = await LightSecret.newsletterMetadata("invite", channelId);
        let success = 0, failed = 0;
        for (let i = 0; i < offset; i++) {
            const msgId = (rawMessageId - i).toString();
            try {
                await LightSecret.newsletterReactMessage(metadata.id, msgId, emoji);
                success++;
            } catch (e) {
                failed++;
            }
        }
        m.reply(`✅ Berhasil kirim reaction *${emoji}* ke ${success} pesan di channel *${metadata.name}*\n❌ Gagal di ${failed} pesan`);
    } catch (err) {
        console.error(err);
        m.reply("❌ Gagal memproses permintaan!");
    }
}
break
case "clearchat":
      case "clc":
        {
          if (!isOwner) {
            return replyviex(mess.owner);
          }
          LightSecret.chatModify({
            delete: true,
            lastMessages: [{
              key: m.key,
              messageTimestamp: m.messageTimestamp
            }]
          }, m.chat);
        }
        break;
case "rvo": case "readviewonce": {
 if (!isOwner) return reply(mess.owner);
if (!m.quoted) return reply("reply pesan viewOnce nya!")
let msg = m?.quoted?.message?.imageMessage || m?.quoted?.message?.videoMessage || m?.quoted?.message?.audioMessage || m?.quoted
if (!msg.viewOnce && m.quoted.mtype !== "viewOnceMessageV2" && !msg.viewOnce) return reply("Pesan itu bukan viewonce!")
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");
let media = await downloadContentFromMessage(msg, msg.mimetype == 'image/jpeg' ? 'image' : msg.mimetype == 'video/mp4' ? 'video' : 'audio')
    let type = msg.mimetype
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return LightSecret.sendMessage(m.chat, {video: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return LightSecret.sendMessage(m.chat, {image: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return LightSecret.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
case 'listgc': {
 if (!isOwner) return reply(mess.owner);

 try {
 const getGroups = await LightSecret.groupFetchAllParticipating();
 const groups = Object.values(getGroups);

 if (!groups.length) return reply('❌ Bot belum gabung di grup manapun.');

 let teks = `⬣ *LIST GROUP ${namaBot.toUpperCase()}*\n📊 Total Grup: ${groups.length}\n\nBerikut daftar grup:\n\n`;

 const buttons = [];

 groups.forEach((g, i) => {
 const groupId = g.id;
 const groupName = g.subject;
 const memberCount = g.participants?.length || 0;
 const created = moment(g.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm') + ' WIB';

 teks += `*${i + 1}. ${groupName}*\n`;
 teks += `🆔 ID: ${groupId}\n👥 Member: ${memberCount}\n🕐 Dibuat: ${created}\n\n`;

 buttons.push({
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: `📋 Copy ID GC #${i + 1}`,
 copy_code: groupId,
 id: `gc-${i + 1}`
 })
 });
 });

 await LightSecret.sendMessage(m.chat, {
 text: teks,
 footer: `📌 Klik tombol untuk copy ID grup`,
 title: `📃 Daftar Grup Aktif`,
 interactiveButtons: buttons
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 cpe('❌ Gagal mengambil data grup.');
 }
}
break

case "listowner": case "listown": {
if (owner.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owner) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
LightSecret.sendMessage(m.chat, {text: teks, mentions: owner}, {quoted: m})
}
break


case "delowner": case "delown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owner.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owner.indexOf(input)
await owner.splice(posi, 1)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break
case "addowner": case "addown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owner.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owner.push(input)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}

break
case "joingc": case "join": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("linkgcnya")
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await LightSecret.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}

break
case "listprem": {
if (!isOwner) return reply(mess.owner)
if (premium.length < 1) return reply("𝘕𝘰 𝘏𝘢𝘷𝘦 𝘜𝘴𝘦𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 :(")
let teks = `\n𝘓𝘪𝘴𝘵 𝘈𝘭𝘭 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
LightSecret.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: qkontak})
}
break
case "addprem": {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return reply(`𝘕𝘰𝘮𝘰𝘳 ${input2} 𝘴𝘶𝘥𝘢𝘩 𝘔𝘦𝘯𝘫𝘢𝘥𝘪 𝘗𝘳𝘦𝘮𝘪𝘶𝘮!`)
premium.push(input)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
}
break
case "delprem": {
    if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Delete success`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘛𝘰 𝘋𝘦𝘭𝘦𝘵𝘦 𝘗𝘳𝘦𝘮𝘪𝘶𝘮`)
}
break
case "public":{
if (!isOwner) return reply(mess.owner)
LightSecret.public = true
reply(`successfully changed to ${command}`)
}
break
case "self":{
if (!isOwner) return reply(mess.owner)
LightSecret.public = false
reply(`successfully changed to ${command}`)
}
break
case 'delppbot': {
if (!isOwner) return reply(mess.owner)
await LightSecret.removeProfilePicture(LightSecret.user.id)
reply(`Berhasil Menghapus Gambar Profil Bot`)
}
break
case 'setppbot':{
if (!isOwner) return reply(mess.owner)
if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return pesan(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await LightSecret.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (text == 'full') {
var {
img
} = await generateProfilePicture(medis)
await LightSecret.query({
tag: 'iq',
attrs: {
to: botNumber,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
reply("done")
} else {
var memeg = await LightSecret.updateProfilePicture(botNumber, {
url: medis
})
fs.unlinkSync(medis)
reply(mess.done)
}
}

break
case "tojs": case "q": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break 
case 'readchange': case 'autoread':{
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
global.autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
}

break
    case 'autotyping': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autotyping = true
await m.reply('Sukses mengaktifkan autotyping.')
} else if (args[0] === 'off') {
global.autotyping = false
await m.reply('Sukses menonaktifkan autotyping.')
}}

break               
case 'autosholat': {
LightSecret.autoshalat = LightSecret.autoshalat ? LightSecret.autoshalat : {}

 if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)

 if (text === "on") {
 LightSecret.autoshalat[sender] = {
 messages: []
 };
 m.reply(`[ ✓ ] sukses mode*\`Auto-Sholat\`* : ᴀᴋᴛɪғ`);
 } else if (text === "off") {
 delete LightSecret.autoshalat[sender];
 m.reply(`[ ✓ ] sukses mode *\`Auto-Sholat\`* : ɴᴏɴᴀᴋᴛɪғ`);
 }
};
break 
    case 'onlygc': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.onlygc = true
await m.reply(`Sukses mengaktifkan ${prefix+command}.`)
} else if (args[0] === 'off') {
global.onlygc = false
await m.reply(`Sukses menonaktifkan ${prefix+command}.`)
}}

break                         
case 'antilinkall': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.Antilinkall = true
await m.reply(`Sukses mengaktifkan ${prefix+command}.`)
} else if (args[0] === 'off') {
global.Antilinkall = false
await m.reply(`Sukses menonaktifkan ${prefix+command}.`)
}}

break            
case 'autoaigc':
case 'autoai': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoaigc = true
await m.reply(`Sukses mengaktifkan ${command}.`)
} else if (args[0] === 'off') {
global.autoaigc = false
await m.reply(`Sukses menonaktifkan ${command}.`)
}}

break               
// ============Group
case 'delete':
			case 'd':
			case 'del': {
			if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
				if (!m.quoted) return reply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				await LightSecret.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break
case 'antibot': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antibotGroups = true
await m.reply(`Sukses mengaktifkan ${prefix+command}.`)
} else if (args[0] === 'off') {
global.antibotGroups = false
await m.reply(`Sukses menonaktifkan ${prefix+command}.`)
}}

break            

case 'antilink4':
case 'antilinkig': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.Antilinkig = true
await m.reply(`Sukses mengaktifkan ${command}.`)
} else if (args[0] === 'off') {
global.Antilinkig = false
await m.reply(`Sukses menonaktifkan ${command}.`)
}}

break               
case 'antilink3':
case 'antiwame': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antiWame = true
await m.reply(`Sukses mengaktifkan ${command}.`)
} else if (args[0] === 'off') {
global.antiWame = false
await m.reply(`Sukses menonaktifkan ${command}.`)
}}

break               
case 'antilink2':
case 'antilinkch': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.Antilinkch = true
await m.reply(`Sukses mengaktifkan ${command}.`)
} else if (args[0] === 'off') {
global.Antilinkch = false
await m.reply(`Sukses menonaktifkan ${command}.`)
}}

break               
case 'antilink':
case 'antilinkgc': {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.Antilinkgc = true
await m.reply(`Sukses mengaktifkan ${command}.`)
} else if (args[0] === 'off') {
global.Antilinkgc = false
await m.reply(`Sukses menonaktifkan ${command}.`)
}}

break               
case'dor': case "kick": case "kik": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await LightSecret.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await LightSecret.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply("@tag/reply")
}
}

break
case "linkgc": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
const urlGrup = "https://chat.whatsapp.com/" + await LightSecret.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await LightSecret.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}

break
case "resetlinkgc": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
await LightSecret.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}

break
case "totag":{
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
 let users = participants.map(u => u.id).filter(v => v !== LightSecret.user.jid)
 if (!m.quoted) return reply(`✳️ Reply to a message`)
 LightSecret.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
break
case 'closetime':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
LightSecret.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
LightSecret.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}

break

case "closegc": case "close": 
case "opengc": case "open": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
m.reply(`.${command}time 1 detik`)
}
break
case "demote":
case "promote": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await LightSecret.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await LightSecret.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply("@tag/6285###")
}
}

break
case 'delppgc':{
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
await LightSecret.removeProfilePicture(from)
}
break
case 'setppgc':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botadmin)
if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await LightSecret.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (text == 'full') {
var {
img
} = await generateProfilePicture(medis)
await LightSecret.query({
tag: 'iq',
attrs: {
to: m.chat,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
reply(mess.done)
} else {
var memeg = await LightSecret.updateProfilePicture(m.chat, {
url: medis
})
fs.unlinkSync(medis)
reply(mess.done)
}

break
case 'tagall':{
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
const textMessage = args.join(" ") || "nothing";
let teks = `tagall message :\n> *${textMessage}*\n\n`;
const groupMetadata = await LightSecret.groupMetadata(m.chat);
const participants = groupMetadata.participants;
for (let mem of participants) {
teks += `@${mem.id.split("@")[0]}\n`;
}
LightSecret.sendMessage(m.chat, {
text: teks,
mentions: participants.map((a) => a.id)
}, { quoted: m });
}
break         
case "h":
case "hidetag": {
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isGroup) return reply(mess.group);
if (m.quoted) {
LightSecret.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
LightSecret.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, { quoted: m })
}
}
break

//============ Cpanel
case "cadmin": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await LightSecret.sendMessage(orang, {text: teks}, {quoted: m})
}
break

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (!text) return m.reply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = (username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await LightSecret.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break
case "listadmin": {
if (!isOwner) return reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await LightSecret.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break



case "listpanel": case "listp": case "listserver": {
if (!isOwner) return reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await LightSecret.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

case "deladmin": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${getid}*`)
}
break


case "delpanel": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${nameSrv}*`)
}
break

// ============Ai   
case 'faceblur':
case 'blurface': {
  if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)

let media = await LightSecret.downloadAndSaveMediaMessage(quoted);
let response = await CatBox(media);
  await LightSecret.sendMessage(m.chat, {image: {url: `https://api.siputzx.my.id/api/iloveimg/blurface?image=${response}` }, caption: foother }, {quoted: m})
}
break
case "imagebing": case "bingimage":
case "imgbing": case "bingimg": {
    if (!args.length) return m.reply("Masukkan prompt gambar!\nContoh: imgbing mobil sport merah");
    let query = encodeURIComponent(args.join(" "));
    let url = `https://beta.anabot.my.id/api/ai/bingImgCreator?prompt=${query}&apikey=${process.env.ANABOT_API_KEY || ""}`;
    try {
        await LightSecret.sendMessage(from, { react: { text: "⏳", key: m.key } });
        let response = await fetch(url);
        let data = await response.json();
        if (data.status !== 200 || !data.data.result.length) {
            return m.reply("Gambar tidak ditemukan!");
        }
        for (let img of data.data.result) {
            await LightSecret.sendMessage(from, { image: { url: img }, caption: "Maaf Jika Tidak Sesuai 😌" }, { quoted: m });
        }
        await LightSecret.sendMessage(from, { react: { text: "✅", key: m.key } });
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil gambar.");
    }
}

    break
case 'toanime':
case 'toreal': {
  try {
    if (!/image/.test(mime)) {
      return m.reply(`Kirim/kutip gambar dengan caption ${command}`)
    }
    await LightSecret.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
    
    const style = command === 'toanime' ? 'AnimageModel' : 'RealisticModel'
    const media = await LightSecret.downloadAndSaveMediaMessage(quoted)
    const imageUrl = await CatBox(media)

    const apiUrl = `https://fastrestapis.fasturl.cloud/imgedit/aiimage?prompt=Anime&reffImage=${encodeURIComponent(imageUrl)}&style=${style}&width=1024&height=1024&creativity=0.5`
    
    await LightSecret.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m })
  } catch (err) {
    console.error('Terjadi kesalahan:', err)
    m.reply('Terjadi kesalahan')
  } finally {
    if (media) {
      fs.promises.unlink(media).catch(() => {})
    }
  }
}

break
case 'ocr': {
  try {
    await LightSecret.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key
      }
    })
    const axios = require('axios')
    const FormData = require('form-data')
    const Uguu = async (buffer, filename) => {
      const form = new FormData()
      form.append('files[]', buffer, { filename })
      const { data } = await axios.post('https://uguu.se/upload.php', form, {
        headers: form.getHeaders()
      })
      if (data.files && data.files[0]) {
        return data.files[0].url
      } else {
        throw new Error('aplot ke uguu.se gagal coba lagi nanti')
      }
    }
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime.startsWith('image/')) throw 'silakan kirim atau reply gambar'
    let media = await q.download()
    let ext = mime.split('/')[1] || 'jpg'
    let filename = `ocr.${ext}`
    let imageUrl = await Uguu(media, filename)
    let { data } = await axios.get(`https://api.alyachan.dev/api/ocr?image=${imageUrl}&apikey=${process.env.ANABOT_API_KEY || ""}`)
    if (!data?.status || !data.result?.text) throw 'ocr gagal wok, atau text ga di temukan'
    let hasil = data.result.text.replace(/\r/g, '').trim()
    await LightSecret.sendMessage(m.chat, {
      react: {
        text: '✅',
        key: m.key
      }
    })
    m.reply(hasil)
  } catch (err) {
    m.reply(typeof err === 'string' ? err : err.message || 'terjadi kesalahan saat memproses gambar')
  }
}
break
case 'remove-wm': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
 
  let defaultPrompt = `Hapus watermark yang terdapat pada gambar. Perhatikan dengan teliti karena watermark bisa saja muncul di bagian atas, bawah, tengah, atau tersembunyi dengan ukuran kecil, transparan, atau blur. Hapus watermark tersebut secara menyeluruh tanpa mengurangi kualitas gambar asli dan tanpa mengubah elemen visual lainnya. Pastikan gambar tetap utuh, bersih, dan terlihat alami seolah tidak pernah memiliki watermark.`
  
  if (!mime) return m.reply(`Kirim/reply gambar dengan caption *${usedPrefix + command}*`)
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`)
  
  let promptText = text || defaultPrompt
  
  reply("Delete Watermark...")
 
  try {
    let imgData = await q.download()
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')
 
    const base64Image = imgData.toString("base64")
 
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ]
 
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    })
 
    const response = await model.generateContent(contents)
 
    let resultImage
    let resultText = ""
 
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text
      } else if (part.inlineData) {
        const imageData = part.inlineData.data
        resultImage = Buffer.from(imageData, "base64")
      }
    }
 
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`)
      fs.writeFileSync(tempPath, resultImage)
 
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Delete Watermark*`
      }, { quoted: m })
 
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath)
        } catch {}
      }, 30000)
    } else {
      m.reply("Yah Errror")
    }
  } catch (error) {
    console.error(error)
    m.reply(`${error.message}`)
  }
}
break
case 'gemini':
case 'luminai':
case 'gpt':
case 'openai':
case 'ai': {
      try {
        if (!text) return m.reply(`Contoh: ${command} hai`);
        await LightSecret.sendMessage(m.chat, {react: {text: '💬', key: m.key}})
        let prompt = `Your name is ${namaBot} and use Indonesian as your primary language.`
        const apiUrl = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(prompt)}&content=${encodeURIComponent(text)}`)
        const gpt = apiUrl.data
        m.reply(`${gpt}`)
      } catch (err) {
        console.error(err)
        m.reply('Terjadi kesalahan')
      }
    }

break
case "edit-ai": {
if (!text) return m.reply(`Promt nya mana?`);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `${text}`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "hitamkan": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `ubah warna kulit karakter manjadi warna hitam`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "putihkan": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `ubah warna kulit karakter manjadi warna putih`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "night": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `ubah jadi malam hari`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "pretty": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `edit wajah karakter menjadi wajah orang Korea`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "ugly": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `edit wajah karakter menjadi jelek`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "sedih": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `ubah reaksi wajahnya menjadi sedih`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "senyum": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `ubah reaksi wajahnya menjadi senang`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
case "botakin": {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  
  let defaultPrompt = `hilangkan rambut di kepalanya`;
  
  if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
  
  let promptText = text || defaultPrompt;
  
  reply("Tunggu Sebentar...");
  
  try {
    let imgData = await q.download();
    let genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const base64Image = imgData.toString("base64");
    
    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });
    
    const response = await model.generateContent(contents);
    
    let resultImage;
    let resultText = "";
    
    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }
    
    if (resultImage) {
      const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
      fs.writeFileSync(tempPath, resultImage);
      
      await LightSecret.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Maaf jika tidak sesuai*`
      }, { quoted: m });
      
      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal di edit.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break
//============ <Dwnoad
async function pindll(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/pinterest?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "pinterest":
      case "pindl":
        {
          if (!text) {
            return reply(`mana link-nya? contoh: ${prefix + command} https://url/reel/xxx/?igsh=xxx`);
          }
          let memek = await pindll(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await LightSecret.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await LightSecret.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: m
                  });
                } else {
                  await LightSecret.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await LightSecret.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function snck(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/snackvideo?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "snackvideo":
      case "sv":
        {
          if (!text) {
            return reply(`mana link-nya? contoh: ${prefix + command} https://url/reel/xxx/?igsh=xxx`);
          }
          let memek = await snck(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await LightSecret.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await LightSecret.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: m
                  });
                } else {
                  await LightSecret.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await LightSecret.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function ccdl(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/capcut?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "capcut":
      case "cc":
        {
          if (!text) {
            return reply(`mana link-nya? contoh: ${prefix + command} https://url/reel/xxx/?igsh=xxx`);
          }
          let memek = await ccdl(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await LightSecret.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await LightSecret.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: m
                  });
                } else {
                  await LightSecret.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await LightSecret.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function fbdll(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/facebook?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "facebook":
      case "fb":
        {
          if (!text) {
            return reply(`mana link-nya? contoh: ${prefix + command} https://url/reel/xxx/?igsh=xxx`);
          }
          let memek = await fbdll(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await LightSecret.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await LightSecret.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: m
                  });
                } else {
                  await LightSecret.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await LightSecret.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function igdl(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/igdl?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "instagram":
      case "ig":
        {
          if (!text) {
            return reply(`mana link instagram-nya? contoh: ${prefix + command} https://www.instagram.com/reel/DB8BGCZRKAh/?igsh=eDk1ajRncDV6Mjdh`);
          }
          let memek = await igdl(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await LightSecret.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await LightSecret.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: "乂 *I N S T A G R A M  D O W N L O A D* 乂"
                  }, {
                    quoted: m
                  });
                } else {
                  await LightSecret.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await LightSecret.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
case "tiktok":
      case "tt":
        {
          let momok = "`𝗧 𝗜 𝗞 𝗧 𝗢 𝗞 - 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗`";
          if (!text.startsWith("https://")) {
            return replyviex(example("url"));
          }
          await tiktokDl(q).then(async result => {
            await LightSecret.sendMessage(m.chat, {
              react: {
                text: "🕖",
                key: m.key
              }
            });
            if (!result.status) {
              return replyviex("Error!");
            }
            if (result.durations == 0 && result.duration == "0 Seconds") {
              let araara = new Array();
              let urutan = 0;
              for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia({
                  image: {
                    url: `${a.url}`
                  }
                }, {
                  upload: LightSecret.waUploadToServer
                });
                await araara.push({
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Foto Slide Ke *${urutan += 1}*`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                });
              }
              const msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*TIKTOK - DOWNLOADER*"
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: araara
                      })
                    })
                  }
                }
              }, {
                userJid: m.sender,
                quoted: m
              });
              await LightSecret.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
              });
            } else {
              let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark");
              await LightSecret.sendMessage(m.chat, {
                video: {
                  url: urlVid.url
                },
                caption: momok,
                footer: `\n${namaBot}`,
                buttons: [{
                  buttonId: `.toaudio`,
                  buttonText: {
                    displayText: "ᴀᴍʙɪʟ ᴍᴜsɪᴋɴʏᴀ"
                  }
                }],
                viewOnce: true
              }, {
                quoted: m
              });
            }
          }).catch(e => console.log(e));
          await LightSecret.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key
            }
          });
        }
        break;
case "ytmp4": {
if (!text) return reply(`*Penggunaan Salah!*\ncontoh: .${command} (link)`)
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await LightSecret.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await LightSecret.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await LightSecret.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case "ytmp3": {
if (!text) return reply(`*Penggunaan Salah!*\ncontoh: .ytmp3 (link)`)
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await LightSecret.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await LightSecret.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await LightSecret.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'gddl':
    case 'gdrive': {
      try {
        if (!text) return m.reply(`*Penggunaan Salah!*\ncontoh: .gdrive (link)`)
         await LightSecret.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
        let hao = await fetchJson(`https://api.siputzx.my.id/api/d/gdrive?url=${encodeURIComponent(text)}`)
        let fileName = hao.data.name
        return await LightSecret.sendMessage(m.chat, {
          document: {
            url: hao.data.download
          },
          mimetype: 'application/zip',
          fileName: fileName
        }, {
          quoted: m
        })
      } catch (err) {
        console.error('Kesalahan pada API:', err)
        m.reply('Terjadi kesalahan')
      }
    }

break
case 'mediafire':
    case 'mfdl': {
      try {
        if (!text) return m.reply(`*Penggunaan Salah!*\ncontoh: .mediafire Linknya`)
        if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
        
        await LightSecret.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
        let api = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${encodeURIComponent(text)}`)
        let data = api.result?.[0]

        let fileNama = decodeURIComponent(data.nama || 'file.zip')
        let extension = fileNama.split('.').pop().toLowerCase()

        let res = await axios.get(data.link, {
          responseType: 'arraybuffer'
        })
        let media = Buffer.from(res.data)

        let mimetype = ''
        if (extension === 'mp4') mimetype = 'video/mp4'
        else if (extension === 'mp3') mimetype = 'audio/mp3'
        else mimetype = `application/${extension}`

        LightSecret.sendMessage(m.chat, {
          document: media,
          fileName: fileNama,
          mimetype: mimetype
        }, {
          quoted: m
        })

      } catch (err) {
        m.reply('Terjadi kesalahan: ' + err)
      }
    }

break
case 'git': case 'gitclone': {
if (!args[0]) return reply(`*Penggunaan Salah!*\ncontoh: .${command} (link)`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    LightSecret.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("error"))
}
break


//============ Other


case 'getpastebin': 
case 'getpb': {
 if (!text) return reply(`🔗 Masukkan link pastebin, contoh:\n.getpb https://pastebin.com/raw/abc123`);

 try {
 const res = await fetch(`https://api.nekorinn.my.id/tools/getpastebin?url=${encodeURIComponent(q)}`);
 const json = await res.json();
 if (!json.status) return reply(`⚠️ Gagal ambil data dari Pastebin.`);

 let content = json.result.content
 .split('\n')
 .filter(line => !line.trim().startsWith('//'))
 .join('\n');

 const isiPreview = content.length > 4000 ? content.slice(0, 4000) + '\n\n📌 Terpotong otomatis.' : content;

 const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 header: proto.Message.InteractiveMessage.Header.create({
 title: '📄 Pastebin Content',
 subtitle: 'Hasil dari link kamu',
 hasMediaAttachment: false
 }),
 body: { text: isiPreview },
 footer: { text: `Powered by ${namaBot}` },
 nativeFlowMessage: {
 buttons: [
 {
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📋 Salin Semua Isi',
 copy_code: content.slice(0, 10000)
 })
 }
 ]
 }
 })
 }
 }
 }, { userJid: m.chat, quoted: m });

 await LightSecret.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

 } catch (err) {
 console.error(err);
 cpe(`❌ Error: ${err.message}`);
 }
}
break
case 'ssweb':
case 'ss-web': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
  
  await LightSecret.sendMessage(m.chat, {image: {url: `https://api.siputzx.my.id/api/tools/ssweb?url=${text}&theme=light&device=desktop` }, caption: foother }, {quoted: m})
}
break
case 'sendchat': {
  if (!text) return m.reply(`Contoh: ${command} Hai|62xxxx`)
  let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
  let teks = `📢 *PESAN BARU BUAT ANDA*\n\n`
  teks += `👤 *Pengirim:* @${m.sender.split('@')[0]}\n`
  teks += `💬 *Pesan:* ${l}\n`

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = [`${r}@s.whatsapp.net`] // ganti dengan nomor owner

  for (let id of ownerJid) {
    LightSecret.sendMessage(id,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
newsletterName: `© ${namaBot}`, 
serverId: 200
}, 
externalAdReply: {
title: `© ${namaBot}`, 
thumbnailUrl: thumbnail, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "https://LightSecret-Dev", 
}}
}, {quoted: m })
}


  m.reply('Berhasil mengirim pesan')
}
break
case 'upch': {
  if (!text) return m.reply(`Contoh: ${command} Hai`)
  let teks = `\n${text}\n`

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = [`${idch}`] // ganti dengan nomor owner

  for (let id of ownerJid) {
    LightSecret.sendMessage(id,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
newsletterName: `© ${namaBot}`, 
serverId: 200
}, 
externalAdReply: {
title: `© ${namaBot}`, 
thumbnailUrl: thumbnail, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "https://LightSecret-Dev", 
}}
}, {quoted: m })
}

  m.reply('Berhasil mengirim pesan')
}
break
case 'tts': {
 // Panggil modul yang dibutuhkan

 // --- DAFTAR KARAKTER LOKAL YANG KITA KELOLA ---
 // Mudah untuk menambah atau mengurangi karakter di sini
 const ttsCharacters = [
 { displayName: "Optimus Prime", audioKey: "optimus_prime" },
 { displayName: "Hatsune Miku", audioKey: "miku" },
 { displayName: "Nami", audioKey: "nami" },
 { displayName: "Goku", audioKey: "goku" },
 { displayName: "Eminem", audioKey: "eminem" },
 { displayName: "Mickey Mouse", audioKey: "mickey_mouse" }
 ];
 
 const text = args.join(" ");

 try {
 // --- LOGIKA 1: JIKA TIDAK ADA TEKS, TAMPILKAN DAFTAR ---
 if (!text) {
 let responseText = "🎙️ *Daftar Karakter Suara TTS* 🎙️\n\n";
 responseText += "Gunakan format:\n`.tts nama karakter | teks`\n\n";
 responseText += "Contoh:\n`.tts Goku | Kamehameha!`\n\n";
 responseText += "┌─「 *Pilihan Karakter* 」\n";
 
 ttsCharacters.forEach(char => {
 responseText += `│ • ${char.displayName}\n`;
 });
 responseText += "└─「 伝説の回廊 」";

 return await reply(responseText);
 }

 // --- LOGIKA 2: JIKA ADA TEKS, BUAT AUDIO ---
 const parts = text.split("|");
 if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) {
 return reply("❌ Format salah.\n\nGunakan format:\n`.tts nama karakter | teks`\n\nKetik `.tts` untuk melihat daftar karakter.");
 }

 const characterName = parts[0].trim();
 const speechText = parts[1].trim();
 
 // Cari karakter yang cocok dari daftar lokal kita
 const character = ttsCharacters.find(char => char.displayName.toLowerCase() === characterName.toLowerCase());

 if (!character) {
 return reply(`❌ Karakter "*${characterName}*" tidak ditemukan. Ketik `.tts` untuk melihat daftar.`);
 }

 const maxRetries = 3;
 const retryDelay = 2000;
 let statusMessage = await LightSecret.sendMessage(m.chat, { text: `⏳ Menghubungi karakter *${character.displayName}*...` }, { quoted: m });

 for (let attempt = 1; attempt <= maxRetries; attempt++) {
 try {
 await LightSecret.sendMessage(m.chat, { 
 text: `⏳ Mencoba suara *${character.displayName}*... (Percobaan ${attempt}/${maxRetries})`,
 edit: statusMessage.key 
 });

 const apiUrl = `https://flowfalcon.dpdns.org/tools/text-to-speech?text=${encodeURIComponent(speechText)}`;
 const { data: apiResponse } = await axios.get(apiUrl);

 if (!apiResponse.status || !apiResponse.result) throw new Error("API tidak merespons dengan benar.");

 const result = apiResponse.result.find(res => res[character.audioKey]);
 if (!result) throw new Error(`Hasil untuk ${character.displayName} tidak ditemukan.`);
 
 const audioUrl = result[character.audioKey];
 if (!audioUrl) throw new Error(`Link audio untuk ${character.displayName} tidak ditemukan.`);

 await LightSecret.sendMessage(m.chat, { text: `✅ Link ditemukan, mengunduh suara...`, edit: statusMessage.key });

 const { data: audioBuffer } = await axios.get(audioUrl, { responseType: 'arraybuffer' });
 if (!Buffer.isBuffer(audioBuffer) || audioBuffer.length < 1000) throw new Error("Gagal mengunduh audio valid.");

 await LightSecret.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
 await LightSecret.sendMessage(m.chat, { delete: statusMessage.key });
 return;

 } catch (error) {
 console.error(`Percobaan ke-${attempt} untuk ${character.displayName} gagal:`, error.message);
 if (attempt === maxRetries) {
 await LightSecret.sendMessage(m.chat, { text: `❌ Gagal total setelah ${maxRetries} percobaan.\n*Alasan:* ${error.message}`, edit: statusMessage.key });
 return;
 }
 await new Promise(resolve => setTimeout(resolve, retryDelay));
 }
 }
 } catch (error) {
 console.error("Error pada fitur TTS:", error);
 reply(`❌ Maaf, terjadi kesalahan umum. ${error.message}`);
 }
}
break;
case 'removal':
case 'removebg': {
  if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)

let media = await LightSecret.downloadAndSaveMediaMessage(quoted);
let response = await CatBox(media);
  await LightSecret.sendMessage(m.chat, {image: {url: `https://api.siputzx.my.id/api/iloveimg/removebg?image=${response}` }, caption: foother }, {quoted: m})
}
break
case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return reply(`\n*Penggunaan Salah!*\nKetik .emojimix 😄+😏\n`)
if (!emoji2) return reply(`\n*Penggunaan Salah!*\nKetik .emojimix 😄+😏\n`)
reply("Proses...")
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=${process.env.TENOR_API_KEY || ""}&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await LightSecret.sendImageAsSticker(m.chat, res.url, m, {
packname: foother,
author: nama,
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
 
}

break 
case 'iqc': {
  if (!text) return reply('Mana Text Nya')
  if (text.length > 80) return m.reply('Max 80 Text')
 reply("Proses...");
  LightSecret.sendMessage(m.chat, {
    image: { url: 'https://flowfalcon.dpdns.org/imagecreator/iqc?text=' + encodeURIComponent(text) }
  }, { quoted: m })
}
break;
case 'brat2':
    case 'bratvid':
    case 'bratvideo': {
    if (!text) return reply('Mana Text Nya')
var image = `https://api.siputzx.my.id/api/m/brat?text=${text}&isAnimated=true&delay=500`
await LightSecret.sendImageAsSticker(m.chat, image, m, {packname: foother})
LightSecret.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

			break
case 'brat1':
    case 'bratfoto':
    case 'brat': {
    if (!text) return reply('Mana Text Nya')
var image = `https://api.siputzx.my.id/api/m/brat?text=${text}&isAnimated=false&delay=500`
await LightSecret.sendImageAsSticker(m.chat, image, m, {packname: foother})
LightSecret.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

			break
case 'tovn': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio dengan caption ${prefix + command}`)
if (!quoted) return reply(`Reply video/audio dengan caption ${prefix + command}`)
//await loading()
var dl = await m.quoted.download()
LightSecret.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio dengan caption ${prefix + command}`)
if (!quoted) return reply(`Reply video/audio dengan caption ${prefix + command}`)
//await loading()
var dl = await m.quoted.download()
LightSecret.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break
case 'readmore':
case 'selengkapnya': {
if (!q) return reply(`masukan text contoh ${command} kamujelek|tapii boong`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
reply(l + readmore + r)
}
break 
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await LightSecret.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${_shellQ(media)} ${_shellQ(ran)}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
LightSecret.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}

break 
case 'stickerwm':
case 'wm':
case 'stikerwm':
case 'swm': {
if (!text) return reply("Text Nya mana?")
if (!/image|video/gi.test(mime)) return m.reply("dengan kirim media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await LightSecret.downloadAndSaveMediaMessage(qmsg)
await LightSecret.sendImageAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
LightSecret.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

break
case 'sticker':
case 'stiker':
case 's': {
if (!/image|video/gi.test(mime)) return m.reply("dengan kirim media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await LightSecret.downloadAndSaveMediaMessage(qmsg)
await LightSecret.sendImageAsSticker(m.chat, image, m, {packname: foother})
await fs.unlinkSync(image)
LightSecret.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

break
case 'smeme': case 'stickermeme': case 'stickmeme': {
await LightSecret.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return m.reply(`Usage: ${prefix + command} text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await LightSecret.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
memek = await LightSecret.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
m.reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} text1|text2`)
}
}
break
case "tourl": {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let media = await LightSecret.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'LightSecret.png');

let teks = directLink.toString()
await LightSecret.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
case 'tourl2': {
				if (!mime) return reply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
				try {
					let media = await LightSecret.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						reply(caption);
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						reply(response);
					} else {
					reply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					reply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}

break ;
case "hdvideo":
case "hdvid": {
    const ffmpeg = require('fluent-ffmpeg');
    const ffmpegStatic = require('ffmpeg-static');
    const { writeFile, unlink, mkdir } = require('fs').promises;
    const { existsSync } = require('fs');
    const path = require('path');

    if (!ffmpegStatic) {
        return LightSecret.sendMessage(m.chat, { text: "❌ FFMPEG tidak ditemukan! Pastikan sudah diinstal dengan benar." }, { quoted: m });
    }
    ffmpeg.setFfmpegPath(ffmpegStatic);
    let inputPath, outputPath;
    try {
        let q = m.quoted || m;
        let mime = q.mimetype || q.msg?.mimetype || q.mediaType || "";
        if (!mime) return LightSecret.sendMessage(m.chat, { text: "❌ Mana videonya?" }, { quoted: m });
        if (!/video\/(mp4|mov|avi|mkv)/.test(mime)) {
            return LightSecret.sendMessage(m.chat, { text: `❌ Format ${mime} tidak didukung!` }, { quoted: m });
        }
        LightSecret.sendMessage(m.chat, { text: "⏳ Sedang memproses video, mohon tunggu sekitar 2 - 4 menit..." }, { quoted: m });
        let videoBuffer = await q.download?.();
        if (!videoBuffer) return LightSecret.sendMessage(m.chat, { text: "❌ Gagal mengunduh video!" }, { quoted: m });
        let tempDir = path.join(__dirname, 'tmp');
        if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });
        inputPath = path.join(tempDir, `input_${Date.now()}.mp4`);
        outputPath = path.join(tempDir, `output_${Date.now()}.mp4`);
        await writeFile(inputPath, videoBuffer);
        await new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .outputOptions([
                    '-vf', 'scale=iw*1.5:ih*1.5:flags=lanczos,eq=contrast=1:saturation=1.7,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8',
                    '-r', '60',
                    '-preset', 'faster',
                    '-crf', '25',
                    '-c:v', 'libx264',
                    '-pix_fmt', 'yuv420p',
                    '-c:a', 'aac',
                    '-b:a', '128k'
                ])
                .on('end', resolve)
                .on('error', reject)
                .save(outputPath);
        });
        await LightSecret.sendMessage(m.chat, { 
            video: { url: outputPath },
            caption: "✅ Video berhasil ditingkatkan kualitasnya!"
        }, { quoted: m });
    } catch (err) {
        console.error("Error HD Video:", err);
        LightSecret.sendMessage(m.chat, { text: "❌ Gagal meningkatkan kualitas video." }, { quoted: m });
    } finally {
        setTimeout(() => {
            if (inputPath) unlink(inputPath).catch(() => {});
            if (outputPath) unlink(outputPath).catch(() => {});
        }, 5000);
    }
}
break
case 'hd':
case 'tohd':
case 'superhd': {
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await LightSecret.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})

let startTime = Date.now(); 

await reply(`⚠️ Mohon tunggu sebentar, proses anda dimulai...\n\n⏳ Proses ini membutuhkan waktu lama untuk menggunakannya, mohon bersabar.`);

if (/remini/.test(command)) cap = `*ᴛʏᴘᴇ :*  sᴜᴘᴇʀʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
if (/hd/.test(command)) cap = `*ᴛʏᴘᴇ :*  sᴜᴘᴇʀʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
if (/hdr/.test(command)) cap =  `*ᴛʏᴘᴇ :*  sᴜᴘᴇʀʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
let media = await LightSecret.downloadAndSaveMediaMessage(quoted);
try {
let catBoxUrl = await CatBox(media);
console.log('CatBox URL:', catBoxUrl);
let anjai = await fetchJson(`https://api.vreden.my.id/api/artificial/hdr?url=${catBoxUrl}&pixel=4`)
let result = anjai.result.data.downloadUrls[0]
LightSecret.sendMessage(m.chat, { image: { url: result }, caption: cap }, { quoted: m })
} catch (error) {
console.error(error);
}
}
    break;
    case 'qcstc':
    case 'stcqc':
    case 'qcstic':
    case 'qc':
    case 'qcstick': {
      if (!args[0]) return m.reply(`Contoh: ${command} white halo`)
      if (!args[1]) return m.reply(`Contoh: ${command} white halo`)
      if (text.length > 80) return m.reply(`Maximal 80 karakter!`)
      let [color, ...message] = text.split(' ')
      message = m.quoted ? m.quoted : message.join(' ')
      let backgroundColor
      switch (color) {
      case 'pink':
        backgroundColor = '#f68ac9'
        break
      case 'blue':
        backgroundColor = '#6cace4'
        break
      case 'red':
        backgroundColor = '#f44336'
        break
      case 'green':
        backgroundColor = '#4caf50'
        break
      case 'yellow':
        backgroundColor = '#ffeb3b'
        break
      case 'purple':
        backgroundColor = '#9c27b0'
        break
      case 'darkblue':
        backgroundColor = '#0d47a1'
        break
      case 'lightblue':
        backgroundColor = '#03a9f4'
        break
      case 'ash':
        backgroundColor = '#9e9e9e'
        break
      case 'orange':
        backgroundColor = '#ff9800'
        break
      case 'black':
        backgroundColor = '#000000'
        break
      case 'white':
        backgroundColor = '#ffffff'
        break
      case 'teal':
        backgroundColor = '#008080'
        break
      case 'lightpink':
        backgroundColor = '#FFC0CB'
        break
      case 'chocolate':
        backgroundColor = '#A52A2A'
        break
      case 'salmon':
        backgroundColor = '#FFA07A'
        break
      case 'magenta':
        backgroundColor = '#FF00FF'
        break
      case 'tan':
        backgroundColor = '#D2B48C'
        break
      case 'wheat':
        backgroundColor = '#F5DEB3'
        break
      case 'deeppink':
        backgroundColor = '#FF1493'
        break
      case 'fire':
        backgroundColor = '#B22222'
        break
      case 'skyblue':
        backgroundColor = '#00BFFF'
        break
      case 'brightskyblue':
        backgroundColor = '#1E90FF'
        break
      case 'hotpink':
        backgroundColor = '#FF69B4'
        break
      case 'lightskyblue':
        backgroundColor = '#87CEEB'
        break
      case 'seagreen':
        backgroundColor = '#20B2AA'
        break
      case 'darkred':
        backgroundColor = '#8B0000'
        break
      case 'orangered':
        backgroundColor = '#FF4500'
        break
      case 'cyan':
        backgroundColor = '#48D1CC'
        break
      case 'violet':
        backgroundColor = '#BA55D3'
        break
      case 'mossgreen':
        backgroundColor = '#00FF7F'
        break
      case 'darkgreen':
        backgroundColor = '#008000'
        break
      case 'navyblue':
        backgroundColor = '#191970'
        break
      case 'darkorange':
        backgroundColor = '#FF8C00'
        break
      case 'darkpurple':
        backgroundColor = '#9400D3'
        break
      case 'fuchsia':
        backgroundColor = '#FF00FF'
        break
      case 'darkmagenta':
        backgroundColor = '#8B008B'
        break
      case 'darkgray':
        backgroundColor = '#2F4F4F'
        break
      case 'peachpuff':
        backgroundColor = '#FFDAB9'
        break
      case 'darkishgreen':
        backgroundColor = '#BDB76B'
        break
      case 'darkishred':
        backgroundColor = '#DC143C'
        break
      case 'goldenrod':
        backgroundColor = '#DAA520'
        break
      case 'darkishgray':
        backgroundColor = '#696969'
        break
      case 'darkishpurple':
        backgroundColor = '#483D8B'
        break
      case 'gold':
        backgroundColor = '#FFD700'
        break
      case 'silver':
        backgroundColor = '#C0C0C0'
        break
      default:
        return m.reply('Warna tersebut tidak ditemukan!')
      }
      const username = m.pushName
      const avatar = await LightSecret.profilePictureUrl(m.sender, "image").catch(() => 'https://files.catbox.moe/nwvkbt.png')
      const json = {
        type: 'quote',
        format: 'png',
        backgroundColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: username,
            photo: {
              url: avatar
            }
          },
          text: message,
          replyMessage: {}
        }]
      }
      const response = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const buffer = Buffer.from(response.data.result.image, 'base64')
      LightSecret.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author
      })
    }
    break
// ============Converter
            case 'bass':
			case 'blown':
			case 'deep':
			case 'earrape':
			case 'fast':
			case 'fat':
			case 'nightcore':
			case 'reverse':
			case 'robot':
			case 'slow':
			case 'smooth':
			case 'tupai': {
				try {
					let set
					if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						await LightSecret.sendMessage(m.chat, {
							react: {
								text: "⏱️",
								key: m.key,
							}
						})
						let media = await LightSecret.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${_shellQ(media)} ${set} ${_shellQ(ran)}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							LightSecret.sendMessage(m.chat, {
								audio: buff,
								mimetype: 'audio/mpeg'
							}, {
								quoted: m
							})
							fs.unlinkSync(ran)
						})
					} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
				} catch (error) {
					 
				}
			}
			break
			
			//============ Sound
    case 'sound1':
    case 'sound2':
    case 'sound3':
    case 'sound4':
    case 'sound5':
    case 'sound6':
    case 'sound7':
    case 'sound8':
    case 'sound9':
    case 'sound10':
    case 'sound11':
    case 'sound12':
    case 'sound13':
    case 'sound14':
    case 'sound15':
    case 'sound16':
    case 'sound17':
    case 'sound18':
    case 'sound19':
    case 'sound20':
    case 'sound21':
    case 'sound22':
    case 'sound23':
    case 'sound24':
    case 'sound25':
    case 'sound26':
    case 'sound27':
    case 'sound28':
    case 'sound29':
    case 'sound30':
    case 'sound31':
    case 'sound32':
    case 'sound33':
    case 'sound34':
    case 'sound35':
    case 'sound36':
    case 'sound37':
    case 'sound38':
    case 'sound39':
    case 'sound40':
    case 'sound41':
    case 'sound42':
    case 'sound43':
    case 'sound44':
    case 'sound45':
    case 'sound46':
    case 'sound47':
    case 'sound48':
    case 'sound49':
    case 'sound50':
    case 'sound51':
    case 'sound52':
    case 'sound53':
    case 'sound54':
    case 'sound55':
    case 'sound56':
    case 'sound57':
    case 'sound58':
    case 'sound59':
    case 'sound60':
    case 'sound61':
    case 'sound62':
    case 'sound63':
    case 'sound64':
    case 'sound65':
    case 'sound66':
    case 'sound67':
    case 'sound68':
    case 'sound69':
    case 'sound70':
    case 'sound71':
    case 'sound72':
    case 'sound73':
    case 'sound74':
    case 'sound75':
    case 'sound76':
    case 'sound77':
    case 'sound78':
    case 'sound79':
    case 'sound80':
    case 'sound81':
    case 'sound82':
    case 'sound83':
    case 'sound84':
    case 'sound85':
    case 'sound86':
    case 'sound87':
    case 'sound88':
    case 'sound89':
    case 'sound90':
    case 'sound91':
    case 'sound92':
    case 'sound93':
    case 'sound94':
    case 'sound95':
    case 'sound96':
    case 'sound97':
    case 'sound98':
    case 'sound99':
    case 'sound100':
    case 'sound101':
    case 'sound102':
    case 'sound103':
    case 'sound104':
    case 'sound105':
    case 'sound106':
    case 'sound107':
    case 'sound108':
    case 'sound109':
    case 'sound110':
    case 'sound111':
    case 'sound112':
    case 'sound113':
    case 'sound114':
    case 'sound115':
    case 'sound116':
    case 'sound117':
    case 'sound118':
    case 'sound119':
    case 'sound120':
    case 'sound121':
    case 'sound122':
    case 'sound123':
    case 'sound124':
    case 'sound125':
    case 'sound126':
    case 'sound127':
    case 'sound128':
    case 'sound129':
    case 'sound130':
    case 'sound131':
    case 'sound132':
    case 'sound133':
    case 'sound134':
    case 'sound135':
    case 'sound136':
    case 'sound137':
    case 'sound138':
    case 'sound139':
    case 'sound140':
    case 'sound141':
    case 'sound142':
    case 'sound143':
    case 'sound144':
    case 'sound145':
    case 'sound146':
    case 'sound147':
    case 'sound148':
    case 'sound149':
    case 'sound150':
    case 'sound151':
    case 'sound152':
    case 'sound153':
    case 'sound154':
    case 'sound155':
    case 'sound156':
    case 'sound157':
    case 'sound158':
    case 'sound159':
    case 'sound160':
    case 'sound161':
    case 'sound162':
    case 'sound163':
    case 'sound164':
    case 'sound165':
    case 'sound166':
    case 'sound167':
    case 'sound168':
    case 'sound169':
    case 'sound170':
    case 'sound171':
    case 'sound172':
    case 'sound173':
    case 'sound174':
    case 'sound175':
    case 'sound176':
    case 'sound177':
    case 'sound178':
    case 'sound179':
    case 'sound180':
    case 'sound181':
    case 'sound182':
    case 'sound183':
    case 'sound184':
    case 'sound185':
    case 'sound186':
    case 'sound187':
    case 'sound188':
    case 'sound189':
    case 'sound190':
    case 'sound191':
    case 'sound192':
    case 'sound193':
    case 'sound194':
    case 'sound195':
    case 'sound196':
    case 'sound197':
    case 'sound198':
    case 'sound199':
    case 'sound200':
    case 'sound201':
    case 'sound202':
    case 'sound203':
    case 'sound204':
    case 'sound205':
    case 'sound206':
    case 'sound207':
    case 'sound208':
    case 'sound209':
    case 'sound210':
    case 'sound211':
    case 'sound212':
    case 'sound213':
    case 'sound214':
    case 'sound215':
    case 'sound216':
    case 'sound217':
    case 'sound218':
    case 'sound219':
    case 'sound220':
    case 'sound221':
    case 'sound222':
    case 'sound223':
    case 'sound224':
    case 'sound225':
    case 'sound226':
    case 'sound227':
    case 'sound228':
    case 'sound229':
    case 'sound230':
    case 'sound231':
    case 'sound232':
    case 'sound233':
    case 'sound234':
    case 'sound235':
    case 'sound236':
    case 'sound237':
    case 'sound238':
    case 'sound239':
    case 'sound240':
    case 'sound241':
    case 'sound242':
    case 'sound243':
    case 'sound244':
    case 'sound245':
    case 'sound246':
    case 'sound247':
    case 'sound248':
    case 'sound249':
    case 'sound250': {
try {
        let link = `https://raw.githubusercontent.com/Leoo7z/Music/main/${command}.mp3`
        await LightSecret.sendMessage(m.chat, {
          audio: {
            url: link
          },
          mimetype: 'audio/mpeg'
        }, {
          quoted: m
        })
      } catch (err) {
        m.reply(`Terjadi kesalahan: ${err}`)
      }
    }
    break
    
    //============ Anime
    case 'akiyama':
    case 'ana':
    case 'art':
    case 'asuna':
    case 'ayuzawa':
    case 'boruto':
    case 'bts':
    case 'cartoon':
    case 'chiho':
    case 'chitoge':
    case 'cosplay':
    case 'cosplayloli':
    case 'cosplaysagiri':
    case 'cyber':
    case 'deidara':
    case 'doraemon':
    case 'elaina':
    case 'emilia':
    case 'erza':
    case 'exo':
    case 'gamewallpaper':
    case 'gremory':
    case 'hacker':
    case 'hestia':
    case 'hinata':
    case 'husbu':
    case 'inori':
    case 'islamic':
    case 'isuzu':
    case 'itachi':
    case 'itori':
    case 'jennie':
    case 'jiso':
    case 'justina':
    case 'kaga':
    case 'kagura':
    case 'kakasih':
    case 'kaori':
    case 'keneki':
    case 'kotori':
    case 'kurumi':
    case 'lisa':
    case 'madara':
    case 'megumin':
    case 'mikasa':
    case 'mikey':
    case 'miku':
    case 'minato':
    case 'mountain':
    case 'naruto':
    case 'neko2':
    case 'nekonime':
    case 'nezuko':
    case 'onepiece':
    case 'pentol':
    case 'pokemon':
    case 'programming':
    case 'randomnime':
    case 'randomnime2':
    case 'rize':
    case 'rose':
    case 'sagiri':
    case 'sakura':
    case 'sasuke':
    case 'satanic':
    case 'shina':
    case 'shinka':
    case 'shinomiya':
    case 'shizuka':
    case 'shota':
    case 'shortquote':
    case 'space':
    case 'technology':
    case 'tejina':
    case 'toukachan':
    case 'tsunade':
    case 'yotsuba':
    case 'yuki':
    case 'yulibocil':
    case 'yumeko': {
      m.reply("Loading 🔁")
      let heyy
      if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/akiyama.json')
      if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ana.json')
      if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/art.json')
      if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/asuna.json')
      if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ayuzawa.json')
      if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/boneka.json')
      if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/boruto.json')
      if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/bts.json')
      if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cecan.json')
      if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/chiho.json')
      if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/chitoge.json')
      if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cogan.json')
      if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplay.json')
      if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplayloli.json')
      if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplaysagiri.json')
      if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cyber.json')
      if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/deidara.json')
      if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/doraemon.json')
      if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/eba.json')
      if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/elaina.json')
      if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/emilia.json')
      if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/erza.json')
      if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/exo.json')
      if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/femdom.json')
      if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/freefire.json')
      if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/gamewallpaper.json')
      if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/glasses.json')
      if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/gremory.json')
      if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hekel.json')
      if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hestia.json')
      if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/husbu.json')
      if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/inori.json')
      if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/islamic.json')
      if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/isuzu.json')
      if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/itachi.json')
      if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/itori.json')
      if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jeni.json')
      if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jiso.json')
      if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/justina.json')
      if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kaga.json')
      if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kagura.json')
      if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kakasih.json')
      if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kaori.json')
      if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kartun.json')
      if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/katakata.json')
      if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/keneki.json')
      if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kotori.json')
      if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kpop.json')
      if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kucing.json')
      if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kurumi.json')
      if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/lisa.json')
      if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/loli.json')
      if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/madara.json')
      if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/megumin.json')
      if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mikasa.json')
      if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mikey.json')
      if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/miku.json')
      if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/minato.json')
      if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mobil.json')
      if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/motor.json')
      if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mountain.json')
      if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/naruto.json')
      if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/neko.json')
      if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/neko2.json')
      if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/nekonime.json')
      if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/nezuko.json')
      if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/onepiece.json')
      if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pentol.json')
      if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pokemon.json')
      if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/profil.json')
      if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/programming.json')
      if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pubg.json')
      if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randblackpink.json')
      if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randomnime.json')
      if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randomnime2.json')
      if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rize.json')
      if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rose.json')
      if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ryujin.json')
      if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sagiri.json')
      if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sakura.json')
      if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sasuke.json')
      if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/satanic.json')
      if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shina.json')
      if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shinka.json')
      if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shinomiya.json')
      if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shizuka.json')
      if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shota.json')
      if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tatasurya.json')
      if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/technology.json')
      if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tejina.json')
      if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/toukachan.json')
      if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tsunade.json')
      if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/waifu.json')
      if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallhp.json')
      if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallml.json')
      if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallnime.json')
      if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yotsuba.json')
      if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yuki.json')
      if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yulibocil.json')
      if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yumeko.json')
      let yeha = heyy[Math.floor(Math.random() * heyy.length)]
      LightSecret.sendMessage(m.chat, {
        image: {
          url: yeha
        },
        caption: foother,
      }, {
        quoted: m
      })
    }
    break
    
    //============ Fun
    case 'bego':
    case 'goblok':
    case 'janda':
    case 'perawan':
    case 'babi':
    case 'tolol':
    case 'pekok':
    case 'jancok':
    case 'pinter':
    case 'pintar':
    case 'asu':
    case 'bodoh':
    case 'gay':
    case 'lesby':
    case 'bajingan':
    case 'jancok':
    case 'anjing':
    case 'anjg':
    case 'anjj':
    case 'anj':
    case 'ngentod':
    case 'ngentot':
    case 'monyet':
    case 'mastah':
    case 'newbie':
    case 'bangsat':
    case 'bangke':
    case 'sange':
    case 'sangean':
    case 'dakjal':
    case 'horny':
    case 'wibu':
    case 'puki':
    case 'puqi':
    case 'peak':
    case 'pantex':
    case 'pantek':
    case 'setan':
    case 'iblis':
    case 'cacat':
    case 'yatim':
    case 'piatu': {
       if (!isGroup) return reply(mess.group);
      let member = participants.map(u => u.id).filter(v => v !== LightSecret.user.jid)
      let org = member[Math.floor(Math.random() * member.length)];
      LightSecret.sendMessage(m.chat, {
        text: `Anak ${command} di sini adalah @${org.split('@')[0]}`,
        mentions: [org]
      }, {
        quoted: m
      })
    }
    break

case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {

if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}

break 
case 'kapankah': {

if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}

break 
case 'cp':
 case 'couple': {
            if (!isGroup) return reply(mess.group);
 let member = participants.map(u => u.id)
 let orang = member[Math.floor(Math.random() * member.length)]
 let jodoh = member[Math.floor(Math.random() * member.length)]
LightSecret.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `semoga kalian beneran jodoh >_<`,
"body": `cieeee ehem`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": thumbnail,
"sourceUrl": ``}}},
{ quoted: m}) 
 }
            break
            case 'gay': {
            if (!isGroup) return reply(mess.group);
 let member = participants.map(u => u.id)
 let orang = member[Math.floor(Math.random() * member.length)]
LightSecret.sendMessage(m.chat,
{ text: `*@${orang.split('@')[0]} Adalah Orang Paling Gay Di Group Ini*`,
contextInfo:{
mentionedJid:[orang],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` Pacar Nya Om Andri`,
"body": `Dia Pernah Duaan Di Hotel`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": thumbnail,
"sourceUrl": ``}}},
{ quoted: m}) 
 }
            break
case 'jodoh':
 case 'jodohku': {
 if (!isGroup) return reply(mess.group);
 let member = participants.map(u => u.id)
 let me = m.sender
 let jodoh = member[Math.floor(Math.random() * member.length)]
LightSecret.sendMessage(m.chat,
{ text: `jodoh @${me.split('@')[0]} adalah @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `semoga kalian beneran jodoh >_<`,
"body": `cieeee ehem`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": thumbnail,
"sourceUrl": ``}}},
{ quoted: m}) 
 }
 
break 

// ============Nsfw
    case 'waifu':
    case 'neko':
    case 'shinobu':
    case 'megumin':
    case 'bully':
    case 'cuddle':
    case 'cry':
    case 'hug':
    case 'awoo':
    case 'kiss':
    case 'lick':
    case 'pat':
    case 'smug':
    case 'bonk':
    case 'yeet':
    case 'blush':
    case 'smile':
    case 'wave':
    case 'highfive':
    case 'handhold':
    case 'nom':
    case 'bite':
    case 'glomp':
    case 'slap':
    case 'kill':
    case 'happy':
    case 'wink':
    case 'poke':
    case 'dance':
    case 'cringe':
    case 'trap':
    case 'blowjob':
    case 'hentai':
    case 'boobs':
    case 'ass':
    case 'pussy':
    case 'thighs':
    case 'lesbian':
    case 'lewdneko':
    case 'cum': {
      if (!isOwner && !isPremium) return reply(mess.prem)
      m.reply("Loading 🔁")
      try {
        let haha = await fetchJson(`https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${command}&json=1`)
        if (haha && haha[0]?.file_url) {
          let imgUrl = haha[0].file_url
          LightSecret.sendMessage(m.chat, {
            image: {
              url: imgUrl
            },
            caption: foother
          }, {
            quoted: m
          })
        }
      } catch (err) {
        try {
          let atuh = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
          if (atuh.url) {
            LightSecret.sendMessage(m.chat, {
              image: {
                url: atuh.url
              },
              caption: foother
            }, {
              quoted: m
            })
          }
        } catch (err) {
          let sok = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
          if (sok.url) {
            LightSecret.sendMessage(m.chat, {
              image: {
                url: sok.url
              },
              caption: foother
            }, {
              quoted: m
            })
          }
        }
      }
    }
    break
    
    //============ Primbon
    case 'artimimpi': case 'tafsirmimpi': {
if (!text) return reply(`Contoh : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama': {
if (!text) return reply(`Contoh : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) return reply(`Contoh : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
LightSecret.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) return reply(`Contoh : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}
break
case 'sifatusaha': {
if (!ext)return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
break
case  ' rejeki': case 'rezeki': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case '.pekerjaan': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) return reply(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
break
case '.potensipenyakit': case '.penyakit': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': case 'tarot': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
LightSecret.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'fengshui': {
if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'haribaik': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': case 'harisial': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': case 'harinaga': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (!text) return reply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'sifat': case 'karakter': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {
if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break

case 'masasubur': {
if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {
if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
reply(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (!text) return reply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message}`)
}
break

// ============Quotes
case 'dilan':
    case 'quotesdilan': {
      let tod = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesdilan.json`)
      const dilan = await pickRandom(tod)
      LightSecret.sendMessage(m.chat, {
        text: dilan.quotes
      }, {
        quoted: m
      })
    }
    break
    case 'bucin':
    case 'quotesbucin': {
      const bucin = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/bucin.json`)
      const bucc = await pickRandom(bucin)
      LightSecret.sendMessage(m.chat, {
        text: bucc
      }, {
        quoted: m
      })
    }
    break
    case 'quotesanime': {
      const quotesanim = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesanime.json`)
      const anu = await pickRandom(quotesanim)
      let teks = `*Quotes Anime*\n\n"${anu.quotes}"\n\n*${anu.char_name}*\n_${anu.anime} (${anu.episode})_\n_${anu.date}_`
      let coo = `{\"display_text\":\"Url Quotes\",\"id\":\"P\",\"copy_code\":\"${anu.url}\"}`
      buttoncopy(m.chat, teks, coo, null, m)
    }
    break
    case 'quotesislamic': {
      const islamic = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotesislamic.json`)
      const quotesislamic = await pickRandom(islamic)
      m.reply(`${quotesislamic}`)
    }
    break
    case 'faktaunik': {
      const fakta = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/faktaunik.json`)
      const faktaunik = await pickRandom(fakta)
      m.reply(`*Taukah Kamu?*\n\n${faktaunik}`)
    }
    break
    case 'katasenja': {
      const senja = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/katasenja.json`)
      const katasenja = await pickRandom(senja)
      m.reply(`${katasenja}`)
    }
    break
    case 'katailham': {
      const ilham = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/katailham.json`)
      const katailham = await pickRandom(ilham)
      m.reply(`${katailham}`)
    }
    break
    case 'quotes': {
      const quot = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/quotes.json`)
      const quote = await pickRandom(quot)
      m.reply(`${quote.quotes}\n\nBy ${quote.author}`)
    }
    break
    case 'puisi': {
      const puis = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/puisi.json`)
      const puisi = await pickRandom(puis)
      m.reply(`${puisi}`)
    }
    break
    case 'pantun': {
      const pant = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/pantun.json`)
      const pantun = await pickRandom(pant)
      m.reply(`${pantun}`)
    }
    break
    case 'motivasi': {
      const motiv = await fetchJson(`https://raw.githubusercontent.com/Leoo7z/quotes/main/quotes-source/motivasi.json`)
      const motivasi = await pickRandom(motiv)
      m.reply(`${motivasi}`)
    }
    break
    
// ============Cecan
    case 'hijaber':
    case 'jeni':
    case 'jiso':
    case 'justina':
    case 'rose':
    case 'ryujin': {
      let heyy
      if (/hijaber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hijaber.json')
      if (/jeni/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jeni.json')
      if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jiso.json')
      if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/justina.json')
      if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rose.json')
      if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ryujin.json')
      let yeha = heyy[Math.floor(Math.random() * heyy.length)]
      LightSecret.sendMessage(m.chat, {
        image: {
          url: yeha
        },
        caption: foother
      }, {
        quoted: m
      })
    }
    break
    
    // Push
    case "pushkontak": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idgrup|pesannya")
if (!text.split("|")) return m.reply("idgrup|pesannya")
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await LightSecret.groupMetadata(id)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${nama}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await LightSecret.sendMessage(mem, { contacts: { displayName: nama, contacts: [{ vcard }] }})
await LightSecret.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(10000)
}}

await LightSecret.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case "pushkontak2": {
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
if (!text) return m.reply("pesannya")
const teks = text
const jidawal = m.chat
const data = await LightSecret.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${nama}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await LightSecret.sendMessage(mem, { contacts: { displayName: nama, contacts: [{ vcard }] }})
await LightSecret.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(10000)
}}

await LightSecret.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break
case "savekontak": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idgrupnya")
let res = await LightSecret.groupMetadata(m.chat)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${nama} - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await LightSecret.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
let res = await groupMetadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./lib/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${nama} - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await LightSecret.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./lib/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break

// ============Islam
case 'jadwal-sholat':
    case 'jadwalsholat': {
      if (!text) return m.reply('Mau kota mana?')
      try {
        const {
          jadwalSholat
        } = require('./lib/scraper')
        const jadwal = await jadwalSholat(text.toLowerCase().replace(/\s+/g, '-'))
        if (jadwal.error) return m.reply(jadwal.error)

        const jdwl = `
*JADWAL SHOLAT UNTUK HARI INI*
Tanggal: ${jadwal.tanggal}
- Subuh: ${jadwal.subuh}
- Dhuha: ${jadwal.duha}
- Dzuhur: ${jadwal.dzuhur}
- Ashar: ${jadwal.ashar}
- Maghrib: ${jadwal.maghrib}
- Isya: ${jadwal.isya}
`.trim()

        m.reply(jdwl)
      } catch (err) {
        console.error(err)
        m.reply('Terjadi kesalahan: ' + err)
      }
    }
    break

    case 'asmaulhusna': {
      try {
        let jir = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna')
        let ye = jir.data

        let tks = '*ASMAUL HUSNA*\n\n' + ye.map((item) => {
          return `Urutan: ${item.index}\nLatin: ${item.latin}\nArab: ${item.arabic}\nTerjemahan ID: ${item.translation_id}\nTerjemahan EN: ${item.translation_en}\n`
        }).join('\n')

        m.reply(tks)
      } catch (err) {
        console.error(err)
        m.reply('Error cuy, coba lagi ntar!')
      }
    }
    break

    case 'niat-sholat':
    case 'niatsholat': {
      try {
        let jir = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/niatshalat')
        let niatSholat = jir

        if (!text) {
          let daftarNiat = '*DAFTAR NIAT SHOLAT*\n\n' + niatSholat.map((item) => `- ${item.name}`).join('\n')
          daftarNiat += '\n\nKetik *.niatsholat [nama sholat]* untuk melihat niat, contoh: *.niatsholat subuh*'
          m.reply(daftarNiat)
        } else {
          let hasil = niatSholat.find((item) => item.name.toLowerCase().includes(text.toLowerCase()))

          if (hasil) {
            let tks = `*${hasil.name.toUpperCase()}*\n\n` +
              `Arab: ${hasil.arabic}\n` +
              `Latin: ${hasil.latin}\n` +
              `Terjemahan: ${hasil.terjemahan}`
            m.reply(tks)
          } else {
            m.reply('Niat sholat yang lu cari ga ketemu cuy. Cek lagi nama sholatnya!')
          }
        }
      } catch (err) {
        console.error(err)
        m.reply('Error cuy, coba lagi ntar!')
      }
    }
    break

    case 'surah': {
      try {
        if (!text) {
          m.reply('Ketik nomor surahnya! Contoh: *.surah 1* buat ambil ayat-ayat dari Al-Fatihah')
          return
        }

        let response = await fetchJson(`https://api.siputzx.my.id/api/s/surah?no=${encodeURIComponent(text)}`)
        let data = response.data

        if (data.length > 0) {
          let surahText = data.map((ayat, index) =>
            `Ayat ${index + 1}:\n` +
            `Arab: ${ayat.arab}\n` +
            `Latin: ${ayat.latin}\n` +
            `Terjemahan: ${ayat.indo}\n`
          ).join('\n\n')

          m.reply(surahText)
        } else {
          m.reply('Gak ketemu, cek lagi nomor surahnya!')
        }
      } catch (err) {
        console.error(err)
        m.reply('Terjadi kesalahan: ' + err)
      }
    }
    break

    case 'doa':
    case 'berdoa': {
      try {
        let jir = await fetchJson('https://doa-doa-api-ahmadramadhan.fly.dev/api')
        let daftarDoa = jir

        if (!text) {
          let listDoa = '*DAFTAR DOA*\n\n' + daftarDoa.map((item) => `- ${item.doa}`).join('\n')
          listDoa += '\n\nKetik *.doa [nama doa]* untuk melihat doa, contoh: *.doa doa sebelum tidur*'
          m.reply(listDoa)
        } else {
          let hasil = daftarDoa.find((item) => item.doa.toLowerCase().includes(text.toLowerCase()))

          if (hasil) {
            let tks = `*${hasil.doa.toUpperCase()}*\n\n` +
              `Ayat: ${hasil.ayat}\n` +
              `Latin: ${hasil.latin}\n` +
              `Artinya: ${hasil.artinya}`
            m.reply(tks)
          } else {
            m.reply('Doa yang lu cari ga ketemu cuy. Cek lagi nama doanya!')
          }
        }
      } catch (err) {
        console.error(err)
        m.reply('Error cuy, coba lagi ntar!')
      }
    }
    break

    case 'gislam': {
      if (!text) return m.reply('Mau cari tentang apa?')
      async function islam(query) {
        try {
          const response = await fetchJson(`https://artikel-islam.netlify.app/.netlify/functions/api/ms?page=1&s=${(query)}`)
          if (response.success) {
            const articles = response.data.data
            let message = `Total artikel: ${articles.length}\n\n`
            articles.forEach((article, index) => {
              message += `${index + 1}. Judul: ${article.title}\nURL: ${article.url}\n\n`
            })
            return message
          } else {
            return 'Gagal mengambil data'
          }
        } catch (error) {
          return 'Terjadi kesalahan saat mengambil data'
        }
      }
      let lp = await islam(text)
      m.reply(lp)
    }
    break

    case 'kataislam': {
      async function AI(content) {
        try {
          const response = await axios.post('https://luminai.my.id/', {
            content,
            cName: "S-AI",
            cID: "S-AIbAQ0HcC"
          });

          return response.data
        } catch (error) {
          console.error(error)
          throw error
        }
      }
      let qe = 'Berikan satu kata-kata atau quotes Islamic random yang sangat memotivasi, dan menginspirasi, jawab langsung ke intinya!'
      let qo = await AI(qe)
      m.reply(qo.result)
    }
    break

    case 'pantunislam': {
      async function AI(content) {
        try {
          const response = await axios.post('https://luminai.my.id/', {
            content,
            cName: "S-AI",
            cID: "S-AIbAQ0HcC"
          });

          return response.data
        } catch (error) {
          console.error(error)
          throw error
        }
      }
      let qe = 'Berikan satu kata-kata pantun Islamic random yang sangat memotivasi, dan menginspirasi, jawab langsung ke intinya!'
      let qo = await AI(qe)
      m.reply(qo.result)
    }
    break
    
    // Maker
    case 'text2img':
case 'txt2img': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
  
  await LightSecret.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=dreamshaper-8-base` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv2':
case 'txt2imgv2': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
  
  await LightSecret.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/flux/schnell?prompt=${text}&size=9_16` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv3':
case 'txt2imgv3': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
  
  await LightSecret.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=stable-diffusion-xl-fast` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv4':
case 'txt2imgv4': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
    
    await LightSecret.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=stable-diffusion-xl-base` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv5':
case 'txt2imgv5': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
    
    await LightSecret.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/amazonai?prompt=${text}&size=9_16` }, caption: foother }, {quoted: m})
}
break

case 'text2imgv6':
case 'txt2imgv6': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
    
    await LightSecret.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/gemini?prompt=${text}` }, caption: foother }, {quoted: m})
}
break



case 'bratfoto':
case 'bratgenerator': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
    
    await LightSecret.sendMessage(m.chat, {image: {url: `https://aqul-brat.hf.space/?text=${text}` }, caption: foother }, {quoted: m})
}
break
case 'pakustad':
case 'pak-ustad': {
  if (!text) return m.reply(`Contoh: ${command} kenapa LightSecret ganteng`)
    
    await LightSecret.sendMessage(m.chat, {image: {url: `https://api.taka.my.id/tanya-ustad?quest=${text}` }, caption: foother }, {quoted: m})
}
break
case 'nglgenerator':
case 'ngl': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
    
    await LightSecret.sendMessage(m.chat, {image: {url: `https://api.taka.my.id/ngl?text=${text}` }, caption: foother }, {quoted: m})
}
break
    case 'attp': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://anabot.my.id/api/maker/attp?text=${text}&apikey=${process.env.ANABOT_API_KEY || ""}`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete LightSecret.enhancer[sender];
 LightSecret.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await LightSecret.sendImageAsSticker(m.chat, buf.image, m, { packname: nama, author: nama })
}
break
case 'pak-ustad2':
case 'pakustad2': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://api.taka.my.id/tanya-ustad?quest=${text}`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete LightSecret.enhancer[sender];
 LightSecret.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await LightSecret.sendImageAsSticker(m.chat, buf.image, m, { packname: nama, author: nama })
}
break

//============ Sad
    case 'sad1':
    case 'sad2':
    case 'sad3':
    case 'sad4':
    case 'sad5':
    case 'sad6':
    case 'sad7':
    case 'sad8':
    case 'sad9':
    case 'sad10':
    case 'sad11':
    case 'sad12':
    case 'sad13':
    case 'sad14':
    case 'sad15':
    case 'sad16':
    case 'sad17':
    case 'sad18':
    case 'sad19':
    case 'sad20':
    case 'sad21':
    case 'sad22':
    case 'sad23':
    case 'sad24':
    case 'sad25':
    case 'sad26':
    case 'sad27':
    case 'sad28':
    case 'sad29':
    case 'sad30':
    case 'sad31':
    case 'sad32':
    case 'sad33':
    case 'sad34':
    case 'sad35':
    case 'sad36':
    case 'sad37':
    case 'sad38':
    case 'sad39':
    case 'sad40':
    case 'sad41':
    case 'sad42':
    case 'sad43':
    case 'sad44':
    case 'sad45':
    case 'sad46':
    case 'sad47':
    case 'sad48':
    case 'sad49':
    case 'sad50':
    case 'sad51':
    case 'sad52':
    case 'sad53':
    case 'sad54':
    case 'sad55': {
      try {
        let link = `https://raw.githubusercontent.com/Leoo7z/Music/main/sad-music/${command}.mp3`
        await LightSecret.sendMessage(m.chat, {
          audio: {
            url: link
          },
          mimetype: 'audio/mpeg'
        }, {
          quoted: m
        })
      } catch (err) {
        m.reply(`Terjadi kesalahan: ${err}`)
      }
    }
    break
    

// ============Genshin
    case 'genshin-wildlife':
    case 'g-wildlife':
    case 'gens-wildlife': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} snowboar*\nHarap berikan nama binatang liar.`);
      try {
        let result = await genshindb.wildlife(text);
        if (result) {
          let response = `*Binatang Liar Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Habitat:* ${result.habitat || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Binatang liar tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.wildlife("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Binatang liar yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-weapons':
    case 'g-weapons':
    case 'gens-weapons': {
      
      if (!text) return m.reply(`Contoh: *${lrefix + command} claymore*\nHarap berikan nama senjata.`);
      try {
        let result = await genshindb.weapons(text);
        if (result) {
          let response = `*Senjata Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Type:* ${result.type || "Data tidak tersedia"}\n` + `*Base ATK:* ${result.baseAttack || "Data tidak tersedia"}\n` + `*Substat:* ${result.subStat || "Data tidak tersedia"}\n` + `*Passive Name:* ${result.passiveName || "Data tidak tersedia"}\n` + `*Passive Description:* ${result.passiveDescription || "Data tidak tersedia"}\n` + (result.refinement ? `\n*Refinement (${result.refinement.refine}):* ${result.refinement.description || "Data tidak tersedia"}\n` : "");
          m.reply(response);
        } else {
          m.reply("Senjata tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.weapons("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Senjata yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-voiceovers':
    case 'g-voiceovers':
    case 'gens-voiceovers': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} venti*\nHarap berikan nama voiceover.`);
      try {
        let result = await genshindb.voiceovers(text);
        if (result) {
          let response = `*Voiceover Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Voiceover tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.voiceovers("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Voiceover yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-viewpoint':
    case 'g-viewpoint':
    case 'gens-viewpoint': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} starfell valley*\nHarap berikan nama pemandangan.`);
      try {
        let result = await genshindb.viewpoints(text);
        if (result) {
          let response = `*Pemandangan Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
          response += `*Area:* ${result.area || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Pemandangan tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.viewpoints("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Pemandangan yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-talents':
    case 'g-talents':
    case 'gens-talents': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter untuk mencari bakatnya.`);
      try {
        let result = await genshindb.talents(text);
        if (result && result.length > 0) {
          let response = `*Bakat ditemukan untuk karakter ${text}:*\n\n`;
          result.forEach((talent, index) => {
            response += `*${index + 1}. ${talent.name}*\n`;
            response += `_${talent.description || "Deskripsi tidak tersedia"}_\n\n`;
            response += `*Jenis:* ${talent.type || "Data tidak tersedia"}\n`;
            response += `*Element:* ${talent.element || "Data tidak tersedia"}\n\n`;
          });
          m.reply(response);
        } else {
          m.reply(`Bakat untuk karakter '${text}' tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        m.reply(`*Tidak Ditemukan*\n\n*Bakat untuk karakter '${text}' tidak ditemukan.`);
      }
    };
    break

    case 'genshin-potion':
    case 'g-potion':
    case 'gens-potion': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} squirrel fish*\nHarap berikan nama ramuan atau makanan.`)
      try {
        let result = await genshindb.foods(text);
        if (result) {
          let response = `*Ramuan atau Makanan Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Efek:* ${result.effect || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply(`Ramuan atau makanan '${text}' tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        try {
          let availableFoods = await genshindb.foods("names", {
            matchCategories: true
          });
          m.reply(`*List ${text} foods :*\n\n- ${availableFoods.join("\n- ")}`);
        } catch (err) {
          m.reply('Terjadi Kesalahan...')
          let availableFoods = await genshindb.foods("names", {
            matchCategories: true
          });
          m.reply(`*Not Found*\n\n*Available foods is :*\n${availableFoods.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-outfit':
    case 'g-outfit':
    case 'gens-outfit': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} outrider*\nHarap berikan nama kostum atau outfit.`);
      try {
        let result = await genshindb.outfits(text);
        if (result) {
          let response = `*Kostum Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Karakter:* ${result.character || "Data tidak tersedia"}`;
          if (result.url && result.url.modelviewer) {
            response += `\n_${result.url.modelviewer}_`;
          }
          m.reply(response);
        } else {
          m.reply(`Kostum '${text}' tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        try {
          let availableOutfits = await genshindb.outfits(text, {
            matchCategories: true
          });
          m.reply(`*List ${text} outfit :*\n\n- ${availableOutfits.join("\n- ")}`);
        } catch (err) {
          m.reply('Terjadi Kesalahan...')
          let availableOutfits = await genshindb.outfits("names", {
            matchCategories: true
          });
          m.reply(`*Not Found*\n\n*Available outfits is:*\n${availableOutfits.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-nation':
    case 'g-nation':
    case 'gens-nation': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} mondstadt*\nHarap berikan nama wilayah atau nasionalitas.`);
      try {
        let result = await genshindb.geographies(text);
        if (result) {
          let response = `*Informasi Wilayah Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
          response += `*Region:* ${result.region || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Informasi wilayah tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.geographies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Wilayah yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-namacard':
    case 'g-namacard':
    case 'gens-namacard': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} anemo flare*\nHarap berikan nama kartu nama.`);
      try {
        let result = await genshindb.namecards(text);
        if (result) {
          let response = `*Kartu Nama Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Unlock:* ${result.unlock || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Kartu nama tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.namecards("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Kartu nama yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-materials':
    case 'g-materials':
    case 'gens-materials': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} boreal wolf's milk*\nHarap berikan nama material.`);
      try {
        let result = await genshinmaterials(text);
        if (result) {
          let response = `*Material Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Type:* ${result.type || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Material tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshinmaterials("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Material yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-food':
    case 'g-food':
    case 'gens-food': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} temptation*\nHarap berikan nama makanan.`);
      try {
        let result = await genshindb.foods(text);
        if (result) {
          let response = `*Makanan Ditemukan: ${result.name}*\n\n`;
          response += `_"${result.description}"_\n\n`;
          response += `*Rarity:* ${result.rarity}\n`;
          response += `*Type:* ${result.foodtype}\n`;
          response += `*Category:* ${result.foodfilter} (${result.foodcategory})\n\n`;
          if (result.effect) {
            response += `*Effect:*\n${result.effect}\n\n`;
          }
          if (result.suspicious) {
            response += `*Suspicious:*\n${result.suspicious.effect}\n_"${result.suspicious.description}"_\n\n`;
          }
          if (result.normal) {
            response += `*Normal:*\n${result.normal.effect}\n_"${result.normal.description}"_\n\n`;
          }
          if (result.delicious) {
            response += `*Delicious:*\n${result.delicious.effect}\n_"${result.delicious.description}"_\n\n`;
          }
          m.reply(response);
        } else {
          m.reply("Makanan tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.foods("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Makanan yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-enemy':
    case 'g-enemy':
    case 'gens-enemy': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} ruin guard*\nHarap berikan nama musuh.`);
      try {
        let result = await genshindb.enemies(text);
        if (result) {
          let response = `*Musuh Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
          response += `*Level:* ${result.level || "Data tidak tersedia"}\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Element:* ${result.element || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Musuh tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.enemies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Musuh yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-emoji':
    case 'g-emoji':
    case 'gens-emoji': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} anemo*\nHarap berikan nama emoji.`);
      try {
        let result = await genshindb.emojis(text);
        if (result) {
          let response = `*Emoji Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Emoji tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.emojis("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Emoji yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-domain':
    case 'g-domain':
    case 'gens-domain': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} valley of remembrance*\nHarap berikan nama domain.`);
      try {
        let result = await genshindb.domains(text);
        if (result) {
          let response = `*Domain Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
          response += `*Level:* ${result.level || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Domain tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.domains("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Domain yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-craft':
    case 'g-craft':
    case 'gens-craft': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} mystical enhancement ore*\nHarap berikan nama craft.`);
      try {
        let result = await genshindb.crafts(text);
        if (result) {
          let response = `*Craft Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Type:* ${result.type || "Data tidak tersedia"}\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Craft tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.crafts("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Craft yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-const':
    case 'g-const':
    case 'gens-const':
    case 'genshin-constellation':
    case 'g-constellation':
    case 'gens-constellation': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter untuk mencari konstelasinya.`);
      try {
        let result = await genshindb.constellations(text);
        if (result && result.length > 0) {
          let response = `*Konstelasi ditemukan untuk karakter ${text}:*\n\n`;
          result.forEach((constellation, index) => {
            response += `*${index + 1}. ${constellation.name}*\n`;
            response += `_${constellation.effect}_\n\n`;
            response += `*Unlock At:* C${constellation.unlock || "Data tidak tersedia"}`;
            if (index < result.length - 1) response += "\n\n";
          });
          m.reply(response);
        } else {
          m.reply(`Konstelasi untuk karakter '${text}' tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        m.reply(`*Tidak Ditemukan*\n\n*Konstelasi untuk karakter '${text}' tidak ditemukan.`);
      }
    };
    break

    case 'genshin-artifaact':
    case 'g-artifact':
    case 'gens-artifact': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} berserker*\nHarap berikan nama artefak.`);
      try {
        let result = await genshindb.artifacts(text);
        if (result) {
          let response = `*Artefak Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Set:* ${result.set || "Data tidak tersedia"}\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Slot:* ${result.slot || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Artefak tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.artifacts("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Artefak yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-area':
    case 'g-area':
    case 'gens-area': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} liyue*\nHarap berikan nama tempat.`);
      try {
        let result = await genshindb.geographies(text);
        if (result) {
          let response = `*Info Geografi: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
          response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
          response += `*Urutan Sortir:* ${result.sortorder || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Geografi tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.geographies("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Geografi yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-animal':
    case 'g-animals':
    case 'gens-animals': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} shiba*\nHarap berikan nama hewan.`);
      try {
        let animal = await genshindb.animals(text);
        if (animal) {
          let response = `*Hewan Ditemukan: ${animal.name}*\n\n`;
          response += `"${animal.description}"\n\n`;
          response += `*Kategori:* ${animal.category || ""}\n`;
          response += `*Jenis Hitungan:* ${animal.counttype || ""}\n`;
          response += `_${animal.sortorder ? `Urutan Sortir: ${animal.sortorder}` : ""}_`;
          m.reply(response);
        } else {
          m.reply("Hewan tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        try {
          let animalCategories = await genshindb.animals(text, {
            matchCategories: true
          });
          m.reply(`*Kategori Hewan ${text} :*\n\n- ${animalCategories.join("\n- ")}`);
        } catch (err) {
          m.reply('Terjadi Kesalahan...')
          let allAnimalNames = await genshindb.animals("names", {
            matchCategories: true
          });
          m.reply(`*Tidak Ditemukan*\n\n*Hewan yang tersedia:* ${allAnimalNames.join(", ")}`);
        }
      }
    };
    break

    case 'genshin-rankaddventure':
    case 'g-rankaddventure':
    case 'genshin-advrank':
    case 'g-advrank':
    case 'gens-rankaddventure':
    case 'gens-advrank': {
      
      if (!text || isNaN(parseInt(text))) {
        return m.reply(`Masukkan nomor peringkat petualang yang valid. Contoh: *${prefix + command} 5*`);
      }
      try {
        let rankNumber = parseInt(text);
        let result = await genshindb.adventureranks(rankNumber);
        if (result) {
          let response = `*Rank Petualang Ditemukan untuk Rank ${rankNumber}:*\n\n`;
          response += `*Experience:* ${result.exp || "Data tidak tersedia"}\n`;
          response += `*Reward:* ${result.reward || "Data tidak tersedia"}\n`;
          response += `*Deskripsi:* ${result.description || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply(`Rank petualang untuk Rank ${rankNumber} tidak ditemukan.`);
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let availableRanks = await genshindb.adventureranks("names");
        m.reply(`*Tidak Ditemukan*\n\n*Rank petualang yang tersedia:* ${availableRanks.join(", ")}`);
      }
    };
    break

    case 'genshin-achievement':
    case 'g-achievement':
    case 'gens-achievement': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} mondstadt*\nHarap berikan nama prestasi.`);
      try {
        let result = await genshindb.achievements(text);
        if (result) {
          let response = `*${result.name}*\n`;
          response += `_${result.description}_\n\n`;
          response += `*Kategori:* ${result.category || ""}\n`;
          response += `*Rarity:* ${result.rarity || ""}\n`;
          response += `*Detail:* ${result.detail || ""}\n`;
          response += `*Cara Mendapatkan:* ${result.howToObtain || ""}\n`;
          m.reply(response);
        } else {
          m.reply("Prestasi tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.achievements("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Prestasi yang tersedia:* ${available.join(", ")}`);
      }
    };
    break

    case 'genshin-char':
    case 'g-char':
    case 'gens-char':
    case 'genshin-characters':
    case 'g-characters':
    case 'gens-characters': {
      
      if (!text) return m.reply(`Contoh: *${prefix + command} diluc*\nHarap berikan nama karakter.`);
      try {
        let result = await genshindb.characters(text);
        if (result) {
          let response = `*Karakter Ditemukan: ${result.name}*\n\n`;
          response += `_${result.description}_\n\n`;
          response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
          response += `*Vision:* ${result.vision || "Data tidak tersedia"}\n`;
          response += `*Senjata:* ${result.weapon || "Data tidak tersedia"}`;
          m.reply(response);
        } else {
          m.reply("Karakter tidak ditemukan.");
        }
      } catch (err) {
        m.reply('Terjadi Kesalahan...')
        let available = await genshindb.characters("names", {
          matchCategories: true
        });
        m.reply(`*Tidak Ditemukan*\n\n*Karakter yang tersedia:* ${available.join(", ")}`);
      }
    };
    break
    
    //============ Berita
    case 'fajar':{
FajarNews().then(async(res) => {
console.log(res) 
no = 0
iwan = ""
for (let i of res) {
no += 1
iwan += `\n• ${no.toString()} •\n`
iwan += `Berita: ${i.berita}\n`
iwan += `Upload: ${i.berita_diupload}\n`
iwan += `Jenis: ${i.berita_jenis}\n`
iwan += `Link: ${i.berita_url}\n`
}
iwan += ""
reply(iwan) 
})
}
break

case 'cnn': {
CNNNews().then(res => {
no = 0
iwann = ""
for (let i of res) {
no += 1
iwann += `\n• ${no.toString()} •\n`
iwann += `Berita: ${i.berita}\n`
iwann += `Link: ${i.berita_url}\n`
}
iwann += ""
reply(iwann) 
})
}
break

case 'layarkaca': {
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
iwannn = ""
for (let i of res) {
no += 1
iwannn += `\n• ${no.toString()} •\n`
iwannn += `Film: ${i.film_title}\n`
iwannn += `Link: ${i.film_link}\n`
}
iwannn += ``
reply(iwannn) 
})
}
break

case 'cnbc': {
    try {
        CNBCNews().then(async (res) => {
            let no = 0;
            let iwannnn = "";
            for (let i of res) {
                no += 1;
                iwannnn += `\n• ${no.toString()} •\n`;
                iwannnn += `Berita: ${i.berita}\n`;
                iwannnn += `Upload: ${i.berita_diupload}\n`;
                iwannnn += `Link: ${i.berita_url}\n`;
            }
            iwannnn += "";

            const thumb = res[0]?.berita_thumb || ''; // Pastikan 'berita_thumb' tidak undefined
            await LightSecret.sendMessage(m.chat, { 
                image: { url: thumb }, 
                caption: iwannnn 
            }, { quoted: m });
        }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break;

case 'detiknews': {
  try {
DetikNews().then(async(res) => {
no = 0
iwannnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnn += ""
LightSecret.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnn }, { quoted:m })
   }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break


case 'inews': {
iNews().then(async(res) => {
no = 0
iwannnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnn += ""
reply(iwannnnnnnnnn) 
})
}
break

case 'okezone': {
  try {
OkezoneNews().then(async(res) => {
no = 0
iwannnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnn += ""
const thumb = res[0].berita_thumb || '';
LightSecret.sendMessage(m.chat, { image : { url : thumb }, caption: iwannnnnnnnnnn }, { quoted:m })
   }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break

case 'sindo':{
SindoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnn += ""
reply(iwannnnnnnnnnnn) 
})
}
break


case 'antara':{
  try {
AntaraNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnn += ""
const thumb = res[0].berita_thumb || '';
LightSecret.sendMessage(m.chat, { image : { url : thumb }, caption: iwannnnnnnnnnnnnn }, { quoted:m })
   }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break

case 'merdeka': {
  try {
MerdekaNews().then(async (res) => {
iwannnnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnnn += ""
const thumb = res[0].berita_thumb || '';
LightSecret.sendMessage(m.chat, { image : { url : thumb }, caption: iwannnnnnnnnnnnnnnn }, { quoted:m })
   }).catch(err => {
            console.error(err);
            reply('Terjadi kesalahan saat mengambil berita.');
        });
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan yang tidak terduga.');
    }
}
break

case 'jalantikus': {
var reis = await JalanTikusMeme()
tekcs = ""
tekcs += "Jalan Tikus Meme\n\n"
tekcs += `Source: ${reis}`
tekcs += ""
LightSecret.sendMessage(m.chat, { image : { url : reis }, caption: tekcs }, { quoted:m })
}
break

// Random Video
case 'girl':
case 'tiktokgirl':
if (!isOwner && !isPremium) return reply(mess.owner)
LightSecret.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
var asupan = JSON.parse(fs.readFileSync('./lib/tiktok/tiktokgirl.json'))
var hasil = pickRandom(asupan)
LightSecret.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'ghea':
case 'tiktokghea':
  if (!isOwner && !isPremium) return reply(mess.owner)
var gheayubi = JSON.parse(fs.readFileSync('./lib/tiktok/gheayubi.json'))
var hasil = pickRandom(gheayubi)
LightSecret.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'bocil':
case 'tiktokbocil':
  if (!isOwner && !isPremium) return reply(mess.owner)
var bocil = JSON.parse(fs.readFileSync('./lib/tiktok/bocil.json'))
var hasil = pickRandom(bocil)
LightSecret.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'nukhty':
case 'tiktoknukhty':
  if (!isOwner && !isPremium) return reply(mess.owner)
var ukhty = JSON.parse(fs.readFileSync('./lib/tiktok/ukhty.json'))
var hasil = pickRandom(ukhty)
LightSecret.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'santuy':
case 'tiktoksantuy':
  if (!isOwner && !isPremium) return reply(mess.owner)
var santuy = JSON.parse(fs.readFileSync('./lib/tiktok/santuy.json'))
var hasil = pickRandom(santuy)
LightSecret.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'kayes':
case 'tiktokkayes':
  if (!isOwner && !isPremium) return reply(mess.owner)
var kayes = JSON.parse(fs.readFileSync('./lib/tiktok/kayes.json'))
var hasil = pickRandom(kayes)
LightSecret.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'panrika':
case 'tiktokpanrika':
  if (!isOwner && !isPremium) return reply(mess.owner)
var rikagusriani = JSON.parse(fs.readFileSync('./lib/tiktok/panrika.json'))
var hasil = pickRandom(rikagusriani)
LightSecret.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break
case 'notnot':
case 'tiktoknotnot':
  if (!isOwner && !isPremium) return reply(mess.owner)
var notnot = JSON.parse(fs.readFileSync('./lib/tiktok/notnot.json'))
var hasil = pickRandom(notnot)
LightSecret.sendMessage(m.chat, { caption: foother, video: { url: hasil.url }}, { quoted: m })
break

// Linode
case 'linode2gb': {
      if (!isOwner) return reply(mess.owner)
      try {
        let linodeData = {
          label: `${args[0]}`,
          region: 'ap-south',
          type: 'g6-standard-1',
          image: 'linode/ubuntu20.04',
          root_pass: randomKarakter(5) + randomNomor(3),
          stackscript_id: null,
          authorized_keys: null,
          backups_enabled: false
        };

        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify(linodeData)
        });

        const responseData = await response.json();

        if (response.ok) {
          const linodeId = responseData.id;
          m.reply(`Tunggu Sebentar...`);
          await new Promise(resolve => setTimeout(resolve, 60000));

          const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${linodeToken}`
            }
          });

          const linodeInfo = await linodeResponse.json();
          const ipAddress = linodeInfo.ipv4[0];

          let messageText = `Linode berhasil dibuat!\n\n`;
          messageText += `ID: ${linodeId}\n`;
          messageText += `IP Linode: ${ipAddress}\n`;
          messageText += `Password: ${linodeData.root_pass}\n`;

          await LightSecret.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: m
          });
        } else {
          throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
      }
    }
    break

    case 'linode4gb': {
      if (!isOwner) return reply(mess.owner)
      try {
        let linodeData = {
          label: `${args[0]}`,
          region: 'ap-south',
          type: 'g6-standard-2',
          image: 'linode/ubuntu20.04',
          root_pass: randomKarakter(5) + randomNomor(3),
          stackscript_id: null,
          authorized_keys: null,
          backups_enabled: false
        };

        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify(linodeData)
        });

        const responseData = await response.json();

        if (response.ok) {
          const linodeId = responseData.id;
          m.reply(`Tunggu Sebentar...`);
          await new Promise(resolve => setTimeout(resolve, 60000));

          const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${linodeToken}`
            }
          });

          const linodeInfo = await linodeResponse.json();
          const ipAddress = linodeInfo.ipv4[0];

          let messageText = `Linode berhasil dibuat!\n\n`;
          messageText += `ID: ${linodeId}\n`;
          messageText += `IP Linode: ${ipAddress}\n`;
          messageText += `Password: ${linodeData.root_pass}\n`;

          await LightSecret.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: m
          });
        } else {
          throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
      }
    }
    break

    case 'linode8gb': {
      if (!isOwner) return reply(mess.owner)
      try {
        let linodeData = {
          label: `${args[0]}`,
          region: 'ap-south',
          type: 'g6-standard-4',
          image: 'linode/ubuntu20.04',
          root_pass: randomKarakter(5) + randomNomor(3),
          stackscript_id: null,
          authorized_keys: null,
          backups_enabled: false
        };

        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify(linodeData)
        });

        const responseData = await response.json();

        if (response.ok) {
          const linodeId = responseData.id;
          m.reply(`Tunggu Sebentar...`);
          await new Promise(resolve => setTimeout(resolve, 60000));

          const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${linodeToken}`
            }
          });

          const linodeInfo = await linodeResponse.json();
          const ipAddress = linodeInfo.ipv4[0];

          let messageText = `Linode berhasil dibuat!\n\n`;
          messageText += `ID: ${linodeId}\n`;
          messageText += `IP Linode: ${ipAddress}\n`;
          messageText += `Password: ${linodeData.root_pass}\n`;

          await LightSecret.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: m
          });
        } else {
          throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
      }
    }
    break

    case 'linode16gb': {
      if (!isOwner) return reply(mess.owner)
      try {
        let linodeData = {
          label: `${args[0]}`,
          region: 'ap-south',
          type: 'g6-standard-8',
          image: 'linode/ubuntu20.04',
          root_pass: randomKarakter(5) + randomNomor(3),
          stackscript_id: null,
          authorized_keys: null,
          backups_enabled: false
        };

        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify(linodeData)
        });

        const responseData = await response.json();

        if (response.ok) {
          const linodeId = responseData.id;
          m.reply(`Tunggu Sebentar...`);
          await new Promise(resolve => setTimeout(resolve, 60000));

          const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${linodeToken}`
            }
          });

          const linodeInfo = await linodeResponse.json();
          const ipAddress = linodeInfo.ipv4[0];

          let messageText = `Linode berhasil dibuat!\n\n`;
          messageText += `ID: ${linodeId}\n`;
          messageText += `IP Linode: ${ipAddress}\n`;
          messageText += `Password: ${linodeData.root_pass}\n`;

          await LightSecret.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: m
          });
        } else {
          throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
      }
    }
    break

    case 'listlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        const responseData = await response.json();

        if (response.ok) {
          let messageText = 'Daftar Linode VPS:\n\n';
          responseData.data.forEach(linode => {
            messageText += `ID: ${linode.id}\n`;
            messageText += `Label: ${linode.label}\n`;
            messageText += `IP: ${linode.ipv4[0]}\n\n`;
          });

          await LightSecret.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: m
          });
        } else {
          throw new Error(`Gagal mendapatkan daftar Linode.`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat mendapatkan daftar Linode: ${err}`);
      }
    }
    break

    case 'onlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/boot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil dihidupkan.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal menghidupkan Linode: ${responseData.errors[0]?.reason || 'Unknown Error'}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat menghidupkan Linode: ${err}`);
      }
    }
    break

    case 'offlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil dimatikan.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mematikan Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat mematikan Linode: ${err}`);
      }
    }
    break

    case 'rebootlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/reboot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil di-restart.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal me-restart Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat me-restart Linode: ${err}`);
      }
    }
    break

    case 'rebuildlinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const image = args[1];
        const rootPassword = randomKarakter(4) + randomNomor(3);

        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          },
          body: JSON.stringify({
            image,
            root_pass: rootPassword
          })
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil di-rebuild dengan image ${image}. Password root baru: ${rootPassword}`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal rebuild Linode: ${responseData.errors[0]?.reason || 'Unknown Error'}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat rebuild Linode: ${err}`);
      }
    }
    break

    case 'delinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        if (response.ok) {
          m.reply(`Linode dengan ID ${linodeId} berhasil dihapus.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal menghapus Linode: ${responseData.errors[0].reason}`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat menghapus Linode: ${err}`);
      }
    }
    break

    case 'saldolinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const response = await fetch('https://api.linode.com/v4/account', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        const accountInfo = await response.json();

        if (response.ok) {
          const balance = accountInfo.balance / 100;
          const credit = accountInfo.credit_remaining / 100;

          let messageText = `Saldo Akun Linode:\n\n`;
          messageText += `- Balance: $${balance.toFixed(2)}\n`;
          messageText += `- Credit Remaining: $${credit.toFixed(2)}\n`;

          m.reply(messageText);
        } else {
          throw new Error(`Gagal mendapatkan saldo Linode.`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat memeriksa saldo Linode: ${err}`);
      }
    }
    break

    case 'sisalinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        const responseData = await response.json();

        if (response.ok) {
          const totalLinodes = responseData.data.length;
          m.reply(`Total Linode yang aktif: ${totalLinodes}`);
        } else {
          throw new Error(`Gagal mendapatkan data Linode.`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat memeriksa jumlah Linode: ${err}`);
      }
    }
    break

    case 'cekvpslinode': {
      if (!isOwner) return reply(mess.owner)
      try {
        const linodeId = args[0];
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${linodeToken}`
          }
        });

        const linodeInfo = await response.json();

        if (response.ok) {
          let messageText = `Detail Linode:\n\n`;
          messageText += `ID: ${linodeInfo.id}\n`;
          messageText += `Label: ${linodeInfo.label}\n`;
          messageText += `Status: ${linodeInfo.status}\n`;
          messageText += `Region: ${linodeInfo.region}\n`;
          messageText += `Type: ${linodeInfo.type}\n`;
          messageText += `IP: ${linodeInfo.ipv4.join(', ')}\n`;

          await LightSecret.sendMessage(m.chat, {
            text: messageText
          }, {
            quoted: m
          });
        } else {
          throw new Error(`Gagal mendapatkan detail Linode.`);
        }
      } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat memeriksa detail Linode: ${err}`);
      }
    }
    break
    
    // menfess
case"confes": case "menfes":case 'menfess': case 'confess': {
if (!isPrivate) return reply(`Khusus Di Private Chat!!`)
      global.menfess = global.menfess ? global.menfess : {}
      if (!text) return reply(` ${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let [jid, name, msg] = text.split`|`
      if ((!jid || !name || !msg)) return reply(`${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
      let p = (await LightSecret.onWhatsApp(jid))[0] || {}
      if (!p.exists) return reply('❌ Nomer Yang Kamu Masukan Salah')
      if (p.jid == m.sender) return reply('Itu Nomer Lu Dodol!!')
      let mf = Object.values(global.menfess).find(mf => mf.status === true)
      if (mf) return !0
         let heri = `${monospa(`${name.trim()}`)}`
         let id = +new Date
         let txt = `📨 Hay kamu dapat pesan dari seseorang 👋 \n\nnama: *${name.trim()}*\n\nPesan: `
         txt += `_${msg.trim()}_\n\n${readmore}Mau balas pesan ini kak? bisa kok kak. tinggal ketik pesannya kakak lalu kirim, nanti saya sampaikan ke ${heri}`
         
             await LightSecret.sendMessage(p.jid, {
    text: txt,
    contextInfo: {
      externalAdReply: {
        title: 'Confess',
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/5413eed27c6af00fa7273.jpg',
        sourceUrl: `${ch}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }).then(() => {
 m.reply(`*Berhasil Mengirim Pesan Menfess!!*`)       
            global.menfess[id] = {
               id,
               from: m.sender,
               name,
               receiver: p.jid,
               msg,
               status: false
            }
            return !0
         })
   }
break 

// Game
   
               case 'tebakkata': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakkata) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata
}, gamewaktu * 1000)
}
break 
case 'asahotak': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak
}, gamewaktu * 1000)
}
break           
case 'susunkata': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata
}, gamewaktu * 1000)
}
break           
case 'tebakgambar':
if (!isGroup) return reply(mess.group)
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await LightSecret.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
delete tebakgambar
}, gamewaktu * 1000)
}
break
case 'tebakbendera': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera
}, gamewaktu * 1000)
}
break
case 'tebakkimia': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkimia = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkimia
}, gamewaktu * 1000)
}
break        
case 'family100': case 'f100': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family = {
soal: soal,
jawaban: famil,
waktu: setTimeout(async function () {
if (global.family) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family.jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family
};
}, gamewaktu * 1000)
}

break   

// Store
case "idch":
case "cekidch": {
if (!text) return m.reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await LightSecret.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
m.reply(teks)
}
			break;
case 'upch': {
  if (!text) return m.reply(`Contoh: ${command} Hai`)
  let teks = `\n${text}\n`

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = [`${idch}`] // ganti dengan nomor owner

  for (let id of ownerJid) {
    await LightSecret.sendMessage(id, {
      text: teks,
      mentions: [m.sender]
    }, { quoted: m })
  }

  m.reply('Berhasil mengirim pesan')
}
break
case 'sendgc': {
  if (!text) return m.reply(`Contoh: ${command} Hai`)

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = [`${idgc}`] // ganti dengan nomor owner

  for (let id of ownerJid) {
    LightSecret.sendMessage(id, {image: {url: thumbnail }, caption: text, mentions: [m.sender] }, {quoted: m})
}

  m.reply('Berhasil mengirim pesan')
}
break
case "proses": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply("jasa install panel")
let teks = `\n📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${ch}\n`
await LightSecret.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaowner}`, 
thumbnailUrl: thumbnail, 
sourceUrl: ch,
}}}, {quoted: null})
}
break
case "done": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply("jasa install panel")
let teks = `\n📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${ch}
\n`
await LightSecret.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaowner}`, 
thumbnailUrl: thumbnail, 
sourceUrl: ch,
}}}, {quoted: null})
}
break
case 'lits': case 'list': case 'store':{
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toLowerCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toLowerCase()}, maka kirim pesan ${db_respon_list[0].key.toLowerCase()} kepada bot`
LightSecret.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break

case 'dellist':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'addlist':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await LightSecret.downloadAndSaveMediaMessage(quoted)
                let mem = await uploadwidipe(media)
addResponList(m.chat, args1, args2, true, mem, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
}
break
case 'updatelist': case 'update':
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
let args3 = q.split("|")[0].toLowerCase()
let args4 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args3}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await LightSecret.downloadAndSaveMediaMessage(quoted)
                let mem = await uploadwidipe(media)
updateResponList(m.chat, args3, args4, true, mem, db_respon_list)
reply(`Sukses update respon list dengan key *${args3}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(m.chat, args3, args4, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args3}*`)
}
break
case 'pay': case 'payment': {
if (!isPrivate) return reply(mess.private)

await LightSecret.sendMessage(m.chat, {image: {url: qris }, caption: `dana : ${dana}\ngopay : ${gopay}`  }, {quoted: m})
}
break

// Search
case 'playstore':
    case 'pstore': {
      if (!text) return m.reply(`Contoh: ${command} whatsapp`);
      try {
        let loo = await fetchJson(`https://api.vreden.web.id/api/playstore?query=${encodeURIComponent(text)}`);
        let results = loo.result;

        if (!results.length) return m.reply('Tidak ada hasil ditemukan.');
        let gambar = results[0]?.img;
        let teks = results.map((yoo, i) => {
          return `*${i + 1}. ${text.toUpperCase()}*
Developer: ${yoo.developer}
Rating: ${yoo.rate2}
Link: ${yoo.link}
Link Developer: ${yoo.link_dev}`;
        }).join('\n\n');
        await LightSecret.sendMessage(m.chat, {
          image: {
            url: gambar
          },
          caption: teks
        }, {
          quoted: m
        });
      } catch (err) {
        console.error(err);
        m.reply(err.toString());
      }
    }
    break

    case 'playstation':
    case 'pstation': {
      if (!text) return m.reply(`Contoh: ${command} Naruto`);
      try {
        let loo = await fetchJson(`https://fastrestapis.fasturl.cloud/search/playstation?query=${encodeURIComponent(text)}`);
        let gambar = loo.result.images;
        let teks = loo.result.map((yoo, i) => {
          return `*${i + 1}. ${yoo.title.toUpperCase()}*
Link: ${yoo.link}`;
        }).join('\n\n');
        await LightSecret.sendMessage(m.chat, {
          image: {
            url: gambar
          },
          caption: teks
        }, {
          quoted: m
        });
      } catch (err) {
        console.error(err);
        m.reply(err.toString());
      }
    }
    break

    case 'google': {
      if (!text) return m.reply(`Contoh: ${command} LightSecret`)
      const apiKey = process.env.TENOR_API_KEY || ''
      const cx = 'e5c2be9c3f94c4bbb'
      const query = (text)
      const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`
      fetch(url).then(response => response.json()).then(data => {
        if (data.items && data.items.length > 0) {
          let teks = `Hasil pencarian Google: ${text}\n\n`
          data.items.forEach(item => {
            teks += `• Judul: ${item.title}\n`
            teks += `• Deskripsi: ${item.snippet}\n`
            teks += `• Link: ${item.link}\n\n`
          })
          m.reply(teks)
        } else {
          m.reply('Tidak ada hasil yang ditemukan')
        }
      }).catch(err => {
        m.reply('Terjadi kesalahan')
      })
    }
    break
    case 'yts': case 'ytsearch': {
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
 let [l, r] = text.split`|`
 if (!l) l = ''
 if (!r) r = ''
 const more = String.fromCharCode(8206)
 const readMore = more.repeat(4001)
 let redmo = l + readMore + r
 let anu = (await yts(text)).all
 let video = anu.filter(v => v.type === 'video') 
let channel = anu.filter(v => v.type === 'channel') 
let teks = `*${monospa('Hasil Pencarian YouTube 👇')}*\n${redmo}${channel.map(v => `*${v.name}* (${v.url})\n_${v.subCountLabel} (${v.subCount}) Subscriber_\n${v.videoCount} video\n========================`.trim()

).join("\n")}`+`${video.map(v => `*${v.title}* (${v.url})\nDuration: ${v.timestamp}\nUploaded ${v.ago}
\n${v.views} views\n========================`.trim() ).join("\n")}`
let image = channel.length ? channel[0].image : video.length ? video[0].image : urlmenu.main

let sections = [{
		title: global.namebot2, 
		highlight_label: 'start chats', 
		rows: [{
			header: global.namebot2, 
	title: "Menu",
	description: `kembali ke menu !`, 
	id: '.menu'
	},
	{
		header: global.namebot2, 
		title: "Owner Bot", 
		description: "Owner bot, pemilik bot", 
		id: '.owner'
	}]
}]

video.forEach(async(data) => {
sections.push({
	title: data.title, 
	rows: [{
		title: "Get Video", 
		description: `Get video from "${data.title}"`, 
		id: `.ytmp4 ${data.url}`
		}, 
		{
		title: "Get Audio", 
		description: `Get audio from "${data.title}"`, 
		id: `.ytmp3 ${data.url}`
		}]
	}) 
}) 
let listMessage = {
    title: 'Download Media!!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: teks
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: global.namebot2
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 subtitle: global.namebot2,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: image }}, { upload: LightSecret.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage) 
 }, 
 ],
 })
 })
 }
 }
}, {})

await LightSecret.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break 
   case 'lagu': {
if (!text) return m.reply(`Masukkan judul lagu.\nContoh:\n.${command} where we are`);
  try {
    m.reply('Mencari lagu...');
    const search = await fetch(`https://zenz.biz.id/search/SoundCloud?query=${encodeURIComponent(text)}`);
    const result = await search.json();
    if (!result.status || !result.result || !result.result[0]) {
      return m.reply('Lagu tidak ditemukan.');
    }
    const url = result.result[0].url;
    const res = await fetch(`https://zenz.biz.id/downloader/SoundCloud?url=${encodeURIComponent(url)}`);
    const json = await res.json();
    if (!json.status || !json.audio_url) {
      return m.reply('Gagal mengunduh lagu.');
    }
    await LightSecret.sendMessage(m.chat, {
      audio: { url: json.audio_url },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${json.title}.mp3`,
      caption: `Judul: ${json.title}\nAuthor: ${json.author}\nDurasi: ${json.duration}`,
      contextInfo: {
        externalAdReply: {
          title: json.title,
          body: json.author,
          thumbnailUrl: json.thumbnail,
          mediaType: 2,
          mediaUrl: json.source_url,
          sourceUrl: json.source_url,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan.');
  }
};
break
case "pin":
      case "pinterest":
      await LightSecret.sendMessage(m.chat, {react: {text: '⏰', key: m.key}})
        {
          async function pinterest(query) {
            try {
              const { data } = await axios.get(
                `https://api.vreden.my.id/api/pinterest?query=${encodeURIComponent(
                  query
                )}`
              );

              return data.result[
                Math.floor(Math.random() * data.result.length)
              ];
            } catch (err) {
              throw Error(err.message);
            }
          }

          if (!text) return m.reply(`*Penggunaan Salah!*\ncontoh: .${command} LightSecret`);
          try {
            let hasil = await pinterest(text);
            if (!hasil) return m.reply("Gambar tidak ditemukan.");
            const buttons = [
              {
                buttonId: `.pin ${text}`,
                buttonText: {
                  displayText: "Next",
                },
                type: 1,
              },
            ];

            await LightSecret.sendMessage(
              m.chat,
              {
                image: { url: hasil },
                caption:
                  "Lanjut mencari gambar yang sama? Klik tombol *Next* dibawah ini",
                footer: `${foother}`,
                buttons: buttons,
                headerType: 1,
                viewOnce: true,
              },
              { quoted: m }
            );
          } catch (err) {
            console.error(err.message);
            m.reply("Terjadi kesalahan");
          }
        }
        
        break;
case 'play':
case 'song': {
if (!text) return reply(`*Penggunaan Salah!*\ncontoh: .${command} Night change`)
let ytsSearchh = await yts(text)
const rees = await ytsSearchh.all[0]
var anu = await ytdl.ytmp3(`${rees.url}`)
 await LightSecret.sendMessage(m.chat, {image: {url: `${rees.thumbnail}` }, caption: `*[ Menemukan ]*\n${rees.title}\n${rees.url}\n\nMengirim Audio...` }, {quoted: m})
 }
if (anu.status) {
let urlMp3 = anu.download.url
await LightSecret.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
break       
// Bug/attack commands removed in the clean build.
            default:
                // Anti Wame
          if (global.antiWame)
  if (budy.includes(`https://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await LightSecret.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			LightSecret.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Anti Link Gc
if (global.Antilinkgc)
  if (budy.includes(`https://chat.whatsapp`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await LightSecret.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			LightSecret.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antilink Ch
if (global.Antilinkch)
  if (budy.includes(`https://whatsapp.com/channel/`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await LightSecret.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			LightSecret.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Anti Link Ig
if (global.Antilinkig)
  if (budy.includes(`https://www.instagram.com/`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await LightSecret.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			LightSecret.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antilinkall
if (global.Antilinkall)
  if (budy.includes(`https://`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(mess.admin)
if (isOwner) return reply(mess.owner)
kice = m.sender
        await LightSecret.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			LightSecret.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};
