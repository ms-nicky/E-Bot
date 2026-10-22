/**
 * gc.js — Group participant event handler.
 *
 * Sends welcome/goodbye/promote/demote notifications when group membership
 * changes.  Called from the 'group-participants.update' event in index.js.
 *
 * Fixes applied:
 *  - `WA_DEFAULT_EPHEMERAL` is imported from the package namespace, not
 *    `.default` (which is the socket factory, not the constants object).
 *  - `thumbnail` is read from `global.thumbnail` (set in config.js) with a
 *    safe fallback, instead of relying on an implicit ambient global.
 *  - Background URL is URL-encoded before being interpolated into the
 *    canvas API endpoint to prevent URL injection.
 */

'use strict';

require('./config');
const { WA_DEFAULT_EPHEMERAL } = require('@whiskeysockets/baileys');

const DEFAULT_AVATAR = 'https://files.catbox.moe/nwvkbt.png';

function GroupParticipants(client, { id, participants, action, author }) {
    client.groupMetadata(id)
        .then(gcdata => {
            const subject = gcdata.subject;
            // Use the configured thumbnail background, with a safe fallback.
            const bg = encodeURIComponent(
                typeof global.thumbnail === 'string' && global.thumbnail
                    ? global.thumbnail
                    : 'https://files.catbox.moe/4wk4wd.jpg'
            );

            for (const jid of participants) {
                const num       = jid.split('@')[0];
                const check     = author && author !== jid && author.length > 1;
                const mentioned = check ? [author, jid] : [jid];

                switch (action) {
                    case 'add':
                        client.sendMessage(
                            id,
                            {
                                image: {
                                    url: `https://api.siputzx.my.id/api/canvas/welcomev4?avatar=${encodeURIComponent(DEFAULT_AVATAR)}&background=${bg}&description=@${num}`,
                                },
                                caption: `Hai @${num} 👋\n\nSelamat datang di *${subject}*!\nJangan lupa baca deskripsi grup dan tetap patuhi aturan. 😊✨`,
                                contextInfo: { mentionedJid: [jid] },
                            },
                            { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
                        );
                        break;

                    case 'remove':
                        client.sendMessage(
                            id,
                            {
                                image: {
                                    url: `https://api.siputzx.my.id/api/canvas/goodbyev4?avatar=${encodeURIComponent(DEFAULT_AVATAR)}&background=${bg}&description=@${num}`,
                                },
                                caption: `Selamat tinggal @${num} 👋\nSemoga sukses di luar sana! 🚀`,
                                contextInfo: { mentionedJid: [jid] },
                            },
                            { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
                        );
                        break;

                    case 'promote':
                        if (author) {
                            client.sendMessage(
                                id,
                                {
                                    text: `🎉 *@${author.split('@')[0]} telah menjadikan @${num} sebagai admin grup ini!* 👑`,
                                    contextInfo: { mentionedJid: mentioned },
                                },
                                { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
                            );
                        }
                        break;

                    case 'demote':
                        if (author) {
                            client.sendMessage(
                                id,
                                {
                                    text: `😔 *@${author.split('@')[0]} telah menghapus @${num} dari jabatan admin grup ini.* 🚫`,
                                    contextInfo: { mentionedJid: mentioned },
                                },
                                { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
                            );
                        }
                        break;

                    default:
                        console.warn(`[gc] Unknown group action: ${action} for ${jid} in ${subject}`);
                }
            }
        })
        .catch(err => {
            console.error('[gc] groupMetadata error:', err.message ?? err);
        });
}

module.exports = GroupParticipants;
