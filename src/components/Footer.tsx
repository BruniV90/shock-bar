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
    </div>
  </footer>
);

export default Footer;