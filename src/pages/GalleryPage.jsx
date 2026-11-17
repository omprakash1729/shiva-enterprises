import { useState } from "react";
import { X, ZoomIn, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { cn } from "@/lib/utils";

// Project assets
import verticalGrill13 from "@/assets/projects/vertical-grill-13.webp";
import verticalGrill14 from "@/assets/projects/vertical-grill-14.webp";
import verticalGrill11 from "@/assets/projects/vertical-grill-11.webp";
import verticalGrill10 from "@/assets/projects/vertical-grill-10.webp";
import verticalGrill6 from "@/assets/projects/vertical-grill-6.webp";
import verticalGrill2 from "@/assets/projects/vertical-grill-2.webp";
import verticalGrill9 from "@/assets/projects/vertical-grill-9.webp";
import verticalGrill15 from "@/assets/projects/vertical-grill-15.webp";

import horizontalGrill from "@/assets/projects/horizontal-grill.webp";
import horizontalGrill2 from "@/assets/projects/horizontal-grill-2.webp";

import pigeonNet2 from "@/assets/projects/pegion-net-2.webp";
import pigeonNet4 from "@/assets/projects/pegion-net-4.webp";
import pigeonNet8 from "@/assets/projects/pegion-net-8.webp";
import pigeonNet10 from "@/assets/projects/pegion-net-10.webp";
import pigeonNet12 from "@/assets/projects/pegion-net-12.webp";
import pigeonNet7 from "@/assets/projects/pegion-net-7.webp";
import pigeonNet5 from "@/assets/projects/pegion-net-5.webp";
import pigeonNet3 from "@/assets/projects/pegion-net-3.webp";

import terraceNet1 from "@/assets/projects/home-terrace-net-poster.webp";
import terraceNet2 from "@/assets/projects/home-terrace-net-2-poster.webp";

import turf1 from "@/assets/projects/turf-1-poster.webp";
import turf2 from "@/assets/projects/turf-2.webp";
import turf3 from "@/assets/projects/turf-3.webp";
import turf4 from "@/assets/projects/turf-4.webp";

const CATEGORIES = [
  "All",
  "Invisible Grills",
  "Bird Protection Nets",
  "Balcony Safety Nets",
  "Terrace Enclosures",
  "Artificial Turf",
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Marine SS 316 Vertical Invisible Grill",
    location: "High-Rise Balcony, OMR Chennai",
    category: "Invisible Grills",
    image: verticalGrill13,
    aspect: "tall",
    desc: "Full-height vertical wire invisible grill preserving unobstructed coastal views.",
  },
  {
    id: 2,
    title: "UV-Stabilised Balcony Bird Protection Net",
    location: "Apartment Balcony, Anna Nagar",
    category: "Bird Protection Nets",
    image: pigeonNet2,
    aspect: "wide",
    desc: "100% humane, transparent copolymer nylon net providing pigeon-free living.",
  },
  {
    id: 3,
    title: "Continuous Horizontal Safety Grill",
    location: "Duplex Villa Sit-out, ECR",
    category: "Invisible Grills",
    image: horizontalGrill,
    aspect: "wide",
    desc: "Sleek horizontal stainless steel cables stretched across a wide balcony railing.",
  },
  {
    id: 4,
    title: "Heavy-Duty Child & Pet Fall Safety Net",
    location: "Residential Tower, Velachery",
    category: "Balcony Safety Nets",
    image: pigeonNet8,
    aspect: "tall",
    desc: "High-tensile perimeter-anchored safety netting for family fall protection.",
  },
  {
    id: 5,
    title: "Complete Open Terrace Net Enclosure",
    location: "Independent Rooftop, Porur",
    category: "Terrace Enclosures",
    image: terraceNet1,
    aspect: "wide",
    desc: "Full terrace enclosure preventing monkey intrusion and pigeon nesting.",
  },
  {
    id: 6,
    title: "Lush Balcony Artificial Turf Flooring",
    location: "Penthouse Balcony, Adyar",
    category: "Artificial Turf",
    image: turf1,
    aspect: "tall",
    desc: "High-density 35mm natural look artificial turf with perforated monsoon drainage.",
  },
  {
    id: 7,
    title: "Anti-Climb Vertical Wire Balcony Grills",
    location: "Gated Community, Perungudi",
    category: "Invisible Grills",
    image: verticalGrill11,
    aspect: "tall",
    desc: "Architectural 2-inch pitch cables providing complete anti-climb child security.",
  },
  {
    id: 8,
    title: "Transparent Window Bird Netting",
    location: "Apartment Window & AC Ledge, Tambaram",
    category: "Bird Protection Nets",
    image: pigeonNet4,
    aspect: "wide",
    desc: "Custom-framed bird barrier protecting AC outdoor compressor units from fouling.",
  },
  {
    id: 9,
    title: "Horizontal Stainless Steel Parapet Grill",
    location: "Modern Apartment, T. Nagar",
    category: "Invisible Grills",
    image: horizontalGrill2,
    aspect: "wide",
    desc: "Marine SS 316 wire horizontal alignment mounted to structural concrete parapet.",
  },
  {
    id: 10,
    title: "High-Rise Living Room Balcony Grills",
    location: "Tower Balcony, Nungambakkam",
    category: "Invisible Grills",
    image: verticalGrill14,
    aspect: "tall",
    desc: "Invisible grill installation offering panoramic skyline views over Chennai.",
  },
  {
    id: 11,
    title: "Balcony Turf Flooring Transformation",
    location: "Private Residence, Kilpauk",
    category: "Artificial Turf",
    image: turf3,
    aspect: "wide",
    desc: "All-weather artificial grass bringing natural greenery into urban balcony living.",
  },
  {
    id: 12,
    title: "Rooftop Terrace Bird Barrier Netting",
    location: "Villa Terrace, Sholinganallur",
    category: "Terrace Enclosures",
    image: terraceNet2,
    aspect: "wide",
    desc: "Large-span UV-treated net structure with heavy-duty tensioned boundary wires.",
  },
  {
    id: 13,
    title: "Durable Balcony Fall Safety Net",
    location: "Apartment Balcony, Mogappair",
    category: "Balcony Safety Nets",
    image: pigeonNet10,
    aspect: "tall",
    desc: "Braided nylon fall barrier secured with rust-proof stainless steel eyelet hooks.",
  },
  {
    id: 14,
    title: "Curved Balcony Invisible Grill System",
    location: "Luxury Apartment, Guindy",
    category: "Invisible Grills",
    image: verticalGrill10,
    aspect: "tall",
    desc: "Custom-bent structural aluminium tracks adapted to architectural curved railing.",
  },
  {
    id: 15,
    title: "Balcony Garden Turf & Safety Net Combo",
    location: "Apartment Balcony, Alwarpet",
    category: "Artificial Turf",
    image: turf2,
    aspect: "wide",
    desc: "Combination of green lawn flooring and invisible safety netting.",
  },
  {
    id: 16,
    title: "Utility Balcony Pigeon Protection Net",
    location: "Apartment Utility Area, Medavakkam",
    category: "Bird Protection Nets",
    image: pigeonNet12,
    aspect: "wide",
    desc: "Full coverage netting for utility dry balconies, washing areas, and duct shafts.",
  },
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-night text-night-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={verticalGrill13}
            alt="SHIVA ENTERPRISES Real Project Gallery"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/95 to-night/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Real Project Installations
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Completed Balcony Projects Gallery
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-night-foreground/80">
              Browse actual photographs of invisible grills, bird protection nets, terrace
              enclosures, and balcony artificial turf installations completed by our in-house team
              across Chennai.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919036657577?text=Hi%20SHIVA%20ENTERPRISES%2C%20I%20saw%20your%20project%20gallery%20and%20would%20like%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/25 transition-transform hover:scale-105 hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-4 w-4" /> Share My Balcony Photos on WhatsApp
              </a>
              <a
                href="tel:+919036657577"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-primary" /> Call +91 90366 57577
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all cursor-pointer",
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground shadow-sm scale-102"
                    : "border-border bg-white text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Projects */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delay={(index % 3) * 60}>
                <div
                  onClick={() => setSelectedItem(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                      <div className="text-white">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary/90 px-2.5 py-1 rounded-md mb-2">
                          <ZoomIn className="h-3 w-3" /> Click to expand
                        </span>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-white/80">{item.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-primary">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-night text-white shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/90 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-12">
              <div className="md:col-span-8 bg-black flex items-center justify-center max-h-[70vh]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {selectedItem.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{selectedItem.location}</p>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-night-foreground/80">
                    {selectedItem.desc}
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={`https://wa.me/919036657577?text=${encodeURIComponent(
                      `Hi SHIVA ENTERPRISES, I saw this project in your gallery: "${selectedItem.title} (${selectedItem.location})". I would like a quote for a similar installation for my balcony.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#20ba59]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire About This Project
                  </a>
                  <a
                    href="tel:+919036657577"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    Call +91 90366 57577
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Enquiry Form */}
      <section className="bg-night py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <EnquiryForm
            title="Have a Balcony You'd Like to Secure?"
            subtitle="Send us your dimensions or photos on WhatsApp for an immediate estimate and free site inspection."
            defaultService="Invisible Grills (SS 316)"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
}
