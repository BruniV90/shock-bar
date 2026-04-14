import React from "react";

const Footer: React.FC = () => (
  <footer className="py-10 bg-dark-light border-t border-dark-border">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="flex items-center">
        <img 
        src="img/logo.png" 
        alt="Shock Bar Logo" 
        className="h-8 md:h-10 w-auto object-contain" 
        />
      </a>
      <p className="text-cream/30 text-sm">
        © {new Date().getFullYear()} Shock Bar. Tutti i diritti riservati.
      </p>
      <a href="https://www.iubenda.com/privacy-policy/98012113" class="iubenda-white iubenda-noiframe iubenda-embed iub-legal-only" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
    </div>
  </footer>
);

export default Footer;