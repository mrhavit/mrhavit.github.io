window.open('https://accounts.nintendo.com/connect/1.0.0/authorize?client_id=e56201e414c97a10&display=touch&interacted=1&prompt=consent&redirect_uri=https%3A%2F%2Fen-americas-support.nintendo.com&response_mode=web_message&response_type=code+id_token+token&scope=eshopAlps+missionStatus+missionStatus%3Aprogress+openid+pointWallet+user+user.birthday+user.links%5B%5D.id+user.mii+user.wishlist+userNotificationMessage%3AanyClients+userNotificationMessage%3AanyClients%3Awrite&state=aa711f14120b3577f3e6063f465ae3d7&web_message_target=op-frame&web_message_uri=https%3A%2F%2Faccounts.nintendo.com');

window.addEventListener('message', function(event) {
    console.log(event.data);

    // Check if event.data starts with "cb="
    if (event.data.access_token) {
        document.write(`Your Access Token: ${event.data}`);
    } else {
        console.error('Invalid data format or missing');
    }
}, false);
