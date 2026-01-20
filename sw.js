self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'Accredito GTA V in corso...';
    event.waitUntil(
        self.registration.showNotification('SISTEMA GTA V', {
            body: data,
            icon: 'https://cdn-icons-png.flaticon.com/512/295/295128.png'
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
});
