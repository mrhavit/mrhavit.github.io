  // Create iframe
  const iframe = document.createElement('iframe');

  // Set attributes
  iframe.src = "https://auth-light.identity.adobe.com/sentry/iframe/index.html?client_id=ProjectCentralPanel11&relay=25b46d10-1763-48ef-82ed-93a686d79bd5&asserted_origin=https://cclibrariespanel-cdn.adobe.com";
  iframe.width = "800";
  iframe.height = "600";
  iframe.style.border = "none";

  // Insert into the page
  document.body.appendChild(iframe);