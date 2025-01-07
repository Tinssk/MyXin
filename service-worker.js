// service-worker.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        "clickAni.gif", // 缓存 GIF 文件
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // 从缓存中返回 GIF
      }
      return fetch(event.request); // 如果缓存没有，去请求网络
    })
  );
});
