import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    t: "Consultation & Survey",
    d: "Same-day on-site inspection across Chennai. We assess your balcony structure, railing height, and family safety needs.",
  },
  {
    n: "02",
    t: "Laser Measurement",
    d: "Precision laser measurement ensures exact track length, bolt spacing, and tension specifications before fabrication.",
  },
  {
    n: "03",
    t: "Certified Installation",
    d: "Our in-house technicians install heavy-duty aluminium tracks, anchor SS 316 cables, and lock uniform high tension.",
  },
  {
    n: "04",
    t: "Load Testing & Warranty",
    d: "We conduct physical tensile load testing (220+ kg load capacity) and issue an official 5-year written warranty certificate.",
  },
];

export function Process() {
  return (
    <section id="installation" className="scroll-mt-16 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Installation Process</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            From consultation to protection.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="border-t-2 border-foreground/80 pt-6">
                <p className="font-display text-5xl font-bold tracking-tight text-foreground/15 lg:text-6xl">
                  {s.n}
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-foreground">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/installation"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-foreground shadow-xs transition-colors hover:border-primary hover:text-primary"
          >
            Explore Complete Installation Standards & Steps <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
