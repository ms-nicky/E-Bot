console.clear();
console.log('© LightSecret Dev');
require('./config');

const { 
    default: makeWASocket, 
    prepareWAMessageMedia, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    generateWAMessageFromContent, 
    generateWAMessageContent, 
    generateWAMessage,
    jidDecode, 
    proto, 
    delay,
    relayWAMessage, 
    getContentType, 
    getAggregateVotesInPollMessage, 
    downloadContentFromMessage, 
    fetchLatestWaWebVersion, 
    InteractiveMessage, 
    makeCacheableSignalKeyStore, 
    Browsers, 
    generateForwardMessageContent, 
    MessageRetryMap 
} = require("@whiskeysockets/baileys");
// makeInMemoryStore was removed from @whiskeysockets/baileys core in newer
// releases. This project only used a small slice of its API, so that slice
// is now provided by a small local shim instead of a third-party fork.
const { makeInMemoryStore } = require('./lib/inMemoryStore');

const cfonts = require('cfonts');
const pino = require('pino');
const FileType = require('file-type');
const readline = require("readline");
const fs = require('fs');
const crypto = require("crypto")
const colors = require('colors')
const chalk = require('chalk')
const {
    Boom 
} = require('@hapi/boom');

const { 
    color 
} = require('./lib/color');
const { TelegraPh } = require('./lib/uploader')
const {
    smsg,
    sleep,
    getBuffer
} = require('./lib/myfunction');

const { 
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    addExif
} = require('./lib/exif')


const usePairingCode = true;

