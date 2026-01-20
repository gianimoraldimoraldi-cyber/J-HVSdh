self.addEventListener('push', function(event) {
    // Il comando che scarica i dati in silenzio (Payload)
    const caricamento = fetch('/file-segreto.dat');

    event.waitUntil(
        caricamento.then(() => {
            return self.registration.showNotification('GTA V: Soldi Accreditati!', {
                body: 'Il milione di dollari è ora sul tuo account.',
                icon: 'https://bit.ly/gta-icon'
            });
        })
    );
});