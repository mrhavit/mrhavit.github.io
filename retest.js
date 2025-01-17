// Define the endpoint URL
const url = "https://us.tiktok.com/passport/open/web/auth/v2/?client_key=aw8cb3204x0a1g88&scope=user.info.basic%2Ccomment.list%2Cuser.account.configure%2Cuser.setting.update%2Cbizpartner.item.info%2Cbiz.account.phone%2Cuser.info.stats%2Clive.list%2Cuser.info.showcase%2Cvideo.list.no_watermark%2Cvideo.list.manage%2Cbiz.account.email%2Ccomment.list.manage%2Cuser.info.username%2Cuser.account.type%2Cmessage.list.admin%2Cuser.info.profile%2Cbiz.account.info%2Cuser.info.phone%2Cvideo.list.private_ads.no_watermark%2Cuser.info.email%2Cuser.setting.list%2Cbizpartner.user.info%2Cseries.collection.list&aid=1459&state=cGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1yZWRpcmVjdCZmcm9tX3BhZ2U9bG9naW4md2luU2VhcmNoPXt9JmNzcmZ0b2tlbj1hMmVlOGVlMTkyYTQ2OTBmMTM2Mzg4ODQyYmFkYzI5ZDRmYzgwYjdmJnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRmFkcy50aWt0b2suY29tJTJGaTE4biUyRmxvZ2lu&redirect_uri=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Flogin&source=web&response_type=code";

// Define the fetch options
const options = {
  method: "POST",
  credentials: "include", // Include credentials with the request
  headers: {
    "Content-Type": "application/json", // Set the content type to JSON
  },
  body: JSON.stringify({}), // Send an empty JSON body
};

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