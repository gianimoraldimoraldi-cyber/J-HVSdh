self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'Nuovo aggiornamento GTA V!';
    const options = {
        body: data,
        icon: 'icon.png', // Puoi metterne una se vuoi
        badge: 'icon.png'
    };
    event.waitUntil(
        self.registration.showNotification('SISTEMA GTA V', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Qui puoi decidere dove mandare la vittima quando clicca sulla notifica
    event.waitUntil(
        clients.openWindow('https://tuonome.github.io/tuo-progetto/')
    );
});
