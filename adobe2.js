(function () {
    var params = new URLSearchParams(window.location.search);
    var targetUrl = params.get("url");
  
    if (targetUrl) {
      window.location.href = targetUrl;
    }
  })();  