import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Phone, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

import verticalGrill2 from "@/assets/projects/vertical-grill-2.webp";
import verticalGrill6 from "@/assets/projects/vertical-grill-6.webp";
import verticalGrill10 from "@/assets/projects/vertical-grill-10.webp";
import verticalGrill11 from "@/assets/projects/vertical-grill-11.webp";
import verticalGrill13 from "@/assets/projects/vertical-grill-13.webp";
import verticalGrill14 from "@/assets/projects/vertical-grill-14.webp";
import horizontalGrill from "@/assets/projects/horizontal-grill.webp";
import horizontalGrill2 from "@/assets/projects/horizontal-grill-2.webp";

import pigeonNet1 from "@/assets/projects/pegion-net.webp";
import pigeonNet2 from "@/assets/projects/pegion-net-2.webp";
import pigeonNet5 from "@/assets/projects/pegion-net-5.webp";
import pigeonNet7 from "@/assets/projects/pegion-net-7.webp";
import pigeonNet9 from "@/assets/projects/pegion-net-9.webp";
import pigeonNet11 from "@/assets/projects/pegion-net-11.webp";

import terraceNet1 from "@/assets/projects/home-terrace-net-poster.webp";
import terraceNet2 from "@/assets/projects/home-terrace-net-2-poster.webp";

import turf2 from "@/assets/projects/turf-2.webp";
import turf3 from "@/assets/projects/turf-3.webp";
import turf4 from "@/assets/projects/turf-4.webp";

const ITEMS = [
  {
    src: verticalGrill13,
    alt: "Panoramic balcony vertical invisible grills with clear city view",
    cat: "Invisible Grills",
    title: "Apartment Balcony Vertical Invisible Grills",
  },
  {
    src: pigeonNet2,
    alt: "Balcony pigeon safety netting installed for pigeon nuisance control",
    cat: "Bird Protection Nets",
    title: "High-Rise Balcony Pigeon Safety Net",
  },
  {
    src: horizontalGrill,
    alt: "Horizontal invisible grill installation across wide apartment opening",
    cat: "Invisible Grills",
    title: "Horizontal SS 316 Invisible Grills",
  },
  {
    src: terraceNet1,
    alt: "Terrace safety netting covering open residential rooftop",
    cat: "Terrace Nets",
    title: "Rooftop & Terrace Enclosure Netting",
  },
  {
    src: turf3,
    alt: "Balcony artificial turf flooring installation creating a lush green space",
    cat: "Balcony Turf",
    title: "Balcony Artificial Grass & Garden Turf",
  },
  {
    src: verticalGrill11,
    alt: "Vertical stainless steel invisible grill installation on modern high-rise",
    cat: "Invisible Grills",
    title: "High-Rise Child Safety Invisible Grills",
  },
  {
    src: pigeonNet10,
    alt: "Discreet transparent bird net fitted seamlessly over apartment balcony",
    cat: "Bird Protection Nets",
    title: "Transparent Anti-Bird Netting",
  },
  {
    src: verticalGrill14,
    alt: "Marine grade SS 316 invisible grills for balcony opening",
    cat: "Invisible Grills",
    title: "SS 316 Marine Grade Invisible Grills",
  },
  {
    src: pigeonNet5,
    alt: "Duct area and open shaft bird netting for apartment complex",
    cat: "Bird Protection Nets",
    title: "Building Duct Area Bird Protection Net",
  },
  {
    src: horizontalGrill2,
    alt: "High-tensile stainless steel wire fastener and bracket detail",
    cat: "Invisible Grills",
    title: "Grill Fasteners & SS 316 Tension Cables",
  },
  {
    src: terraceNet2,
    alt: "Full terrace enclosure netting protecting open balcony and rooftop",
    cat: "Terrace Nets",
    title: "Independent Villa Terrace Safety Net",
  },
  {
    src: turf4,
    alt: "Premium weather-proof artificial grass installation on balcony floor",
    cat: "Balcony Turf",
    title: "Weatherproof Balcony Turf Flooring",
  },
  {
    src: pigeonNet7,
    alt: "Precision fitted balcony bird net blending cleanly into the facade",
    cat: "Bird Protection Nets",
    title: "Apartment Balcony Anti-Pigeon Net",
  },
  {
    src: verticalGrill6,
    alt: "Vertical invisible grill cables providing security and open breeze",
    cat: "Invisible Grills",
    title: "Residential Balcony Security Grills",
  },
  {
    src: pigeonNet11,
    alt: "Transparent pigeon protection net for residential windows and balconies",
    cat: "Bird Protection Nets",
    title: "Balcony & Window Bird Netting",
  },
  {
    src: turf2,
    alt: "Balcony transformation with fresh green synthetic grass turf",
    cat: "Balcony Turf",
    title: "Balcony Aesthetic Artificial Grass",
  },
  {
    src: verticalGrill10,
    alt: "Full height vertical invisible grill installation for family safety",
    cat: "Invisible Grills",
    title: "Full-Height Invisible Grills",
  },
  {
    src: pigeonNet9,
    alt: "Durable UV-treated bird safety netting installation by SHIVA ENTERPRISES",
    cat: "Bird Protection Nets",
    title: "UV-Stabilised Bird Protection Net",
  },
];

