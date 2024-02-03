// Create the HTML elements
const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login Page</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background-color: #000;
            }

            #login-container {
                text-align: center;
                background-color: #000;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            }

            #logo {
                max-width: 100px;
                margin-bottom: 20px;
            }

            input {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                box-sizing: border-box;
            }

            #login-button {
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            #login-button:hover {
                background-color: #45a049;
            }
        </style>
    </head>
    <body>
        <div id="login-container">
            <img id="logo" src="https://variety.com/wp-content/uploads/2017/09/sony-pictures.jpg" alt="Logo">
            <form id="login-form">
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="button" id="login-button" onclick="showAlert()">Login</button>
            </form>
        </div>
    </body>
    </html>
`;

// Create a new document and append it to the current document
const newDoc = new DOMParser().parseFromString(htmlContent, 'text/html');
document.documentElement.replaceWith(newDoc.documentElement);

// Create a script element and append it to the body
const script = document.createElement('script');
script.textContent = `
    function showAlert() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        alert('Username: ' + username + '\\nPassword: ' + password);
    }
`;
document.body.appendChild(script);
