const FILES_TO_CACHE = [
  "./",
  "./favicon.ico",
  "./manifest.json",
  "./browserconfig.xml",
  "./index.html",
  "./styles/main.min.css",
  "./dist/main.js"
];

const EMERALD_VERSION = "v0111";
const CACHE_NAME = "emeraldCache_v0111";
const cacheWhitelist = [CACHE_NAME];

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log("[ServiceWorker] Pre-caching offline page");
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => {
        caches.keys().then(keyList => {
          return Promise.all(
            keyList.map(key => {
              if (cacheWhitelist.indexOf(key) === -1) {
                console.log("[ServiceWorker] removing old key in cache: ", key);
                return caches.delete(key);
              }
            })
          );
        });
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;

      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200 || response.type !== "basic")
            return response;

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          let responseToCache = response.clone();

          caches
            .open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache));

          return response;
        })
        .catch(err => {
          // fallback mechanism
          console.error(
            "[ServiceWorker: ERROR] ",
            err.message,
            event.request.url
          );
          return caches.open(CACHE_NAME).then(cache => {
            return cache.match("./index.html");
          });
        });
    })
  );
});
