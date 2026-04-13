import React from "react";
import { useInView } from "../hooks/useInView";

const About: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" className="py-24 md:py-32 bg-dark">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className={`relative ${isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"}`}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="\src\img\ig\ig000.jpg"
                alt="Shock Bar interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className={`${isVisible ? "animate-fade-in-up opacity-0 delay-300" : "opacity-0"}`}>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Chi siamo</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
              Cerchi un locale unico nel suo genere?
            </h2>
            <br />
            <div className="space-y-6 text-cream/60 leading-relaxed">
              <p>
                Pronti ad aprire gli occhi e chiudere la noia? Shock Bar è l'esperienza che non ti aspetti. Tra colori accesi, arredi eclettici e drink stravaganti, ogni dettaglio è pensato per rompere la monotonia e accendere i sensi. Ispirato ai locali underground di New York, questo spazio è un mix di arte, musica e sapori intensi. Se ami l’imprevedibile e sei in cerca di emozioni vere, Shock è il posto giusto per te.
              </p>
              <p>
                Colazione, pranzo, aperitivo o serata tra amici: qui ogni momento è un piccolo evento. Siete pronti a farvi stupire?
            </p>
            </div>
            
{/*             <div className="mt-10 flex gap-12">
              <div>
                <p className="font-serif text-4xl text-gold">50+</p>
                <p className="text-sm text-cream/40 uppercase tracking-wider mt-1">Cocktail Signature</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-gold">5</p>
                <p className="text-sm text-cream/40 uppercase tracking-wider mt-1">Anni di Esperienza</p>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;