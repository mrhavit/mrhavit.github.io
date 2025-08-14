(function () {
    // Just use your real iframe URL (with asserted_origin param already in it)
    const iframe = document.createElement('iframe');
    iframe.src = 'https://auth-light.identity.adobe.com/sentry/iframe/index.html?client_id=ProjectCentralPanel11&relay=25b46d10-1763-48ef-82ed-93a686d79bd5&asserted_origin=https://cclibrariespanel-cdn.adobe.com';
    document.body.appendChild(iframe);
  
    window.addEventListener('message', (e) => {
      if (e.data === 'connection' && e.ports && e.ports[0]) {
        const port = e.ports[0];
        console.log('[parent] got port from child');
  
        port.onmessage = (ev) => {
          console.log('[parent] port message:', ev.data);
        };
      }
    });
  })();