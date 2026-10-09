const CACHE_NAME="lunar-arcana-v0.5.0";
const SHELL=["./","./index.html","./manifest.webmanifest"];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET") return;

  const isImage=req.destination==="image";
  if(isImage){
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache=>{
        const cached=await cache.match(req);
        if(cached) return cached;
        try{
          const fresh=await fetch(req);
          cache.put(req,fresh.clone());
          return fresh;
        }catch(e){
          return cached || Response.error();
        }
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached=>{
      const network=fetch(req).then(res=>{
        if(res && res.ok){
          const clone=res.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(req,clone));
        }
        return res;
      }).catch(()=>cached);
      return cached || network;
    })
  );
});
