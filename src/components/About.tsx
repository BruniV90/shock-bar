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
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80"
                alt="Bartender crafting cocktails"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className={`${isVisible ? "animate-fade-in-up opacity-0 delay-300" : "opacity-0"}`}>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">La Nostra Storia</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
              Un'esperienza sensoriale<span className="text-gold">.</span>
            </h2>
            <div className="space-y-6 text-cream/60 leading-relaxed">
              <p>
                Shock Bar nasce dalla passione per la mixology d'avanguardia e il desiderio di creare uno spazio dove ogni dettaglio racconta una storia. Ogni cocktail è un'opera d'arte, pensata per sorprendere e deliziare.
              </p>
              <p>
                I nostri bartender, veri artigiani del gusto, selezionano ingredienti di prima qualità per creare combinazioni uniche che sfidano le convenzioni, in un ambiente che fonde eleganza contemporanea e calore italiano.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-serif text-4xl text-gold">50+</p>
                <p className="text-sm text-cream/40 uppercase tracking-wider mt-1">Cocktail Signature</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-gold">5</p>
                <p className="text-sm text-cream/40 uppercase tracking-wider mt-1">Anni di Esperienza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;