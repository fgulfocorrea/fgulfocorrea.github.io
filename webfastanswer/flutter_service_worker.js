'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/assets/menu.jpg": "9ab1f01a102007ad42631afc45a7b55c",
"assets/assets/logo.jpg": "76b38c29c062d3e80a8f6f3c4aabcde1",
"assets/assets/menuDrawer.png": "54e0531a50ffa869013c815772eecc2c",
"assets/assets/logoNombre.jpg": "94885283467eab304ca143847dffb01c",
"assets/assets/logo_192.png": "070639d9cc580fe5711e51d2c5bbc7d9",
"assets/assets/menu2.jpg": "92ab65abcb1865ba5f5b379804fcfb33",
"assets/assets/fondoLogin.jpg": "3236f24b646f0c6b572e00ba2b574f02",
"assets/assets/logo48dp.jpg": "16d7f4b14ca0f9c84b64cc82e968012b",
"assets/assets/logoNombre.png": "af628e2fecd2d4ce30f4778012896072",
"assets/assets/logoIngles.jpg": "b966a100c993b0cf9cd80fa18ce875e8",
"assets/assets/fondoBlancoBordeColor.jpg": "860390b079bcc50d52b75340652b7ca8",
"assets/assets/fondoLogin3.jpg": "5eee27ae4b3e5520bf1095a99b413f02",
"assets/assets/logo400.png": "df7eb2f4eab5b81e726bfd06359c0de9",
"assets/assets/logo.png": "1b9c94736c4c0db8467bf1597ddae8b0",
"assets/assets/fondoLogin2.jpg": "9a1ea019ca910711b83616664c74b5f1",
"assets/assets/ballBlack.gif": "d343e8b3e517ed45207553c5842c032b",
"assets/assets/fondoColor.jpg": "e35b4def2e8799be1c9a05eeef8a2877",
"assets/assets/logo192.jpg": "f76f813ddcaf44c2cedb7972a0bf0295",
"assets/assets/logoIngles.png": "37c81e41ae411da8c84f665f13ba98df",
"assets/assets/fondoLogin.png": "7deafa104ebffe4076b18a597b4f6e38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/LICENSE": "4f3796493085662611ab1cb27aef6e8b",
"assets/AssetManifest.json": "92235b0063b8ae2ed7a5cc1486395d39",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "f4e34effb6ce223f51a7839c99c695bc",
"/": "f4e34effb6ce223f51a7839c99c695bc",
"manifest.json": "03dc65b1628523fee41504d621dafeb6",
"main.dart.js": "e53993180b692cad4ae266a38153b2a1",
"favicon.png": "070639d9cc580fe5711e51d2c5bbc7d9"
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
