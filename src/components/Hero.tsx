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
        Colazioni & Pranzi
      </p>
      <h1 className="mb-8 animate-fade-in-up opacity-0 delay-200">
        <img 
          src="src/img/shock.png" 
          alt="Shock Bar Logo" 
          className="h-auto w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto"
        />
      </h1>
      <p className="text-gold uppercase tracking-[0.4em] text-sm md:text-base mb-6 animate-fade-in opacity-0">
        Cocktail Bar & Aperitivi
      </p>

      <p className="text-cream/60 text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-400 font-light">
        Dove l'arte incontra il gusto tra cocktail ricercati e aperitivi d'autore
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