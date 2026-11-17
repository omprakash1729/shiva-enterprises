import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "@/data/services";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import catalogueHeroImg from "@/assets/projects/vertical-grill-13.webp";

const CATEGORIES = ["All", "Invisible Grills", "Bird Protection", "Safety Nets", "Terrace & Turf"];

export function ServicesCataloguePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All" ? SERVICES : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-night text-night-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={catalogueHeroImg}
            alt="SHIVA ENTERPRISES Balcony Protection Projects"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/95 to-night/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Services Catalogue
            </p>
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
                <MessageCircle className="h-4 w-4" /> Quick WhatsApp Consultation
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

          {/* Simple, Refined 3-Column Product Grid:
              IMAGE → SOFT WHITE GRADIENT TRANSITION → SERVICE INFORMATION */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <Reveal key={service.id} delay={(index % 3) * 60}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div>
                    {/* Large Image with Soft White Gradient Transition */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="relative block aspect-[16/11] w-full overflow-hidden bg-muted"
                    >
                      <img
                        src={service.heroImage}
                        alt={service.name}
                        width={800}
                        height={550}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Soft white gradient transitioning down into the card body */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/40 to-transparent" />
                    </Link>

                    {/* Service Information Area */}
                    <div className="p-6 pt-2">
                      <Link to={`/services/${service.slug}`}>
                        <h2 className="font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {service.name}
                        </h2>
                      </Link>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>

                      <Link
                        to={`/services/${service.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Explore specifications & photos <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Clean WhatsApp Enquiry Button */}
                  <div className="p-6 pt-0">
                    <a
                      href={`https://wa.me/919036657577?text=${encodeURIComponent(
                        `Hi SHIVA ENTERPRISES, I'm interested in ${service.name}. I'd like to know more about the installation and pricing.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#20ba59] hover:shadow-md cursor-pointer"
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

      {/* Trust & Guarantee Banner */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-white p-6 shadow-xs">
              <p className="font-display text-lg font-bold text-foreground">Grade 316 Marine SS</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Maximum anti-rust protection designed for coastal Chennai humidity.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6 shadow-xs">
              <p className="font-display text-lg font-bold text-foreground">
                220+ kg Tensile Tested
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Independently tested high-tensile core for family and pet safety.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6 shadow-xs">
              <p className="font-display text-lg font-bold text-foreground">
                5-Year Written Warranty
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Official warranty certificate issued immediately upon handover.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6 shadow-xs">
              <p className="font-display text-lg font-bold text-foreground">Same-Day Site Visit</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Free laser measurement and on-site guidance across all of Chennai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
