import netsImg from "@/assets/projects/pegion-net-10.webp";
import grillsImg from "@/assets/projects/vertical-grill-14.webp";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
const PRODUCTS = [
  {
    index: "01",
    name: "Invisible Bird Protection Nets",
    headline: "Protection without changing your view.",
    description:
      "Keep pigeons, crows, and other birds away from your balcony with transparent copolymer nylon netting designed to maintain the openness, ventilation, and natural light of your home.",
    benefits: [
      "100% transparent copolymer nylon mesh",
      "Humane bird barrier (harms no birds)",
      "UV-stabilised & weatherproof durability",
      "Precision-tensioned edge fixings",
      "Customised coverage for balconies, windows & duct shafts",
    ],
    cta: "Explore Bird Protection Nets",
    href: "#nets",
    detailUrl: "/services/pigeon-safety-nets",
    whatsappText:
      "Hi, I am interested in Invisible Bird Protection Nets for my balcony in Chennai. Please share details and pricing.",
    image: netsImg,
    alt: "Balcony fitted with transparent pigeon safety netting by SHIVA ENTERPRISES Chennai",
  },
  {
    index: "02",
    name: "Invisible Stainless Steel Grills",
    headline: "Strength you can barely see.",
    description:
      "Experience a modern architectural alternative to heavy cast-iron grills with precision-tensioned 316 marine-grade stainless steel cables that safeguard children and pets with zero visual obstruction.",
    benefits: [
      "Marine-grade SS 316 wire cables (rust-proof)",
      "Transparent protective nylon coating",
      "Up to 400 kg tested tensile impact resistance",
      "Available in vertical and horizontal orientations",
      "Unblocked panoramic view and maximum ventilation",
      "Long-term durability (up to 20 years expectation)",
    ],
    cta: "Explore Invisible Grills",
    href: "#grills",
    detailUrl: "/services/invisible-grills",
    whatsappText:
      "Hi, I am interested in Invisible Stainless Steel Grills for my balcony in Chennai. Please share details and pricing.",
    image: grillsImg,
    alt: "Modern high-rise balcony with vertical stainless steel invisible grills by SHIVA ENTERPRISES",
  },
];
export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Our Solutions</p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Two ways to protect a balcony. Neither one you'll notice.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Full Service Catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

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
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={p.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                  <Link
                    to={p.detailUrl}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    Catalogue Details
                  </Link>
                  <a
                    href={`https://wa.me/919036657577?text=${encodeURIComponent(p.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-xs transition-colors hover:border-[#25D366] hover:bg-[#25D366]/5 hover:text-[#128C7E]"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                    WhatsApp Enquiry
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
