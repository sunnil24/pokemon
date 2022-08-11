const CACHE_NAME = "cache-v1";
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();

const addResourcesToCache = async (resources) => {
  const cache = await caches.open("cache-v1");
  await cache.addAll(resources);
  self.skipWaiting();
};

self.addEventListener("install", (event) => {
  console.log("installed");
  // event.waitUntil(
  //   addResourcesToCache([
  //     "/",
  //     // "/index.html",
  //     // "/style.css",
  //     "/scripts.js",
  //     // "https://jherr-pokemon.s3.us-west-1.amazonaws.com/*",
  //   ])
  // );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      console.log(cacheNames, "--cacheNames");
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (CACHE_NAME !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// self.addEventListener("fetch", (fetchEvent) => {
//   fetchEvent.respondWith(
//     fetchEvent.request
//       .then((res) => {
//         const cacheRes = res.clone();
//         caches.open(CACHE_NAME).then((cache) => {
//           debugger;
//           cache.put(fetchEvent.request, cacheRes);
//         });
//         return res;
//       })
//       .catch(() => caches.match(fetchEvent.request).then((res) => res))
//   );
// });

const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
  // cache.put(request, response);
  // return respone;
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
