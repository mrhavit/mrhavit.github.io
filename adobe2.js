(function () {
  var params = new URLSearchParams(window.location.search);

  var targetUrl = params.get("url");
  var parentUrl = params.get("parenturl");

  // Redirect the iframe itself
  if (targetUrl) {
      window.location.href = targetUrl;
      return;
  }

  // Redirect the parent window
  if (parentUrl) {
      window.top.location.href = parentUrl;
      return;
  }
})();

document.write('<h1>mr</h1>')