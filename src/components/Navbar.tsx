import React, { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "Chi Siamo" },
  { href: "#menu", label: "Menu" },
  { href: "#events", label: "Eventi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contatti" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-dark/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="https://lirp.cdn-website.com/6662e3ce/dms3rep/multi/opt/0WOSX00000FOWKh4AP_logoshock-9be715de-1920w.png  " 
            alt="Shock Bar Logo" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-[0.2em] text-cream/70 hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-block text-sm uppercase tracking-[0.15em] border border-gold text-gold px-6 py-2.5 hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Prenota
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-dark/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-serif tracking-widest text-cream/80 hover:text-gold transition-colors ${
              menuOpen ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;