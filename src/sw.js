/*Nuestro Service Worker, es un archivo que permite la opimizacion deretencion de usuarios,
este es un archivo Js que se ejecuta por separado del hilo principal del navegador, interceptando
las solicitudes de red, el almacenamiento en cache o recuperando los recursos del cache, entregando
los mensajes push. se ejecutan a través de HTTPS, debido a que pueden interceptar solicitudes de red 
y modificar las respuestas, lo que provoca ataques de "intermediario" que pueden ser perjudicantes para la app.*/

self.addEventListener("install", e => {

    e.waitUntil(
        caches.open("static").then(cache => {
             return cache.addAll(["./", "style.css"]);
          })
    );

});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>  {
           return response || fetch(e.request);
        })
    );
});