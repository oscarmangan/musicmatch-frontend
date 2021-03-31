/*
    Author: Oscar Mangan
    Description: ServiceWorker file for PWA
 */

const self = this;
const mmCache = "mm-pwa-v" + new Date().getTime();
const filesToCache = [
    '/static/css/2.9683b8f1.chunk.css',
    '/static/media/mm_icon_gradient.aab03eb2.png',
    '/static/media/ok.3ea809aa.png',
    '/static/media/upload.797a78ad.png',
    '/static/media/delete.5cc943d2.png',
];

// Cache on install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(mmCache)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear the cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(cacheName => (cacheName.startsWith("mm-pwa-v")))
                        .filter(cacheName => (cacheName !== mmCache))
                        .map(cacheName => caches.delete(cacheName))
                );
            })
    );
});

// Serve from Cache or handle offline functionality
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline.html')
            })
    );
});
