// Updated version: 2025-01-07
this.addEventListener("install", (event) => {
  console.log("zz");
  event.waitUntil(
    caches.open("my-cache1").then((cache) => {
      console.log("yy");
      return cache.addAll([
        "./clickAni.gif", // 缓存 GIF 文件
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
