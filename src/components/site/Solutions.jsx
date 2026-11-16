import netsImg from "@/assets/nets-showcase.webp";
import grillsImg from "@/assets/grills-showcase.webp";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
const PRODUCTS = [
  {
    index: "01",
    name: "Invisible Bird Protection Nets",
    headline: "Protection without changing your view.",
    description:
      "Keep pigeons and other unwanted birds away from your balcony with transparent bird protection netting designed to maintain the openness of your space.",
    benefits: [
      "Transparent appearance",
      "Helps prevent bird entry",
      "Customised balcony coverage",
      "Suitable for apartments and residential buildings",
      "Designed to preserve natural light and views",
    ],
    cta: "Explore Bird Protection Nets",
    href: "#nets",
    image: netsImg,
    alt: "Apartment balcony fitted with nearly invisible transparent bird protection netting",
  },
  {
    index: "02",
    name: "Invisible Stainless Steel Grills",
    headline: "Strength you can barely see.",
    description:
      "Experience a modern alternative to conventional balcony grills with precision-installed stainless steel wire systems designed to provide a minimal visual profile.",
    benefits: [
      "Marine-grade SS 316 material",
      "Nylon-coated stainless steel wires",
      "Minimal visual obstruction",
      "Vertical and horizontal installation options",
      "Customised installation",
      "Durable construction",
    ],
    cta: "Explore Invisible Grills",
    href: "#grills",
    image: grillsImg,
    alt: "Modern balcony with vertical stainless steel invisible grill wires",
  },
];
export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Our Solutions</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Two ways to protect a balcony. Neither one you'll notice.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
          {PRODUCTS.map((p, i) => (
            <article key={p.index} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className={i % 2 === 1 ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
                <div className="group relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 font-display text-5xl font-bold text-white/90">
                    {p.index}
                  </span>
                </div>
              </Reveal>
              <Reveal
                delay={120}
                className={i % 2 === 1 ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}
              >
                <p className="eyebrow text-primary">{p.name}</p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                  {p.headline}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-7 space-y-0">
                  {p.benefits.map((b) => (
                    <li
                      key={b}
                      className="hairline flex items-center gap-3 py-2.5 text-sm text-foreground/80"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
