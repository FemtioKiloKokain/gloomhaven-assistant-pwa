importScripts("/gloomhaven-assistant-pwa/precache-manifest.214f3e94016b9f28080b9152e393100b.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('airhorner').then(cache => {
            return cache
                .addAll([
                    './index.html',
                    '/gloomhaven-assistant-pwa',
                    '/gloomhaven-assistant-pwa/index.html'
                ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

