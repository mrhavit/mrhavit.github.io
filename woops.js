(function() {
    // Get CSRF token from cookies
    function getCookie(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'));
      return match ? decodeURIComponent(match[2]) : null;
    }
  
    const csrfToken = getCookie('passport_csrf_token');
  
    // Get 'token' from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
  
    // Prepare and send the POST request
    if (csrfToken && tokenParam) {
      fetch('https://web-sg.tiktok.com/passport/sotl/app2web/confirm_auth_token/?support_webview=1&cronet_version=a482972f_2025-04-03&ttnet_version=4.2.228.11-tiktok&use_store_region_cookie=1', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Tt-Passport-Csrf-Token': csrfToken
        },
        body: `token=${encodeURIComponent(tokenParam)}&aid=1233&client_id=bda89680-037b-49f7-91a9-70c8226b8143`
      });
    }
  })();