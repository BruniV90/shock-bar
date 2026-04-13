import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const images = [
  { src: "src/img/ig/ig001.jpg", alt: "Immagine 1" },  
  { src: "/src/img/ig/ig002.jpg", alt: "Immagine 2" },
  { src: "/src/img/ig/ig003.jpg", alt: "Immagine 3" },
  { src: "/src/img/ig/ig004.jpg", alt: "Immagine 4" },
  { src: "/src/img/ig/ig005.jpg", alt: "Immagine 5" },
  { src: "/src/img/ig/ig006.jpg", alt: "Immagine 6" },
];

const Gallery: React.FC = () => {
  const { ref, isVisible } = useInView();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-dark-light">
        <div ref={ref} className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"}`}>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Il Nostro Mondo</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
              Gallery<span className="text-gold">.</span>
          </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`group relative aspect-square overflow-hidden cursor-pointer ${
                  isVisible ? "animate-scale-in opacity-0" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-500 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream/60 hover:text-gold transition-colors"
            aria-label="Chiudi"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={images[lightbox].src.replace("w=600", "w=1200")}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute left-4 md:left-8 text-cream/40 hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            aria-label="Precedente"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-4 md:right-8 text-cream/40 hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            aria-label="Successiva"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;