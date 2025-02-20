fetch("https://web-sg.tiktok.com/passport/open/web/auth/v2/?client_key=aw8cb3204x0a1g88&scope=user.info.basic%2Ccomment.list%2Cuser.info.showcase%2Cuser.setting.list%2Cbizpartner.item.info%2Cuser.account.type%2Cuser.account.configure%2Cuser.info.username%2Cseries.collection.list%2Cbiz.account.email%2Cvideo.list.manage%2Cbiz.account.info%2Ccomment.list.manage%2Cbizpartner.user.info%2Clive.list%2Cmessage.list.admin%2Cvideo.list.no_watermark%2Cvideo.list.private_ads.no_watermark%2Cuser.info.email%2Cuser.info.phone%2Cbiz.promote.upgrade_stats%2Cbiz.account.phone%2Cuser.setting.update%2Cuser.info.profile%2Cuser.info.stats%2Cbiz.promote.create&aid=1459&state=&redirect_uri=https%3A%2F%2Fwww.tiktok.com%2Fcreative%2Fregistration%2Fqualification&source=web&response_type=code", {
    method: "POST",
    credentials: "include"
})
.then(response => response.json())
.then(data => {
    const url = new URL(data.redirect_url);
    const code = url.searchParams.get("code");
    if (code) {
        alert(code);
        console.log(code);
    } else {
        console.error("Code parameter not found in redirect URL");
    }
})
.catch(error => console.error("Error fetching data:", error));