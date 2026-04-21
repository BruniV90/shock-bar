import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const Contact: React.FC = () => {
  const { ref, isVisible } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const script = document.createElement("script");
      script.src = "/sgcaptcha/solver.js";
      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load captcha solver"));
        document.head.appendChild(script);
      });

      const pow = new (window as any).sgpowcaptcha.PoWSolver();
      const challengeRes = await fetch("/sgcaptcha/challenge");
      const challenge = await challengeRes.text();
      const solution = await pow.start(challenge);

      const fd = new FormData();
      fd.append("message", `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      fd.append("sol", solution);

      const res = await fetch("/sgcaptcha/contact", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Contact request failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

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
    },
    {
      name: "Mail",
      url: "mailto:shock.pub1@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Intestazione */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Vieni a Trovarci</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">Contatti</h2>
        </div>

        {/* PARTE ALTA: Mappa e Indirizzo (Sx) | Form (Dx) */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Colonna Sinistra: Indirizzo + Mappa */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up opacity-100 delay-200" : "opacity-0"}`}>
            <a href="https://maps.app.goo.gl/YourActualMapLink" target="_blank" rel="noopener noreferrer" className="block group">
              <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3 group-hover:text-gold-light transition-colors">Indirizzo</p>
              <p className="font-serif text-2xl text-cream group-hover:text-white transition-colors">Via Gianfrancesco Pagnini, 1/3R</p>
              <p className="text-cream/50 italic">50134 - Firenze</p>
            </a>
            
            <div className="w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden border border-dark-border/50 bg-dark relative group shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.4343163273183!2d11.258832676755497!3d43.7846152441113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5404f2963665%3A0xb36b3017a419266b!2sVia%20Gianfrancesco%20Pagnini%2C%201%2F3r%2C%2050134%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Shock Bar"
                className="grayscale opacity-60 contrast-[1.1] transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          </div>

          {/* Colonna Destra: Form */}
          <div className={`w-full ${isVisible ? "animate-fade-in-up opacity-100 delay-400" : "opacity-0"}`}>
            <div className="bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
              <p className="text-gold uppercase tracking-[0.2em] text-[10px] mb-8">Inviaci un messaggio</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Nome"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-dark-border focus:border-gold text-cream py-3 outline-none transition-all text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-dark-border focus:border-gold text-cream py-3 outline-none transition-all text-sm"
                />
                <textarea
                  placeholder="Il tuo messaggio"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-dark-border focus:border-gold text-cream py-3 outline-none transition-all text-sm resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gold text-dark py-4 uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 rounded-lg disabled:opacity-50"
                >
                  {status === "sending" ? "Invio in corso..." : "Invia Messaggio"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* PARTE BASSA: Orari | Contatti | Social (Tutto su una riga) */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-dark-border/50 ${isVisible ? "animate-fade-in opacity-100 delay-500" : "opacity-0"}`}>
          
          {/* Orari */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gold uppercase tracking-[0.2em] text-[10px] mb-4">Orari di Apertura</p>
            <div className="text-sm text-cream/70 space-y-1">
              <p>Lun-Ven: <span className="text-cream">06:30 - 23:45</span></p>
              <p>Sab-Dom: <span className="text-cream">08:00 - 02:00</span></p>
              <p className="text-[10px] text-cream/30 italic">Mercoledì Chiuso</p>
            </div>
          </div>

          {/* Contatti Rapidi */}
          <div className="flex flex-col items-center">
            <p className="text-gold uppercase tracking-[0.2em] text-[10px] mb-4">Contatti Rapidi</p>
            <div className="text-center space-y-1">
              <a href="tel:+393514929304" className="block text-cream hover:text-gold transition-colors">+39 351 4929304</a>
              <a href="mailto:shock.pub1@gmail.com" className="block text-cream/70 hover:text-gold transition-colors text-sm">shock.pub1@gmail.com</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gold uppercase tracking-[0.2em] text-[10px] mb-4">Seguici</p>
            <div className="flex gap-5">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;