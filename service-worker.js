self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tranvia-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./configuracion.html",
        "./juego.html",
        "./styles.css",
        "./manifest.json",
        "./service-worker.js",
        "./bocina.mp3",
        "./tren_sonido.mp3",
        "./icono-192.png",
        "./icono-512.png",

        // Cartas BUENAS
        "./cartas/buena_1.png",
        "./cartas/buena_2.png",
        "./cartas/buena_3.png",
        "./cartas/buena_4.png",
        "./cartas/buena_5.png",
        "./cartas/buena_6.png",

        // Cartas MALAS
        "./cartas/mala_1.png",
        "./cartas/mala_2.png",
        "./cartas/mala_3.png",
        "./cartas/mala_4.png",
        "./cartas/mala_5.png",
        "./cartas/mala_6.png",

        // Cartas NEUTRAS
        "./cartas/neutra_1.png",
        "./cartas/neutra_2.png",
        "./cartas/neutra_3.png",
        "./cartas/neutra_4.png",
        "./cartas/neutra_5.png",
        "./cartas/neutra_6.png",

        // Cartas ABSURDAS
        "./cartas/absurda_1.png",
        "./cartas/absurda_2.png",
        "./cartas/absurda_3.png",
        "./cartas/absurda_4.png",
        "./cartas/absurda_5.png",
        "./cartas/absurda_6.png",

        // Cartas ADULTAS (+18)
        "./cartas/adulta_1.png",
        "./cartas/adulta_2.png",
        "./cartas/adulta_3.png",
        "./cartas/adulta_4.png",
        "./cartas/adulta_5.png",
        "./cartas/adulta_6.png"
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
