import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-dark-light border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 1. Copyright a Sinistra */}
          <p className="order-3 md:order-1 text-[10px] uppercase tracking-[0.15em] text-cream/20">
            © {new Date().getFullYear()} Shock Bar
          </p>

          {/* 2. Link compatti al Centro */}
          <div className="order-2 md:order-2 flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-cream/30">
            <a href="doc/progetto.pdf" className="hover:text-gold transition-colors">Progetto</a>
            <span className="w-1 h-1 rounded-full bg-dark-border" />
            <a href="https://www.iubenda.com/privacy-policy/98012113" className="hover:text-gold transition-colors">Privacy</a>
            <span className="w-1 h-1 rounded-full bg-dark-border" />
            <a href="https://www.iubenda.com/privacy-policy/98012113/cookie-policy" className="hover:text-gold transition-colors">Cookies</a>
          </div>

          {/* 3. Logo a Destra */}
          <div className="order-1 md:order-3">
            <a href="#" className="transition-opacity hover:opacity-80">
              <img
                src="img/logo.png"
                alt="Shock Bar Logo"
                className="h-7 md:h-8 w-auto object-contain"
              />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;