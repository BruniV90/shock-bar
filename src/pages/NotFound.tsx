import React from "react";

const NotFound: React.FC = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center px-6">
    <div className="text-center">
      <h1 className="font-serif text-8xl text-gold mb-4">404</h1>
      <p className="text-cream/60 text-lg mb-8">La pagina che cerchi non esiste.</p>
      <a
        href="/"
        className="uppercase tracking-[0.2em] text-sm border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-dark transition-all duration-300"
      >
        Torna alla Home
      </a>
    </div>
  </div>
);

export default NotFound;