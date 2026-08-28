import { useInView } from "../hooks/useInView";

const Contact: React.FC = () => {
  const { ref, isVisible } = useInView();
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/shockbar_/",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="20" height="20" x="2" y="2" fill="#E4405F" rx="5" />
          <path fill="#FFFFFF" d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8.2a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2zm4.8-8.6a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z" />
          <path fill="#FFFFFF" d="M17.3 3H6.7A3.7 3.7 0 0 0 3 6.7v10.6A3.7 3.7 0 0 0 6.7 21h10.6a3.7 3.7 0 0 0 3.7-3.7V6.7A3.7 3.7 0 0 0 17.3 3zm2.2 14.3a2.2 2.2 0 0 1-2.2 2.2H6.7a2.2 2.2 0 0 1-2.2-2.2V6.7a2.2 2.2 0 0 1 2.2-2.2h10.6a2.2 2.2 0 0 1 2.2 2.2z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61587133599288",
      icon: (
        <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@shockbar_?_r=1&_t=ZN-95YaEnbooTe",
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <svg className="w-[18px] h-[18px]" fill="#FE2C55" viewBox="0 0 24 24">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.1-3.34-3.25-3.34-5.55 0-1.05.21-2.13.67-3.09.9-1.92 2.86-3.27 4.98-3.53.3-.04.6-.04.9-.04h.1v4.04c-.65.04-1.31.25-1.85.62-.72.48-1.1 1.3-1.14 2.16-.02 1.02.43 2.06 1.31 2.6.93.58 2.09.68 3.09.28.9-.35 1.54-1.18 1.75-2.11.12-1 .04-2.01.04-3.02V.02z" />
          </svg>
        </div>
      )
    },
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=393514929304&text&type=phone_number&app_absent=0",
      icon: (
        <svg className="w-6 h-6" fill="#25D366" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.099-.47-.15-.667.15-.199.301-.77.971-.944 1.17-.175.199-.349.224-.651.074-.3-.15-1.266-.467-2.413-1.485-.893-.796-1.496-1.778-1.672-2.078-.176-.3-.019-.462.132-.612.135-.133.301-.35.451-.523.15-.174.2-.298.3-.499.099-.198.05-.371-.025-.521-.075-.15-.667-1.609-.914-2.206-.241-.58-.485-.5-.667-.509-.17-.008-.364-.01-.559-.01-.195 0-.514.074-.783.371-.269.299-1.024 1-1.024 2.439 0 1.438 1.048 2.828 1.192 3.027.145.199 2.063 3.149 4.998 4.415.698.301 1.244.481 1.667.615.701.222 1.34.191 1.845.116.564-.084 1.767-.722 2.016-1.417.25-.695.25-1.289.175-1.417-.075-.128-.276-.204-.577-.354zM12.004 20.12a8.104 8.104 0 0 1-4.131-1.127l-.296-.176-3.078.81 1.054-2.993-.193-.307a8.103 8.103 0 0 1-1.243-4.306c0-4.47 3.639-8.108 8.109-8.108 2.166 0 4.202.842 5.734 2.375a8.062 8.062 0 0 1 2.373 5.736c0 4.471-3.638 8.109-8.107 8.109zM12.003 2c-5.518 0-10 4.482-10 10 0 1.912.537 3.699 1.468 5.228L2 22l4.904-1.288A9.957 9.957 0 0 0 12.003 22c5.517 0 10-4.482 10-10s-4.483-10-10-10z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="pt-20 md:pt-28 pb-16 md:pb-20 bg-dark relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Intestazione */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Vieni a Trovarci</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">Contatti</h2>
        </div>

        {/* PARTE CONTATTI: Card Indirizzo + Mappa (Sx) | Orari e Contatti/Social (Dx) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Colonna Sinistra: Card Unica (Indirizzo + Mappa dentro) */}
          <div className={`h-full ${isVisible ? "animate-fade-in-up opacity-100 delay-200" : "opacity-0"}`}>
  <div className="p-8 rounded-2xl bg-dark-card/40 border border-dark-border/50 shadow-lg h-full flex flex-col group">

    {/* Info Indirizzo */}
    <a
      href="https://maps.app.goo.gl/jH7LyhS3XdPk1yEw5"
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-6 shrink-0"
    >
      <p className="text-gold uppercase tracking-[0.2em] text-xs mb-2 group-hover:text-gold-light transition-colors font-medium border-b border-gold/10 pb-3">
        Indirizzo
      </p>
      <p className="font-serif text-2xl md:text-3xl text-cream group-hover:text-gold transition-colors duration-300">
        Via Gianfrancesco Pagnini, 1/3R
      </p>
      <p className="text-cream/50 italic mt-1 text-sm">50134 - Firenze</p>
    </a>

    {/* Mappa racchiusa nella Card (si espande su tutto lo spazio verticale rimanente) */}
    <div className="w-full flex-1 min-h-[250px] rounded-xl overflow-hidden border border-dark-border/40 bg-white relative shadow-inner mt-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.149677501246!2d11.2518246!3d43.7905071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5778923a3c0d%3A0xc5e6e9518d1ea3e0!2sShock%20Bar!5e0!3m2!1sit!2sit!4v1776769058706!5m2!1sit!2sit"
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mappa Shock Bar"
        className="w-full h-full opacity-100 grayscale-[0.05] contrast-[0.9] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-[1]"
      />
    </div>

  </div>
</div>

          {/* Colonna Destra: Orari + Contatti diretti & Social */}
          <div className={`flex flex-col justify-between gap-6 lg:gap-8 ${isVisible ? "animate-fade-in-up opacity-100 delay-200" : "opacity-0"}`}>

            {/* Blocco 1: Orari */}
            <div className="p-8 rounded-2xl bg-dark-card/40 border border-dark-border/50 shadow-lg flex-1 flex flex-col justify-center">
              <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium border-b border-gold/10 pb-3 mb-6">
                Orari di Apertura
              </p>

              <div className="space-y-4">
                {/* Lunedì - Venerdì */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-dark-border/30 pb-3 gap-1">
                  <span className="font-serif text-xl md:text-2xl text-cream">
                    Lunedì - Venerdì
                  </span>
                  <span className="font-serif text-lg md:text-xl text-gold font-medium">
                    06:30 - 23:45
                  </span>
                </div>

                {/* Sabato - Domenica */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-dark-border/30 pb-3 gap-1">
                  <span className="font-serif text-xl md:text-2xl text-cream">
                    Sabato - Domenica
                  </span>
                  <span className="font-serif text-lg md:text-xl text-gold font-medium">
                    08:00 - 02:00
                  </span>
                </div>

                {/* Mercoledì - Testo piccolo e pulito */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm text-cream/70 font-medium">
                    <p className="text-cream/50 italic mt-1 text-sm">Mercoledì chiuso</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Blocco 2: Contatti Diretti & Social */}
<div className="p-8 rounded-2xl bg-dark-card/40 border border-dark-border/50 shadow-lg">
  <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium border-b border-gold/10 pb-3 mb-6">
    Seguici
  </p>

  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
    
    {/* Colonna Sinistra: Telefono ed Email */}
    <div className="flex flex-col gap-3 w-full sm:w-auto flex-1 min-w-0">
      
      {/* Telefono */}
      <a
        href="tel:+393514929304"
        className="flex items-center gap-3.5 p-3.5 rounded-xl bg-dark/60 border border-dark-border/40 text-cream hover:text-gold hover:border-gold/30 transition-all duration-300 group min-w-0 h-[68px]"
      >
        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300 shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <span className="block text-[11px] uppercase tracking-wider text-cream/50 font-medium mb-0.5">Telefono</span>
          <span className="block text-sm font-semibold text-cream group-hover:text-gold transition-colors duration-300 truncate">
            +39 351 492 9304
          </span>
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:shock.pub1@gmail.com"
        className="flex items-center gap-3.5 p-3.5 rounded-xl bg-dark/60 border border-dark-border/40 text-cream hover:text-gold hover:border-gold/30 transition-all duration-300 group min-w-0 h-[68px]"
      >
        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300 shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <span className="block text-[11px] uppercase tracking-wider text-cream/50 font-medium mb-0.5">Email</span>
          <span className="block text-sm font-semibold text-cream group-hover:text-gold transition-colors duration-300 truncate break-all" title="shock.pub1@gmail.com">
            shock.pub1@gmail.com
          </span>
        </div>
      </a>

    </div>

    {/* Divisore: Orizzontale su Mobile / Verticale su Desktop */}
    <div className="w-full h-px sm:w-px sm:h-[148px] bg-dark-border/30 shrink-0" />

    {/* Colonna Destra: 4 icone IN FILA su Mobile, matrice 2x2 su Desktop */}
    <div className="grid grid-cols-4 sm:grid-cols-2 gap-3 shrink-0 sm:h-[148px] sm:w-[148px] w-full justify-items-center">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="w-12 h-12 sm:w-full sm:h-full rounded-xl bg-dark/60 border border-dark-border/40 flex items-center justify-center text-gold hover:bg-gold hover:text-dark hover:scale-105 transition-all duration-300 shadow-md [&>svg]:w-6 [&>svg]:h-6"
        >
          {social.icon}
        </a>
      ))}
    </div>

  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;