import grillsVerticalImg from "@/assets/grills-showcase.webp";
import grillsHorizontalImg from "@/assets/grills-horizontal.webp";
import hookImg from "@/assets/wire-hook-closeup.webp";
import { ArrowRight } from "lucide-react";
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
              alt="Close-up of a stainless steel hook securing a nylon-coated SS 316 wire to an aluminium rail"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              SS 316 wire seated in a steel hook on the mounting rail.
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
                d: "A clean vertical wire arrangement.",
                alt: "Balcony with vertical stainless steel invisible grill wires",
              },
              {
                img: grillsHorizontalImg,
                t: "Horizontal Installation",
                d: "A clean horizontal wire arrangement.",
                alt: "Balcony with horizontal stainless steel invisible grill wires",
              },
            ].map((o, i) => (
              <Reveal key={o.t} delay={i * 100}>
                <figure className="group">
                  <div className="overflow-hidden">
                    <img
                      src={o.img}
                      alt={o.alt}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4">
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

        <Reveal className="mt-16">
          <a
            href="#installation"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-primary"
          >
            Explore Invisible Grill Installation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
