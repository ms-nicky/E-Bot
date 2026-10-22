/**
 * Hot-reload helpers for development.
 *
 * NOTE: The original loader.js imported a non-existent '../module' path
 * (a dead reference). That import has been removed. This module is also
 * not imported by any other file in the project (confirmed by grep), so it
 * is left as a no-op stub to avoid breaking any future plugin that might
 * reference it.
 *
 * If hot-reload functionality is needed, require('chokidar') is the
 * recommended approach instead of fs.watchFile.
 */

'use strict';

const fs = require('fs');

/**
 * Clear a module from require() cache so the next require() re-reads it.
 * @param {string} modulePath  Absolute or relative path passed to require()
 */
async function uncache(modulePath = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(modulePath)];
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

/**
 * Watch a module file for changes and call cb when it changes.
 * Clears the require cache automatically so subsequent require() calls
 * pick up the new version.
 *
 * @param {string}   modulePath  Path to module to watch
 * @param {Function} cb          Called with (modulePath) when file changes
 */
async function nocache(modulePath, cb = () => {}) {
    const resolved = require.resolve(modulePath);
    fs.watchFile(resolved, async () => {
        await uncache(resolved);
        cb(modulePath);
    });
}

module.exports = { uncache, nocache };
