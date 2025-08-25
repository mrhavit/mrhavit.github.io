function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return null;
  }

  const token = getCookie("headless_access_token");
  if (token) {
    alert("headless_access_token = " + token);
    console.log("headless_access_token:", token);
  } else {
    alert("Cookie 'headless_access_token' not found!");
    console.log("Cookie 'headless_access_token' not found!");
  }