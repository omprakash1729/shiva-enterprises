import { useState } from "react";
import { toast } from "sonner";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Reveal } from "./Reveal";
const WHATSAPP_NUMBER = "919036657577";
const INTERESTS = [
  { value: "nets", label: "Bird Protection Nets" },
  { value: "grills", label: "Invisible Grills" },
  { value: "terrace", label: "Terrace Safety Nets" },
  { value: "turf", label: "Balcony Artificial Turf" },
  { value: "both", label: "Both" },
];
const inputClass =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";
export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    productInterest: "nets",
    balconyType: "",
    message: "",
  });
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    if (name.length < 2) {
      toast.error("Please enter your name (at least 2 characters).");
      return;
    }
    if (!/^[+\d][\d\s-]{6,18}$/.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (email && !e.currentTarget.elements.namedItem("email").checkValidity()) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const service = INTERESTS.find((interest) => interest.value === form.productInterest)?.label;
      const message = [
        "Hello, I would like to request a free quote.",
        "",
        "Here are my details:",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `Service Required: ${service}`,
        `Location: ${form.city.trim() || "Not provided"}`,
        `Balcony Type: ${form.balconyType.trim() || "Not provided"}`,
        `Project Details: ${form.message.trim() || "Not provided"}`,
        "",
        "Please contact me with further details and a quotation.",
        "",
        "Thank you.",
      ].join("\n");
      const whatsappWindow = window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank",
      );
      if (!whatsappWindow) {
        toast.error("Please allow pop-ups to open WhatsApp, then try again.");
        return;
      }
      whatsappWindow.opener = null;
      toast.message("WhatsApp opened. Review the message and press Send to complete your enquiry.");
    } catch {
      toast.error("Unable to open WhatsApp. Please try again or call us on +91 90366 57577.");
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <section id="contact" className="scroll-mt-16 bg-night py-24 text-night-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: pitch + direct channels */}
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-night-foreground/50">Get a Free Quote</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Tell us about
              <br />
              your balcony.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-night-foreground/70">
              Share a few details and we'll recommend the right system — a net, a grill, or both —
              with a straightforward quote. Measurements happen on site, and advice is free.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:+919036657577"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-primary/60 hover:bg-white/10"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-night-foreground/50">
                    Call us
                  </span>
                  <span className="block font-display text-lg font-bold">+91 90366 57577</span>
                </span>
              </a>
              <a
                href="https://wa.me/919036657577"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-primary/60 hover:bg-white/10"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-night-foreground/50">
                    WhatsApp
                  </span>
                  <span className="block font-display text-lg font-bold">Message us anytime</span>
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-night-foreground/80" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-night-foreground/50">
                    Serving
                  </span>
                  <span className="block font-display text-lg font-bold">
                    Chennai & nearby areas
                  </span>
                  <span className="mt-0.5 block text-sm text-night-foreground/60">
                    35A, Sivan Koil Street, Chennai 600024, Tamil Nadu
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: form card */}
          <Reveal delay={140} className="lg:col-span-7">
            <div className="rounded-3xl bg-card p-6 text-card-foreground shadow-2xl shadow-primary/10 sm:p-10">
              <form onSubmit={onSubmit} noValidate>
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  Request a free quote
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      Name *
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-phone"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      Phone *
                    </label>
                    <input
                      id="lead-phone"
                      name="phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 ..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-city"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      City / Area
                    </label>
                    <input
                      id="lead-city"
                      name="city"
                      value={form.city}
                      onChange={set("city")}
                      placeholder="e.g. Velachery, Chennai"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-interest"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      I'm interested in *
                    </label>
                    <select
                      id="lead-interest"
                      name="productInterest"
                      required
                      value={form.productInterest}
                      onChange={set("productInterest")}
                      className={inputClass}
                    >
                      {INTERESTS.map((i) => (
                        <option key={i.value} value={i.value}>
                          {i.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="lead-balcony"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      Balcony type
                    </label>
                    <input
                      id="lead-balcony"
                      name="balconyType"
                      value={form.balconyType}
                      onChange={set("balconyType")}
                      placeholder="e.g. Apartment balcony"
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="lead-message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="lead-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Rough dimensions, floor, number of balconies — anything that helps."
                      className={inputClass}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_16px_40px_-14px_var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending…" : "Send My Request"}
                  <Send className="h-4 w-4" />
                </button>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  WhatsApp will open with your enquiry ready to review. It will only be sent after
                  you press Send in WhatsApp.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
