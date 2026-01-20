// Questo è l'agente segreto che gira in background sul telefono
self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(clients.claim());
});

self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'Aggiornamento Account GTA V';
    const options = {
        body: data,
        icon: 'https://cdn-icons-png.flaticon.com/512/295/295128.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/295/295128.png',
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification('SISTEMA GTA V', options)
    );
});

// Quando Fabrizio clicca sulla notifica, lo mandiamo al gioco (o dove vuoi tu)
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://socialclub.rockstargames.com/')
    );
});
