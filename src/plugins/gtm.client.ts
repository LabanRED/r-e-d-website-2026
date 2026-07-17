export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const gtmId = config.public.gtmId
  
  if (gtmId) {
    // Inject GTM script
    (function(w: any, d: Document, s: string, l: string, i: string){
      w[l] = w[l] || [];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f = d.getElementsByTagName(s)[0];
      var j = d.createElement(s) as HTMLScriptElement;
      var dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      if (f && f.parentNode) {
        f.parentNode.insertBefore(j, f);
      } else {
        d.head.appendChild(j);
      }
    })(window, document, 'script', 'dataLayer', gtmId as string);
  }
})
