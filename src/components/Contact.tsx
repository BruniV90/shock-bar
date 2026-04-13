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

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-0" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Vieni a Trovarci</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
            Contatti 
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className={`space-y-10 ${isVisible ? "animate-fade-in-up opacity-0 delay-200" : "opacity-0"}`}>
            <div>
              <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">Indirizzo</p>
              <p className="font-serif text-xl text-cream">Via Gianfrancesco Pagnini, 1/3R</p>
              <p className="text-cream/50">50134 - Firenze</p>
            </div>
            <div>
              <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">Orari</p>
              <div className="space-y-1 text-cream/70">
                <p>Lun - Mar: <span className="text-cream">06:30 - 23:45</span></p>
                <p className="text-cream/40">Mercoledì chiuso</p>
                <p>Gio - Ven: <span className="text-cream">06:30 - 23:45</span></p>
                <p>Sab - Dom: <span className="text-cream">08:00 - 02:00</span></p>
                
              </div>
            </div>
            <div>
              <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">Contatti</p>
              <p className="text-cream/70">
                Tel:{" "}
                <a 
                  href="tel:+393514929304" 
                  className="text-cream hover:text-gold transition-colors duration-300"
                >
                  +39 351 4929304
                </a>
              </p>              <p className="text-cream/70">
                Email:{" "}
                <a 
                  href="mailto:shock.pub1@gmail.com" 
                  className="text-cream hover:text-gold transition-colors duration-300"
                >
                  shock.pub1@gmail.com
                </a>
              </p>            </div>
            <div className="flex gap-5">
              {[
                { name: "Instagram", url: "https://www.instagram.com/shockbar_/" },
                { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61587133599288" },
                { name: "TikTok", url: "https://tiktok.com/@tuousername" },
                { name: "WhatsApp", url: "https://api.whatsapp.com/send/?phone=393514929304&text&type=phone_number&app_absent=0" },
                { name: "Mail", url: "mailto:shock.pub1@gmail.com" }
              ].map((social) => (
                <a  
                  key={social.name}
                  href={social.url}
                  target={social.name === "Mail" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.15em] text-cream/40 hover:text-gold transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up opacity-0 delay-400" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Il tuo nome"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-dark-border focus:border-gold text-cream placeholder:text-cream/25 py-4 outline-none transition-colors duration-300 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="La tua email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-dark-border focus:border-gold text-cream placeholder:text-cream/25 py-4 outline-none transition-colors duration-300 text-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="Il tuo messaggio"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-dark-border focus:border-gold text-cream placeholder:text-cream/25 py-4 outline-none transition-colors duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full uppercase tracking-[0.2em] text-sm bg-gold text-dark py-4 hover:bg-gold-light transition-colors duration-300 font-medium disabled:opacity-50"
              >
                {status === "sending" ? "Invio in corso..." : "Invia Messaggio"}
              </button>
              {status === "sent" && (
                <p className="text-green-400 text-sm text-center animate-fade-in">Messaggio inviato con successo!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center animate-fade-in">Errore nell'invio. Riprova più tardi.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;