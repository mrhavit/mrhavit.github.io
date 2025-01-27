// Define the endpoint URL
const url = "https://developers.tiktok.com/passport/auth/get_token/";

// Define the fetch options
const options = {
  method: "GET",
  credentials: "include", // Include credentials with the request
}

// Send the fetch request
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    alert(JSON.stringify(data)); // Alert the response data
  })
  .catch((error) => {
    alert(`Error: ${error.message}`); // Alert any errors
  });