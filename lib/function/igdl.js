'use strict';
const fetch = require('node-fetch');

/**
 * Fetch Instagram media metadata via siputzx.my.id proxy API.
 * @param {string} url  Instagram post/reel URL (must be https://instagram.com/...)
 */
async function igdl(url) {
    let parsed;
    try { parsed = new URL(url); } catch { throw new Error('igdl: URL tidak valid'); }
    if (parsed.protocol !== 'https:' || !/(instagram\.com|instagr\.am)$/.test(parsed.hostname)) {
        throw new Error('igdl: hanya URL instagram.com yang diizinkan');
    }
    const apiUrl = `https://api.siputzx.my.id/api/d/igdl?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl, { timeout: 20000 });
    if (!response.ok) throw new Error(`igdl API error: ${response.status}`);
    return response.json();
}

module.exports = { igdl };
