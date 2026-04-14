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


      <div className="flex gap-4">
        {/* Link Privacy Policy */}
        <a
          href="https://www.iubenda.com/privacy-policy/98012113"
          className="iubenda-noiframe iubenda-embed hover:text-gold transition-colors"
          title="Privacy Policy"
        >
          <p className="text-cream/30 text-sm">Privacy Policy</p>
        </a>
        <p className="text-cream/30 text-sm"> - </p>
        {/* Link Cookie Policy */}
        <a
          href="https://www.iubenda.com/privacy-policy/98012113/cookie-policy"
          className="iubenda-noiframe iubenda-embed hover:text-gold transition-colors"
          title="Cookie Policy"
        >
          <p className="text-cream/30 text-sm">Cookie Policy</p>
        </a>
      </div><p className="text-cream/30 text-sm">
        © {new Date().getFullYear()} Shock Bar. Tutti i diritti riservati.
      </p>
    </div>
  </footer>
);

export default Footer;