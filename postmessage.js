(function pollOpener() {
    if (!window.opener || window.opener.closed) return;
  
    try {
      const href = window.opener.location.href;
      if (href.includes('token')) {
        const urlParams = new URL(href).searchParams;
        const redirectUrl = new URL('https://mrhavit.github.io/');
        for (const [key, value] of urlParams.entries()) {
          redirectUrl.searchParams.append(key, value);
        }
        window.location.href = redirectUrl.toString();
      } else {
        setTimeout(pollOpener, 500); // keep polling every 500ms
      }
    } catch (e) {
      setTimeout(pollOpener, 500); // catch cross-origin issues or delays
    }
  })();
  