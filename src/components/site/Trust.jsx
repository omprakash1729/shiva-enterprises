import { Phone, MessageCircle, ShieldCheck, Star, Quote, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const TRUST_POINTS = [
  {
    t: "Real advice, not a sales script",
    d: "We recommend the system your balcony actually needs — whether that's an invisible net, SS 316 grill, terrace enclosure, or artificial turf.",
  },
  {
    t: "Installed by our own team",
    d: "Experienced in-house technicians measure, fit, tension, and inspect every installation personally.",
  },
  {
    t: "Chennai & Tamil Nadu coverage",
    d: "Serving apartments, high-rises, gated communities, individual villas, and commercial properties across Chennai.",
  },
];

const METRICS = [
  { value: "2,500+", label: "Balconies Protected in Chennai" },
  { value: "400 kg", label: "Tested Tensile Load Capacity" },
  { value: "SS 316", label: "Marine Grade Rust-Proof Steel" },
  { value: "4.9 ★", label: "Average Customer Rating" },
];

const REVIEWS = [
  {
    name: "Ramesh & Priya",
    location: "DLF Garden City, OMR, Chennai",
    service: "Invisible Bird Protection Nets",
    rating: 5,
    text: "We were facing severe pigeon nuisance on our 9th-floor balcony for months. SHIVA ENTERPRISES visited the same day for measurement and completed the installation neatly. The net is practically invisible from our living room, allows full breeze, and our balcony is completely clean now!",
  },
  {
    name: "Karthik Subramanian",
    location: "Prestige Bella Vista, Porur, Chennai",
    service: "SS 316 Balcony Invisible Grills",
    rating: 5,
    text: "With a 3-year-old at home, balcony safety was our top priority. The vertical invisible grills installed by SHIVA ENTERPRISES are exceptionally sturdy, look sleek, and preserve the skyline view completely.",
  },
  {
    name: "Dr. Meenakshi Sundaram",
    location: "Anna Nagar West, Chennai",
    service: "Invisible Grills & Balcony Artificial Turf",
    rating: 5,
    text: "From consultation to execution, their professionalism stood out. Honest pricing with zero hidden charges. They installed invisible grills and laid out lush green balcony turf that completely transformed our outdoor sit-out.",
  },
];

export function Trust() {
  return (
    <section className="bg-night py-24 text-night-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-night-foreground/50">Trust & Service</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Good protection starts with the right installation.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-night-foreground/70">
              From the first measurement to the final inspection, the same care applies to every
              balcony: honest advice on whether a net or a grill suits your space, materials
              specified before work begins, and an installation finished to be lived with — not just
              looked at once.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+919036657577"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" /> Call +91 90366 57577
              </a>
              <a
                href="https://wa.me/919036657577?text=Hi%2C%20I%20would%20like%20to%20consult%20with%20Shiva%20Enterprises%20regarding%20balcony%20protection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <div className="space-y-6 border-l border-white/10 pl-8">
              {TRUST_POINTS.map((p) => (
                <div key={p.t} className="flex gap-4">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary-foreground/80" />
                  <div>
                    <p className="font-display font-semibold">{p.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-night-foreground/60">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Metrics Row */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-y border-white/10 py-10 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 60} className="text-center lg:text-left">
              <p className="font-display text-3xl font-bold tracking-tight text-white lg:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-night-foreground/60">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Verified Customer Reviews */}
        <div className="mt-20">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-night-foreground/50">Customer Experiences</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What Homeowners in Chennai Say
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-colors hover:border-white/20">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400">
                        {[...Array(r.rating)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="h-5 w-5 text-white/20" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-night-foreground/80">
                      "{r.text}"
                    </p>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-display text-sm font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-night-foreground/50">{r.location}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[0.7rem] font-medium text-primary">
                      <CheckCircle2 className="h-3 w-3" /> {r.service}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
