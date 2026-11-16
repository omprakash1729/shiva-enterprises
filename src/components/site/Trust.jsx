import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
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
                href="https://wa.me/919036657577"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <div className="space-y-6 border-l border-white/10 pl-8">
              {[
                {
                  t: "Real advice, not a sales script",
                  d: "We recommend the system your balcony actually needs — sometimes that's a net, sometimes a grill, sometimes both.",
                },
                {
                  t: "Installed by our own team",
                  d: "The people who measure your balcony are the people who fit it.",
                },
                {
                  t: "Chennai based",
                  d: "Serving apartments, individual houses and commercial properties across the city.",
                },
              ].map((p) => (
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
      </div>
    </section>
  );
}
