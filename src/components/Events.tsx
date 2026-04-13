import React from "react";
import { useInView } from "../hooks/useInView";

const events = [
  {
    day: "GIO",
    title: "Jazz & Cocktails",
    time: "21:00 — 01:00",
    description: "Live jazz session con i migliori musicisti locali. Cocktail speciali a tema.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
  },
  {
    day: "VEN",
    title: "DJ Set — House Night",
    time: "22:00 — 02:00",
    description: "Deep house e nu-disco selezionati dai migliori DJ della scena underground.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  },
  {
    day: "SAB",
    title: "Mixology Experience",
    time: "19:00 — 21:00",
    description: "Workshop interattivo: impara a creare i nostri cocktail signature con i nostri bartender.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80",
  },
];

const Events: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="events" className="py-24 md:py-32 bg-dark">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Cosa Succede</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
            Eventi<span className="text-gold">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <div
              key={e.title}
              className={`group relative overflow-hidden bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-500 ${
                isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gold text-dark text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                  {e.day}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gold/70 text-sm mb-2">{e.time}</p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-gold transition-colors duration-300">{e.title}</h3>
                <p className="text-cream/40 text-sm leading-relaxed">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;