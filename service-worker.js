self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tranvia-cache").then(cache => {
      return cache.addAll([
        "/index.html",
        "/juego.html",
        "/configuracion.html",
        "/styles.css",
        "/script.js",
        "/manifest.json",
        "/icono-192.png",
        "/icono-512.png"
        // Aquí puedes añadir más cartas si quieres que estén offline
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
