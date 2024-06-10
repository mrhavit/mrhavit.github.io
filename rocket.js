// Function to send XHR request and alert Rm-Sessionid header value
function getSessionId() {
    var xhr = new XMLHttpRequest();
    
    // Define the URL to which the request is sent
    var url = 'https://www.rocketmiles.com/rest/rocketmiles/session';  // Replace with your actual URL

    // Open a new GET request
    xhr.open('GET', url, true);

    // Set request to include cookies
    xhr.withCredentials = true;

    // Define what to do when the request state changes
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Get the value of the Rm-Sessionid from the response headers
                var sessionId = xhr.getResponseHeader('Rm-Sessionid');
                if (sessionId) {
                    alert('Rm-Sessionid: ' + sessionId);
                } else {
                    alert('Rm-Sessionid header not found.');
                }
            } else {
                alert('Request failed with status: ' + xhr.status);
            }
        }
    };

    // Send the request
    xhr.send();
}

// Call the function to send the request and alert the Rm-Sessionid
getSessionId();