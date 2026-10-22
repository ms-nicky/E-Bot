'use strict';
const fetch = require('node-fetch');

/**
 * Fetch TikTok media metadata via siputzx.my.id proxy API.
 * @param {string} url  TikTok video URL (must be https://tiktok.com/...)
 */
async function tiktok(url) {
    let parsed;
    try { parsed = new URL(url); } catch { throw new Error('tiktok: URL tidak valid'); }
    if (parsed.protocol !== 'https:' || !/(tiktok\.com|vm\.tiktok\.com)$/.test(parsed.hostname)) {
        throw new Error('tiktok: hanya URL tiktok.com yang diizinkan');
    }
    const apiUrl = `https://api.siputzx.my.id/api/tiktok?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl, { timeout: 20000 });
    if (!response.ok) throw new Error(`tiktok API error: ${response.status}`);
    return response.json();
}

module.exports = { tiktok };
