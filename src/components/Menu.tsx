import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const categories = ["Signature", "Classici", "Spirits", "Analcolici", "Food"] as const;
type Category = typeof categories[number];

interface Drink {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const drinks: Record<Category, Drink[]> = {
  Signature: [
    { name: "Bramble", description: "Gin, succo di lime, liquore alle more", price: "€9", tag: "Best Seller" },
    { name: "Blue Lady", description: "Gin, Blue curacao, succo di lime", price: "€7" },
    { name: "White Lady", description: "Gin, Triple sec, succo di limone", price: "€7" },
    { name: "Tequila Sunrise", description: "Tequila, succo d’arancia, granatina", price: "€9", tag: "Nuovo" },
    { name: "Gin Basil Nash", description: "Gin, succo di limone, sciroppo di zucchero, basilico", price: "€8" },
    { name: "Passionfruit Daiquiri", description: "Rum bianco, succo di lime, sciroppo di zucchero, passion fruit", price: "€8" },
  ],
  Classici: [
    { name: "Old Fashioned", description: "Bourbon, zucchero di canna, Angostura, scorza d'arancia", price: "€12" },
    { name: "Negroni", description: "Gin, Campari, Vermouth Rosso", price: "€11" },
    { name: "Espresso Martini", description: "Vodka, Kahlúa, espresso fresco, crema di caffè", price: "€12" },
    { name: "Margarita", description: "Tequila reposado, Cointreau, lime fresco, sale", price: "€12" },
    { name: "Manhattan", description: "Rye whiskey, vermouth rosso, Angostura", price: "€13" },
    { name: "Daiquiri", description: "Rum bianco, lime, sciroppo di zucchero", price: "€11" },
  ],
  Spirits: [
    { name: "Whisky Selection", description: "Selezione di single malt e blended premium", price: "da €10" },
    { name: "Gin Premium", description: "Botaniche selezionate, servito con tonica artigianale", price: "da €12" },
    { name: "Rum Collection", description: "Aged rum dal mondo, neat o on the rocks", price: "da €11" },
    { name: "Tequila & Mezcal", description: "Selezione artigianale messicana", price: "da €12" },
  ],
  Analcolici: [
    { name: "Virgin Mojito", description: "Lime, menta, zucchero di canna, soda", price: "€8" },
    { name: "Sunset Cooler", description: "Passion fruit, mango, lime, ginger beer", price: "€9" },
    { name: "Garden Tonic", description: "Cetriolo, basilico, elderflower, tonica", price: "€8" },
    { name: "Berry Smash", description: "Frutti di bosco, limone, sciroppo di vaniglia, soda", price: "€9" },
  ],
  Food: [
    { name: "Snack & Tapas", description: "Selezione di stuzzichini gourmet per accompagnare i tuoi drink", price: "da €5" },
    { name: "Piatto di Formaggi", description: "Formaggi artigianali italiani e internazionali, confetture e miele", price: "€12" },
    { name: "Tagliere di Salumi", description: "Salumi di alta qualità, accompagnati da pane artigianale", price: "€14" },
    { name: "Bruschette Gourmet", description: "Pane croccante con topping creativi e stagionali", price: "€7" },
  ],
};

const Menu: React.FC = () => {
  const [active, setActive] = useState<Category>("Signature");
  const { ref, isVisible } = useInView();

  return (
    <section id="menu" className="py-24 md:py-32 bg-dark-light">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Le nostre proposte</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
            Il Menu<span className="text-gold">.</span>
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
              <p className="font-serif text-xl text-gold ml-6 mt-0.5">{d.price}</p>
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