import { Shield, Award, Users, CheckCircle2, Phone, MessageCircle, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import verticalGrill13 from "@/assets/projects/vertical-grill-13.webp";
import pigeonNet8 from "@/assets/projects/pegion-net-8.webp";

const STATS = [
  { value: "1,500+", label: "Balconies Secured", desc: "Across Chennai high-rises and villas" },
  { value: "10+", label: "Years Experience", desc: "Pioneering invisible grills in Tamil Nadu" },
  { value: "SS 316", label: "Marine-Grade Steel", desc: "100% rust-free in coastal humidity" },
  { value: "5 Years", label: "Direct Warranty", desc: "Backed by official written certificate" },
];

const VALUES = [
  {
    icon: Shield,
    title: "Zero-Compromise Child & Pet Safety",
    desc: "Every cable and net anchor is installed with tension calibrated to withstand severe impacts. We engineer solutions that eliminate fall risks while preserving natural air and light.",
  },
  {
    icon: Award,
    title: "Certified Marine-Grade 316 Raw Materials",
    desc: "Chennai's coastal air oxidizes cheap metals within months. We exclusively import and fabricate using Grade 316 marine stainless steel and UV-stabilized copolymer nets.",
  },
  {
    icon: Users,
    title: "100% Full-Time In-House Technicians",
    desc: "We never outsource our installations to daily-wage contractors. Every team member undergoes factory training in track anchoring, tension calibration, and dust-free execution.",
  },
];

const REVIEWS = [
  {
    author: "Karthik Subramanian",
    location: "Prestige Silver Springs, OMR",
    service: "SS 316 Vertical Invisible Grills",
    quote:
      "We live on the 14th floor with two small children. Shiva Enterprises installed vertical invisible grills throughout our balcony. The view of the greenery is completely intact, and the structural tension gives us 100% peace of mind.",
  },
  {
    author: "Dr. Ananya Raghavan",
    location: "Appaswamy Platina, Porur",
    service: "Pigeon Protection Nets",
    quote:
      "Pigeons were ruining our AC units and balcony every single day. Shiva Enterprises fitted transparent nylon nets that are virtually invisible from 5 feet away. The balcony has been completely clean for over 2 years now.",
  },
  {
    author: "Suresh Narayanan",
    location: "Radiance Empire, Perambur",
    service: "Balcony Safety Net & Artificial Turf",
    quote:
      "Transformed our bare balcony into a beautiful, safe outdoor garden. Excellent workmanship, polite technicians, and spotless cleanup after finishing. Highly recommended in Chennai!",
  },
];

export function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-night text-night-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={verticalGrill13}
            alt="About SHIVA ENTERPRISES"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/95 to-night/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              About SHIVA ENTERPRISES
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineered Protection That Preserves Your Panoramic View
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-night-foreground/80">
              Founded with a clear architectural mission: to replace heavy, cage-like iron grills
              with sleek, high-tensile 316 marine-grade invisible grills and transparent bird
              protection nets across Chennai and South India.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919036657577?text=Hi%20SHIVA%20ENTERPRISES%2C%20I%20would%20like%20to%20know%20more%20about%20your%20company%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/25 transition-transform hover:scale-105 hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-4 w-4" /> Chat with Us on WhatsApp
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

      {/* Metrics Banner */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider opacity-90">
                  {s.label}
                </p>
                <p className="mt-1 text-xs opacity-75">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                Our Story & Commitment
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Safety Without Sacrificing Architecture
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Living in a high-rise apartment should mean enjoying panoramic sunrise views,
                  refreshing breezes, and an open outdoor atmosphere. Traditional metal grills turn
                  balconies into claustrophobic cages, block fire escape routes, and rapidly corrode
                  in Chennai's humid, coastal air.
                </p>
                <p>
                  At <strong className="text-foreground">SHIVA ENTERPRISES</strong>, we set out to
                  engineer a better alternative. We combined high-tensile 316 marine-grade stainless
                  steel cables with precision-extruded architectural aluminium tracks to deliver an
                  unyielding safety barrier that is virtually transparent.
                </p>
                <p>
                  Today, we have secured over 1,500 residential balconies, windows, terraces, and
                  commercial properties across Chennai, partnering with leading developers,
                  architects, and proud homeowners.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src={pigeonNet8}
                  alt="SHIVA ENTERPRISES Quality Work"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              What Sets SHIVA ENTERPRISES Apart
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Our principles ensure maximum structural safety, durability, and customer
              satisfaction.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-7 shadow-xs hover:border-primary/50 transition-colors"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-5">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Verified Client Feedback
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Trusted by 1,500+ Chennai Families
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <div
                key={r.author}
                className="flex flex-col justify-between rounded-2xl border border-border bg-white p-7 shadow-xs"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80 italic">"{r.quote}"</p>
                </div>
                <div className="mt-6 border-t border-border/60 pt-4">
                  <p className="font-display text-sm font-bold text-foreground">{r.author}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                  <span className="mt-1 inline-block text-[0.7rem] font-semibold text-primary">
                    {r.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Enquiry Form */}
      <section className="bg-night py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <EnquiryForm
            title="Speak with a Balcony Safety Specialist"
            subtitle="Get honest technical advice, exact measurements, and a transparent quote without pushy sales calls."
            defaultService="Invisible Grills (SS 316)"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
}
