import React from "react";

const Hero: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
        alt="Shock Bar interior"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <p className="text-gold uppercase tracking-[0.4em] text-sm md:text-base mb-6 animate-fade-in opacity-0">
        Cocktail Bar d'Autore
      </p>
      <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8 animate-fade-in-up opacity-0 delay-200 text-cream">
        SHOCK<span className="text-gold">.</span>
      </h1>
      <p className="text-cream/60 text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-400 font-light">
        Dove l'arte della mixology incontra l'atmosfera più esclusiva della città
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-600">
        <a
          href="#menu"
          className="uppercase tracking-[0.2em] text-sm bg-gold text-dark px-10 py-4 hover:bg-gold-light transition-colors duration-300 font-medium"
        >
          Scopri il Menu
        </a>
        <a
          href="#contact"
          className="uppercase tracking-[0.2em] text-sm border border-cream/30 text-cream px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300"
        >
          Prenota un Tavolo
        </a>
      </div>
    </div>
  </section>
);

export default Hero;