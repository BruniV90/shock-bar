import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const events = [
  {
    day: "GIO",
    title: "Studentì allo Shock",
    time: "16:00 - 00:00",
    description: "Tutti i giovedì, offerte che uniscono.",
    img: "img/events/giovedi.jpg",
  },
  /*  {
     day: "VEN",
     title: "DJ Set — House Night",
     time: "22:00 — 02:00",
     description: "Deep house e nu-disco selezionati dai migliori DJ della scena underground.",
     img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
   }, */
  {
    day: "SAB",
    title: "KaraokeNight",
    time: "19:00 - 00:00",
    description: "Il Karaoke a Pipa di Cocco.",
    img: "img/events/karaoke.jpeg",
  },
];

const Events: React.FC = () => {
  const { ref, isVisible } = useInView();
  // Stato per memorizzare l'URL dell'immagine selezionata (o null se nessuna è selezionata)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="events" className="py-24 md:py-32 bg-dark">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Cosa Succede</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
            Eventi
          </h2>
        </div>

        <div className={`flex flex-wrap justify-center gap-6 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {events.map((e, i) => (
            <div
              key={e.title}
              onClick={() => setSelectedImage(e.img)}
              className={`group relative ove>rflow-hidden bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-500 cursor-pointer 
        w-full md:w-[calc(45%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px] ${isVisible ? "animate-fade-in-up" : ""
                }`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* ... tutto il resto del contenuto della card rimane uguale ... */}
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
      <br />
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-600">

        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Organizziamo festa di laurea, compleanni e tanto altro</p>

      </div>


      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-600">

        <a
          href="#contact"
          className="uppercase tracking-[0.2em] text-sm bg-gold text-dark px-10 py-4 hover:bg-gold-light transition-colors duration-300 font-medium"
        >
          Contattaci
        </a>
      </div>
      {/* --- LIGHTBOX (Solo foto a tutto schermo) --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedImage(null)} // Chiude al click sullo sfondo
        >
          {/* Pulsante di chiusura (X) */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-cream/70 hover:text-gold z-[110] text-5xl font-light"
          >
            &times;
          </button>

          {/* L'immagine ingrandita */}
          <img
            src={selectedImage}
            alt="Evento ingrandito"
            className="max-w-full max-h-full object-contain shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()} // Evita la chiusura se clicchi sulla foto
          />
        </div>
      )}
    </section>
  );
};

export default Events;