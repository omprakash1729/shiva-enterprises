import grillsVerticalImg from "@/assets/projects/vertical-grill-11.webp";
import grillsHorizontalImg from "@/assets/projects/horizontal-grill.webp";
import hookImg from "@/assets/projects/horizontal-grill-2.webp";
import { ArrowRight, BookOpen, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
const SPECS = [
  ["Material", "316 Marine-Grade Stainless Steel"],
  ["Wire Diameter", "2.5 mm"],
  ["Cable Distance", "2 Inches"],
  ["Impact Load Resistance", "Up to 400 kg*"],
  ["Installation", "Vertical or Horizontal"],
  ["Finish", "Nylon Coated"],
  ["Water Absorption", "Zero"],
  ["Moisture Content", "Zero"],
  ["Durability", "Up to 20 Years†"],
];
const HIGHLIGHTS = [
  { value: "316", label: "Marine-Grade Stainless Steel" },
  { value: "2.5 mm", label: "Wire Diameter" },
  { value: "2 Inches", label: "Cable Distance" },
  { value: "20 Years", label: "Specified Durability" },
];
const COMPONENTS = [
  { n: "01", t: "Aluminium Frames", d: "Used as mounting frames for the installation system." },
  {
    n: "02",
    t: "3-Inch Screws",
    d: "Used for securing the mounting components to suitable supporting structures.",
  },
  {
    n: "03",
    t: "SS 316 Wires",
    d: "Marine-grade stainless steel wires forming the primary grill system.",
  },
  { n: "04", t: "Steel Hooks", d: "Connection components used to secure the wire system." },
  {
    n: "05",
    t: "Steel Cross Clips",
    d: "Used for the wire connection and crossing arrangement.",
  },
];
export function GrillsSection() {
  return (
    <section id="grills" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-muted-foreground">Invisible Stainless Steel Grills</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
              Engineered for strength.
              <br />
              <span className="text-primary">Designed to disappear.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:pt-14">
            <p className="leading-relaxed text-muted-foreground">
              Our invisible grill system combines marine-grade SS 316 stainless steel wires with
              precision-fitted installation components to provide a minimal and sophisticated
              balcony protection solution.
            </p>
          </Reveal>
        </div>

        {/* Highlighted specifications */}
        <div className="mt-20 grid grid-cols-2 gap-y-12 border-y border-border lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal
              key={h.label}
              delay={i * 80}
              className={
                "px-2 py-10 lg:px-8 " +
                (i > 0 ? "border-l border-border max-lg:[&:nth-child(3)]:border-l-0" : "")
              }
            >
              <p className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
                {h.value}
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {h.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Full specification table */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-muted-foreground">Technical Specifications</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              * Load rating depends on the tested installation configuration and supporting
              documentation. † Presented as expected durability, not a guaranteed warranty.
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            {SPECS.map(([label, value], i) => (
              <Reveal key={label} delay={i * 40}>
                <div className="hairline grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-4">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="font-display text-right text-base font-semibold text-foreground">
                    {value}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Installation components */}
        <div className="mt-28 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Installation Components</p>
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
                Every connection matters.
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                Precision-selected components work together to create a clean, secure, and
                professionally finished installation.
              </p>
            </Reveal>
            <div className="mt-10">
              {COMPONENTS.map((c, i) => (
                <Reveal key={c.n} delay={i * 60}>
                  <div className="hairline grid grid-cols-[auto_minmax(0,1fr)] gap-5 py-4">
                    <span className="font-display text-sm font-bold text-primary">{c.n}</span>
                    <div>
                      <p className="font-display font-semibold text-foreground">{c.t}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={150} className="lg:col-span-6">
            <img
              src={hookImg}
              alt="Close-up of stainless steel fasteners and nylon-coated SS 316 wire installation by SHIVA ENTERPRISES"
              width={622}
              height={624}
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover shadow-sm"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Marine-grade SS 316 wire cable seated securely in heavy-duty mounting fasteners.
            </p>
          </Reveal>
        </div>

        {/* Orientation */}
        <div className="mt-28">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-muted-foreground">Installation Orientation</p>
            <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Vertical or horizontal. Chosen for your space.
            </h3>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                img: grillsVerticalImg,
                t: "Vertical Installation",
                d: "A clean vertical wire arrangement optimal for balconies and child safety.",
                alt: "Balcony fitted with vertical stainless steel invisible grills by SHIVA ENTERPRISES",
              },
              {
                img: grillsHorizontalImg,
                t: "Horizontal Installation",
                d: "A sleek horizontal wire arrangement suitable for wide windows and parapet walls.",
                alt: "Apartment balcony with horizontal stainless steel invisible safety grills",
              },
            ].map((o, i) => (
              <Reveal key={o.t} delay={i * 100}>
                <figure className="group">
                  <div className="overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={o.img}
                      alt={o.alt}
                      width={1600}
                      height={2132}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <span className="font-display text-lg font-semibold text-foreground">
                      {o.t}
                    </span>
                    <span className="text-sm text-muted-foreground">{o.d}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href="#installation"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_16px_40px_-16px_var(--color-primary)]"
          >
            Explore Invisible Grill Installation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/services/invisible-grills"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <BookOpen className="h-4 w-4" /> View Technical Catalogue
          </Link>
          <a
            href="https://wa.me/919036657577?text=Hi%2C%20I%20would%20like%20a%20free%20quote%20for%20balcony%20invisible%20grills."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:border-[#25D366] hover:bg-[#25D366]/5 hover:text-[#128C7E]"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> Chat on WhatsApp
          </a>
          <a
            href="tel:+919036657577"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" /> Call +91 90366 57577
          </a>
        </Reveal>
      </div>
    </section>
  );
}
