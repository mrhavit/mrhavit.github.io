fetch('https://adobeid-na1.services.adobe.com/ims/check/v6/token?jslVersion=v2-v0.31.0-2-g1e8a8a8', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    credentials: 'include',
    body: new URLSearchParams({
        'client_id': 'projectx_webapp',
        'scope': 'ab.manage,AdobeID,openid,read_organizations,creative_cloud,creative_sdk,tk_platform,tk_platform_sync,af_byof,stk.a.license_skip.r,stk.a.limited_license.cru,additional_info.optionalAgreements,uds_read,uds_write,af_ltd_projectx,unified_dev_portal,additional_info.ownerOrg,additional_info.roles,additional_info.roles,DCAPI,additional_info.auth_source,additional_info.authenticatingAccount,pps.write,pps.delete,tk_platform_grant_free_subscription,pps.read,firefly_api,additional_info.projectedProductContext'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));