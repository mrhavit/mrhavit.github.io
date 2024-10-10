// Create the XHR object
var xhr = new XMLHttpRequest();

// Open a GET request to the desired endpoint
xhr.open('GET', 'https://www.rocketmiles.com/rest/rocketmiles/session', true);

// Include credentials (cookies, authorization headers, etc.)
xhr.withCredentials = true;

// Set up the onload handler to capture the header
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Get the value of the 'rm-sessionid' header
        var sessionId = xhr.getResponseHeader('rm-sessionid');
        if (sessionId) {
            alert('rm-sessionid: ' + sessionId);
        } else {
            alert('rm-sessionid header not found');
        }
    } else {
        alert('Request failed with status: ' + xhr.status);
    }
};

// Handle errors
xhr.onerror = function() {
    alert('An error occurred during the request');
};

// Send the request
xhr.send();
