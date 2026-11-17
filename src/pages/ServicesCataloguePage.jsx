import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "@/data/services";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import catalogueHeroImg from "@/assets/projects/vertical-grill-13.webp";

const CATEGORIES = [
  "All",
  "Invisible Grills",
  "Bird Protection",
  "Terrace & Open Space",
  "Balcony Enhancements",
  "Services",
];

export function ServicesCataloguePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All" ? SERVICES : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-background">
      {/* Premium Hero with Photographic Background & Navy Overlay */}
      <section className="relative overflow-hidden bg-night text-night-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={catalogueHeroImg}
            alt="SHIVA ENTERPRISES Balcony Protection Projects"
            className="h-full w-full object-cover object-center"
          />
          {/* Subtle Deep Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-night/95 via-night/85 to-night/65" />
          <div className="absolute inset-0 bg-radial-at-t from-transparent via-night/50 to-night" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5" /> Service Catalogue
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineered Safety & Aesthetic Balcony Solutions
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-night-foreground/80">
              Explore our complete range of certified 316 marine-grade invisible grills,
              UV-stabilised pigeon safety nets, terrace enclosures, and balcony artificial turf.
              Installed with architectural precision across Chennai.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919036657577?text=Hi%20SHIVA%20ENTERPRISES%2C%20I%20would%20like%20to%20enquire%20about%20your%20services%20catalogue."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/25 transition-transform hover:scale-105 hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-4 w-4" /> Quick WhatsApp Enquiry
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

      {/* Catalogue Filter & Clean Product Grid */}
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

          {/* Simple, Refined 3-Column Product Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <Reveal key={service.id} delay={(index % 3) * 60}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div>
                    {/* Clickable Image with Subtle Overlay */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="relative block aspect-[4/3] w-full overflow-hidden bg-muted"
                    >
                      <img
                        src={service.heroImage}
                        alt={service.name}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                        <span className="text-xs font-semibold text-white flex items-center gap-1">
                          View details <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>

                    {/* Card Body: Title & 1-2 Lines Description */}
                    <div className="p-6">
                      <Link to={`/services/${service.slug}`}>
                        <h2 className="font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {service.name}
                        </h2>
                      </Link>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <div className="p-6 pt-0">
                    <a
                      href={`https://wa.me/919036657577?text=${encodeURIComponent(
                        `Hi, I'm interested in ${service.name}. I'd like to know more about the installation and pricing.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#20ba59] hover:shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Consultation Section */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-20">
        <div className="rounded-3xl bg-night p-8 text-night-foreground sm:p-12 border border-white/10 shadow-2xl">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="eyebrow text-night-foreground/50">Free Site Assessment</span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Need help deciding between Nets and Invisible Grills?
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-night-foreground/75 sm:text-base">
                Our SHIVA ENTERPRISES balcony specialists will visit your apartment or villa in
                Chennai to measure openings, assess safety factors, and provide a transparent,
                customized quote on the spot.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <a
                href="tel:+919036657577"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" /> Call +91 90366 57577
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book Free Site Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
