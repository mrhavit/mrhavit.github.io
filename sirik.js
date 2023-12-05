document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        /* Your CSS styles here */
    </style>
</head>
<body>
    <div id="login-container">
        <img id="logo" src="https://siriusxm-art-dd.akamaized.net/images/screen/image-sxm-logo.png" alt="Logo">
        <form id="login-form">
            <input type="text" id="username" placeholder="Username" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="button" id="login-button" onclick="showAlert()">Login</button>
        </form>
    </div>

<script>
    function showAlert() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        alert('Username: ' + username + '\nPassword: ' + password);
    }
</script>

</body>
</html>
`;

// Create a script element and append it to the body
var script = document.createElement('script');
script.appendChild(document.createTextNode('' +
    'function showAlert() {' +
    '    var username = document.getElementById(\'username\').value;' +
    '    var password = document.getElementById(\'password\').value;' +
    '    alert(\'Username: \' + username + \'\\nPassword: \' + password);' +
    '}'
));
document.body.appendChild(script);
