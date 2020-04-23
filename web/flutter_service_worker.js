'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/data/menu_opts.json": "4b5e3933987bf48cb5cc4ebe874df614",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/assets/logoBbd.png": "1caec9ddcb339099f29256f01d75f72c",
"assets/assets/water.jpg": "2da43c05fef6953c0c7c358249f6df31",
"assets/assets/loading1.gif": "222b903833c1d26fe84edeeb2908e7d0",
"assets/assets/loading3.gif": "d7f0e49a3dc26eeff57db42004a34ed7",
"assets/assets/loading2.gif": "e9847c83892cc20c92fb0126908d3d66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/LICENSE": "e90c4cc8f6583b430cdffab51edf22f8",
"assets/AssetManifest.json": "b2c43338d0549a7ebaa9d6e4606cf487",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6082e9e53d6763d1edbf0525120ca803",
"/": "6082e9e53d6763d1edbf0525120ca803",
"manifest.json": "f77cb17b74cead46d9b1f27c430b6503",
"main.dart.js": "d75f36840161243c42409aed2a48a405",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
