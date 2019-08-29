const FILES_TO_CACHE = [
  "./",
  "./styles/main.min.css",
  "./scripts/main.min.js",
  "./scripts/utils.min.js"
];

const CACHE_NAME = "emeraldCache_v0101";

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
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