import pigeonNet10 from "@/assets/projects/pegion-net-10.webp";

const FILTERS = ["All", "Invisible Grills", "Bird Protection Nets", "Terrace Nets", "Balcony Turf"];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [openIdx, setOpenIdx] = useState(null);
  const items = ITEMS.filter((i) => filter === "All" || i.cat === filter);
  const open = openIdx !== null ? items[openIdx] : null;

  return (
    <section id="gallery" className="scroll-mt-16 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Project Gallery</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Real Work. Real Protection.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Explore actual project photographs from our installations across Chennai. From invisible
            grills to pigeon safety nets, terrace enclosures, and artificial turf.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setOpenIdx(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground shadow-xs"
                  : "border-border bg-white text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 sm:columns-2 lg:columns-3 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
          {items.map((item, i) => (
            <Reveal key={item.src + i} delay={(i % 3) * 60}>
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-muted shadow-sm transition-all duration-300 hover:shadow-md text-left"
                aria-label={`Open image: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1600}
                  height={2132}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-primary-foreground/80">
                    {item.cat}
                  </span>
                  <p className="font-display text-sm font-semibold text-white">{item.title}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA for Gallery */}
        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-white p-6 sm:p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Like what you see for your balcony?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Get an accurate quote and free measurement visit in Chennai today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919036657577?text=Hi%2C%20I%20saw%20your%20project%20gallery%20and%20would%20like%20a%20free%20quote%20for%20my%20balcony."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#20ba59]"
            >
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a
              href="tel:+919036657577"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-xs font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" /> Call +91 90366 57577
            </a>
          </div>
        </Reveal>
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpenIdx(null)}>
        <DialogContent className="max-h-[94vh] max-w-4xl overflow-hidden border-none bg-black/95 p-3 sm:p-4 [&>button:last-of-type]:hidden">
          {open && (
            <div className="flex flex-col">
              <div className="relative max-h-[80vh] overflow-hidden rounded-xl bg-black/50">
                <img
                  src={open.src}
                  alt={open.alt}
                  className="mx-auto max-h-[78vh] w-auto object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2">
                <div>
                  <DialogTitle className="font-display text-base font-semibold text-white">
                    {open.title}
                  </DialogTitle>
                  <p className="mt-0.5 text-xs text-white/70">{open.alt}</p>
                </div>
                <a
                  href={`https://wa.me/919036657577?text=${encodeURIComponent(
                    `Hi, I am interested in a similar installation as seen in your gallery: ${open.title}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#20ba59]"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Ask about this
                </a>
              </div>
              <button
                type="button"
                onClick={() => setOpenIdx(null)}
                aria-label="Close viewer"
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