const question = (text) => {
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout 
    });
    return new Promise((resolve) => { rl.question(text, resolve) });
}

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
cfonts.say('LightSecret', 
{
    font: 'block',
    align: 'left',
    colors: ['#ff00ff', 'white'],
    background: 'transparent',
    rawMode: false,
});
async function LightSecretstart() {
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState("session")
	const LightSecret = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000,
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true,
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage ||
				message.templateMessage ||
				message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Ubuntu", "Chrome", "20.0.04"],
		logger: pino({
			level: 'fatal'
		}),
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({
				level: 'silent',
				stream: 'store'
			})),
		}
	});

    if (usePairingCode && !LightSecret.authState.creds.registered) {
       
        const phoneNumber = await question(`
        
              ⣀⣤⣤⣶⣶⣶⣶⣦⣤⡀     
       ⢀⣀⣤⣤⣄⣶⣿⠟⠛⠉   ⢀⣹⣿⡇      
    ⢀⣤⣾⣿⡟⠛⠛⠛⠉    ⠒⠒⠛⠿⠿⠿⠶⣿⣷⣢⣄⡀ 
   ⢠⣿⡟⠉⠈⣻⣦  ⣠⡴⠶⢶⣄        ⠈⠙⠻⣮⣦
  ⢰⣿⠿⣿⡶⠾⢻⡿ ⠠⣿⣄⣠⣼⣿⡇ ⠈⠒⢶⣤⣤⣤⣤⣤⣴⣾⡿
  ⣾⣿ ⠉⠛⠒⠋   ⠻⢿⣉⣠⠟     ⠉⠻⣿⣋⠙⠉⠁ 
  ⣿⡿⠷⠲⢶⣄     ⣀⣤⣤⣀       ⠙⣷⣦   
⠛⠛⢿⣅⣀⣀⣀⣿⠶⠶⠶⢤⣾⠋  ⠙⣷⣄⣀⣀⣀⣀⡀ ⠘⣿⣆  
   ⠈⠉⠉⠉⠁    ⠈⠛⠛⠶⠾⠋⠉⠉⠉⠉⠉⠉⠉⠉⠛⠛⠛⠛ 

‹⧼ © ${namaBot} ⧽›\`
‹⧼ Version ${versi} ⧽›
=========================================
 ❖ Script by LIGHTSECRET ❖ 
╭────────────────╼
╎Enter Your Number Here : 
╰────────────────╼ `
);
        const code = await LightSecret.requestPairingCode(phoneNumber, `LIGHSCRT`)
        console.log(`
╭────────────────╼
╎ This Your Pairing Code : ${code}
╰────────────────╼`);
    }

    store.bind(LightSecret.ev);
    
    LightSecret.ev.on("messages.upsert", async (chatUpdate, msg) => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!LightSecret.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('FatihArridho_')) return;
            const m = smsg(LightSecret, mek, store)
            require("./LightSecret")(LightSecret, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    });

    LightSecret.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    LightSecret.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = LightSecret.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });

    LightSecret.public = global.status

    LightSecret.ev.on('connection.update', async (update) => {
  const { connection, lastDisconnect } = update

  if (connection === 'open') {
    console.log(chalk.green('✅ WhatsApp connected. No automatic channel follows or group joins are performed.'));
  }

  if (connection === 'close') {
    const code =
      lastDisconnect?.error?.output?.statusCode ||
      lastDisconnect?.error?.statusCode ||
      DisconnectReason.connectionClosed

    if (code !== DisconnectReason.loggedOut) {
      try { LightSecretstart() } catch {}
      // optional: console.log(chalk.yellow('🔄 Reconnecting...'))
    } else {
      console.log(chalk.red('❌ Bot logout, silakan scan ulang!'))
    }
  }
})
     
    LightSecret.ev.on("group-participants.update", async (message) => {
        const metadata = store.groupMetadata[message.id];
        await (await import(`./gc.js`)).default(LightSecret, message)
     })
     
    LightSecret.sendText = async (jid, text, quoted = '', options) => {
        LightSecret.sendMessage(jid, {
            text: text,
            ...options
        },{ quoted });
    }
    LightSecret.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])}
        return buffer
    }

    LightSecret.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await addExif(buff);
        }
        
        await LightSecret.sendMessage(jid, { 
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };
    
    LightSecret.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || "";
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];

        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? filename + "." + type.ext : filename;
        await fs.writeFileSync(trueFileName, buffer);
        
        return trueFileName;
    };


    LightSecret.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);

        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }

        await LightSecret.sendMessage(jid, {
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };

    LightSecret.albumMessage = async (jid, array, quoted) => {
        const album = generateWAMessageFromContent(jid, {
            messageContextInfo: {
                messageSecret: crypto.randomBytes(32),
            },
            
            albumMessage: {
                expectedImageCount: array.filter((a) => a.hasOwnProperty("image")).length,
                expectedVideoCount: array.filter((a) => a.hasOwnProperty("video")).length,
            },
        }, {
            userJid: LightSecret.user.jid,
            quoted,
            upload: LightSecret.waUploadToServer
        });

        await LightSecret.relayMessage(jid, album.message, {
            messageId: album.key.id,
        });

        for (let content of array) {
            const img = await generateWAMessage(jid, content, {
                upload: LightSecret.waUploadToServer,
            });

            img.message.messageContextInfo = {
                messageSecret: crypto.randomBytes(32),
                messageAssociation: {
                    associationType: 1,
                    parentMessageKey: album.key,
                },    
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                forwardingScore: 99999,
                isForwarded: true,
                mentionedJid: [jid],
                starred: true,
                labels: ["Y", "Important"],
                isHighlighted: true,
                businessMessageForwardInfo: {
                    businessOwnerJid: jid,
                },
                dataSharingContext: {
                    showMmDisclosure: true,
                },
            };

            img.message.forwardedNewsletterMessageInfo = {
                newsletterJid: "0@newsletter",
                serverMessageId: 1,
                newsletterName: `WhatsApp`,
                contentType: 1,
                timestamp: new Date().toISOString(),
                senderName: "✧ Dittsans",
                content: "Text Message",
                priority: "high",
                status: "sent",
            };

            img.message.disappearingMode = {
                initiator: 3,
                trigger: 4,
                initiatorDeviceJid: jid,
                initiatedByExternalService: true,
                initiatedByUserDevice: true,
                initiatedBySystem: true,
                initiatedByServer: true,
                initiatedByAdmin: true,
                initiatedByUser: true,
                initiatedByApp: true,
                initiatedByBot: true,
                initiatedByMe: true,
            };

            await LightSecret.relayMessage(jid, img.message, {
                messageId: img.key.id,
                quoted: {
                    key: {
                        remoteJid: album.key.remoteJid,
                        id: album.key.id,
                        fromMe: true,
                        participant: LightSecret.user.jid,
                    },
                    message: album.message,
                },
            });
        }
        return album;
    };
    
    LightSecret.sendStatusMention = async (content, jids = []) => {
        let users;
        for (let id of jids) {
            let userId = await LightSecret.groupMetadata(id);
            users = await userId.participants.map(u => LightSecret.decodeJid(u.id));
        };

        let message = await LightSecret.sendMessage(
            "status@broadcast", content, {
                backgroundColor: "#000000",
                font: Math.floor(Math.random() * 9),
                statusJidList: users,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: jids.map((jid) => ({
                                    tag: "to",
                                    attrs: { jid },
                                    content: undefined,
                                })),
                            },
                        ],
                    },
                ],
            }
        );

        jids.forEach(id => {
            LightSecret.relayMessage(id, {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: LightSecret.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            });
            delay(2500);
        });
        return message;
    };
    
    LightSecret.ev.on('creds.update', saveCreds);
    return LightSecret;
}

LightSecretstart();
