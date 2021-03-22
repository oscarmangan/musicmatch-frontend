/* Author: Oscar Mangan */
/* Description: Musicmatch Service Worker to provide PWA features */

let staticCacheName = "mm-pwa-" + new Date().getTime();

// Cache on install of serviceworker
window.self.addEventListener("install", event => {
    this.skipWaiting();
    event.WaitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll();
            })
    )
});

// Clear the cache on activate event
window.self.addEventListener("activate", event => {
    event.WaitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("mm-pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from the cache
window.self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('/offline/');
            })
    )
});

