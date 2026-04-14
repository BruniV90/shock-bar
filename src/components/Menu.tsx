import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const categories = ["Cocktail", "Special", "Shots", "Analcolici", "Food"] as const;
type Category = typeof categories[number];

interface Drink {
  name: string;
  description: string;
  tag?: string;
}

const drinks: Record<Category, Drink[]> = {
  Cocktail: [
//    { name: "Spritz", description: "Prosecco, Aperol/Campari", tag: "Best Seller" },
    { name: "Spritz", description: "Prosecco, Aperol/Campari" },
    { name: "Mojito", description: "Rum bianco, lime, selz, zucchero, menta" },
    { name: "Negroni", description: "Bitter, vermouth, gin" },
    { name: "Gin tonic", description: "Gin, tonica" },
    { name: "Moscow mule", description: "Vodka, ginger beer, succo di lime" },
    { name: "Margarita", description: "Tequila, Triple sec, succo di lime" },
    { name: "Pina colada", description: "Rum, crema di cocco, succo di ananas, succo di lime" },
  ],
  Special: [
    { name: "Saserac", description: "Cognac/Rye whiskey, assenzio, zucchero, orange bitter" },
    { name: "Old fashioned", description: "Whisky, angostura, zucchero" },
    { name: "Bramble", description: "Gin, succo di lime, liquore alle more" },
    { name: "American Shock", description: "Vermouth, amaro, soda al pompelmo" },
  ],
  Shots: [
    { name: "Amari DU-IT", description: "Selezione della Distilleria Urbana" },
    { name: "Amaro Fabbrizii", description: "L'amaro ritrovato" },
    { name: "Vodka al caramello", description: "Un abbinamento particolare, quanto azzeccato" },
    { name: "Tequila", description: "Un grande classico" },


  ],
  Analcolici: [
    { name: "Sex off the beach", description: "Succo di pesca, succo di arancia, succo al cranberry", },
    { name: "Gin tonic zero", description: "Gin zero, tonic", },
    { name: "Moscow mule zero", description: "Ginger beer, menta, succo lime", },
    { name: "Virgin mojito", description: "Lime, zucchero, menta, tonica", },
  ],
  Food: [
    { name: "Taglieri", description: "Selezione di affettati e formaggi" },
    { name: "Pinse", description: "Per ogni gusto" },
    { name: "Schiacciate", description: "Da farcire con prodotti sempre freschi" },

  ],
};

const Menu: React.FC = () => {
  const [active, setActive] = useState<Category>("Special");
  const { ref, isVisible } = useInView();

  return (
    <section id="menu" className="py-24 md:py-32 bg-dark-light">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Le nostre proposte</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
            Il Menu
          </h2>
        </div>

        <div className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-14 ${isVisible ? "animate-fade-in-up opacity-0 delay-200" : "opacity-0"}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 border ${
                active === cat
                  ? "bg-gold text-dark border-gold"
                  : "border-dark-border text-cream/50 hover:border-gold/50 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {drinks[active].map((d, i) => (
            <div
              key={d.name}
              className={`group flex justify-between items-start py-5 border-b border-dark-border hover:border-gold/30 transition-colors duration-300 ${
                isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="font-serif text-xl text-cream group-hover:text-gold transition-colors duration-300">
                    {d.name}
                  </h3>
                  {d.tag && (
                    <span className="text-[10px] uppercase tracking-wider bg-gold/15 text-gold px-2 py-0.5 rounded-full">
                      {d.tag}
                    </span>
                  )}
                </div>
                <p className="text-cream/40 text-sm leading-relaxed">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
<div className={`text-center mt-12 mb-16 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>

  <a 
    href="https://irp.cdn-website.com/6662e3ce/files/uploaded/MENU-+COCKTAILS.Finale.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group inline-block"
  >
    <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 hover:text-cream transition-colors duration-300 cursor-pointer">
      e tantissimo altro <br/>Scarica il menu completo
    </p>
    {/* Opzionale: una riga decorativa sotto il testo */}
    <div className="h-[1px] w-full bg-gold/30 group-hover:bg-gold transition-colors duration-300" />
  </a>
</div>
    </section>
  );
};

export default Menu;