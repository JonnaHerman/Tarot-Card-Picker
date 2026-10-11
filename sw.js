const CACHE="lunar-arcana-v0.6.0";
const CORE=["./","./index.html","./manifest.webmanifest","./assets/icon-192.png","./assets/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(async cached=>{try{const fresh=await fetch(e.request);if(fresh&&fresh.ok)caches.open(CACHE).then(c=>c.put(e.request,fresh.clone()));return fresh}catch(err){return cached||Response.error()}}))});