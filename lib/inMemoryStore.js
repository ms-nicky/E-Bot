/**
 * Minimal in-memory store shim.
 *
 * Newer releases of the official @whiskeysockets/baileys package removed the
 * old `makeInMemoryStore` helper from core. This project only relies on a
 * small slice of that old API (`bind`, `.contacts`, `.groupMetadata`,
 * `.loadMessage`), so instead of depending on a third-party fork, this
 * re-implements just that slice directly against the public Baileys event
 * stream. Nothing here is copied from Baileys source — it's a small
 * from-scratch cache built on documented event names.
 *
 * Message cache is capped per-chat to avoid unbounded memory growth on
 * long-running bots.
 */

const MAX_MESSAGES_PER_CHAT = 100

function makeInMemoryStore(_opts = {}) {
    const contacts = {}
    const groupMetadata = {}
    /** @type {Map<string, Map<string, any>>} chatJid -> (msgId -> message) */
    const messagesByChat = new Map()

    function cacheMessage(msg) {
        if (!msg?.key?.remoteJid || !msg?.key?.id) return
        const chatJid = msg.key.remoteJid
        if (!messagesByChat.has(chatJid)) messagesByChat.set(chatJid, new Map())
        const chatMap = messagesByChat.get(chatJid)
        chatMap.set(msg.key.id, msg)

        if (chatMap.size > MAX_MESSAGES_PER_CHAT) {
            const oldestKey = chatMap.keys().next().value
            chatMap.delete(oldestKey)
        }
    }

    function bind(ev) {
        ev.on('messages.upsert', ({ messages }) => {
            for (const msg of messages || []) cacheMessage(msg)
        })

        ev.on('messages.update', (updates) => {
            for (const { key, update } of updates || []) {
                const chatMap = messagesByChat.get(key?.remoteJid)
                const existing = chatMap?.get(key?.id)
                if (existing && update) Object.assign(existing, update)
            }
        })

        ev.on('contacts.upsert', (list) => {
            for (const c of list || []) {
                if (c?.id) contacts[c.id] = { ...contacts[c.id], ...c }
            }
        })

        ev.on('contacts.update', (list) => {
            for (const c of list || []) {
                if (c?.id) contacts[c.id] = { ...contacts[c.id], ...c }
            }
        })

        ev.on('groups.upsert', (list) => {
            for (const g of list || []) {
                if (g?.id) groupMetadata[g.id] = g
            }
        })

        ev.on('groups.update', (list) => {
            for (const g of list || []) {
                if (g?.id) groupMetadata[g.id] = { ...groupMetadata[g.id], ...g }
            }
        })
    }

    /**
     * Returns a cached message by chat + id, or undefined if not cached.
     * The third argument some call sites pass (a socket instance) is
     * accepted but unused — kept only for call-site compatibility.
     */
    function loadMessage(chatJid, id, _sock) {
        return messagesByChat.get(chatJid)?.get(id)
    }

    return {
        contacts,
        groupMetadata,
        loadMessage,
        bind,
    }
}

module.exports = { makeInMemoryStore }
