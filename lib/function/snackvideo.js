'use strict';
const axios = require('axios');
const cheerio = require('cheerio');

const SNACK_BASE = 'https://www.snackvideo.com';

class SnackVideo {
    /**
     * Search for SnackVideo content.
     * @param {string} q  Search query (plain text, not a URL)
     */
    async search(q) {
        // q is a search term, not a URL — strip control characters but do NOT url-encode
        // for the path segment; axios handles the encoding.
        if (typeof q !== 'string' || q.trim().length === 0) {
            throw new Error('SnackVideo.search: query tidak boleh kosong');
        }
        const safeQ = q.trim().replace(/[^\w\s-]/g, '').substring(0, 100);
        const res = await axios.get(`${SNACK_BASE}/discover/${encodeURIComponent(safeQ)}`,
            { timeout: 15000 });
        const $ = cheerio.load(res.data);
        const content = $('#ItemList').text().trim();
        if (!content) throw new Error('Video tidak ditemukan');
        const json = JSON.parse(content);
        return json.map((a) => a.innerHTML).map((a) => ({
            title:     a.name,
            thumbnail: a.thumbnailUrl?.[0],
            uploaded:  new Date(a.uploadDate).toLocaleString(),
            stats: {
                watch:   a.interactionStatistic?.[0]?.userInteractionCount,
                likes:   a.interactionStatistic?.[1]?.userInteractionCount,
                comment: a.commentCount,
                share:   a.interactionStatistic?.[2]?.userInteractionCount,
            },
            author: {
                name:      a.creator?.mainEntity?.name,
                alt_name:  a.creator?.mainEntity?.alternateName,
                bio:       a.creator?.mainEntity?.description,
                avatar:    a.creator?.mainEntity?.image,
                stats: {
                    likes:     a.creator?.mainEntity?.interactionStatistic?.[0]?.userInteractionCount,
                    followers: a.creator?.mainEntity?.interactionStatistic?.[1]?.userInteractionCount,
                },
            },
            url: a.url,
        }));
    }

    /**
     * Download metadata for a SnackVideo URL.
     * @param {string} url  Must be a snackvideo.com URL.
     */
    async download(url) {
        let parsed;
        try { parsed = new URL(url); } catch { throw new Error('SnackVideo.download: URL tidak valid'); }
        if (parsed.protocol !== 'https:' || !parsed.hostname.endsWith('snackvideo.com')) {
            throw new Error('SnackVideo.download: hanya URL snackvideo.com yang diizinkan');
        }
        const res = await axios.get(url, { timeout: 20000 });
        const $   = cheerio.load(res.data);
        const json = JSON.parse($('#VideoObject').text().trim());
        return {
            metadata: {
                title:     json.name,
                thumbnail: json.thumbnailUrl?.[0],
                uploaded:  new Date(json.uploadDate).toLocaleString(),
                comment:   json.commentCount,
                watch:     json.interactionStatistic?.[0]?.userInteractionCount,
                likes:     json.interactionStatistic?.[1]?.userInteractionCount,
                share:     json.interactionStatistic?.[2]?.userInteractionCount,
                author:    json.creator?.mainEntity?.name,
            },
            download: json.contentUrl,
        };
    }
}

module.exports = new SnackVideo();
