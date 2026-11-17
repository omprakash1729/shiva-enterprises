import { Shield, CheckCircle, Wrench, Ruler, Award, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import verticalGrill14 from "@/assets/projects/vertical-grill-14.webp";
import verticalGrill10 from "@/assets/projects/vertical-grill-10.webp";
import pigeonNet4 from "@/assets/projects/pegion-net-4.webp";
import horizontalGrill2 from "@/assets/projects/horizontal-grill-2.webp";

const STEPS = [
  {
    step: "01",
    title: "Free On-Site Inspection & Laser Survey",
    description:
      "Our certified installation engineer visits your home with calibrated laser measurement tools. We inspect your balcony railing, concrete slab thickness, parapet wall alignment, and assess risk zones for children, pets, or bird intrusion.",
    highlights: [
      "Same-day on-site visit in Chennai",
      "Zero-obligation consultation",
      "Laser millimeter accuracy",
    ],
    image: verticalGrill10,
  },
  {
    step: "02",
    title: "Structural Aluminium Track Anchoring",
    description:
      "We install structural extruded aluminium tracks along top and bottom surfaces using heavy-duty stainless steel fasteners. Tracks are securely anchored directly into structural concrete or steel balustrades without chipping surrounding plaster.",
    highlights: [
      "Grade 6063-T6 architectural aluminium",
      "Rust-proof stainless steel anchor bolts",
      "No structural damage to tiles or paint",
    ],
    image: verticalGrill14,
  },
  {
    step: "03",
    title: "SS 316 Marine-Grade Cable Stringing & Tensioning",
    description:
      "Each individual high-tensile 316 marine stainless steel cable is laced between aluminium guide tracks. Our technicians use calibrated mechanical tensioners to tighten cables to exact tension (tested to withstand 220+ kg load) ensuring wires cannot be pried apart.",
    highlights: [
      "Virgin transparent nylon sheathing",
      "Calibrated mechanical tension lock",
      "Anti-climb vertical or horizontal alignment",
    ],
    image: horizontalGrill2,
  },
  {
    step: "04",
    title: "Load Testing, Clean-Up & Handover",
    description:
      "We perform rigorous multi-point tensile load tests on the completed installation in front of you. Our technicians vacuum and clean all installation debris, leaving your balcony spotless, and issue an official warranty certificate.",
    highlights: [
      "On-site physical load test demonstration",
      "100% dust-free post-work vacuuming",
      "Official 5-Year SS 316 warranty card",
    ],
    image: pigeonNet4,
  },
];

const STANDARDS = [
  {
    icon: Shield,
    title: "Grade 316 Marine Stainless Steel",
    desc: "Contains 2-3% molybdenum providing exceptional resistance against saltwater mist and high coastal humidity across Chennai.",
  },
  {
    icon: Ruler,
    title: "Calibrated 2-Inch / 3-Inch Pitch",
    desc: "Rigid cable spacing prevents children's heads from passing through while maintaining crystal-clear outward visibility.",
  },
  {
    icon: Award,
    title: "220+ kg Breaking Tensile Load",
    desc: "Independently load-tested high-tensile core wire engineered to absorb sudden body-weight impacts effortlessly.",
  },
  {
    icon: Wrench,
    title: "In-House Certified Technicians",
    desc: "Every installation is executed by our full-time trained technicians — we never outsource to third-party daily-wage contractors.",
  },
];

export function InstallationPage() {
  return (
    <div className="bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-night text-night-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={verticalGrill14}
            alt="SHIVA ENTERPRISES Installation Process"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/95 to-night/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Precision Engineering & Safety Standards
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Balcony Installation Process
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-night-foreground/80">
              Balcony safety depends as much on installation precision as the materials themselves.
              Learn how our factory-trained technicians install marine-grade SS 316 invisible grills
              and bird protection nets across Chennai.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919036657577?text=Hi%20SHIVA%20ENTERPRISES%2C%20I%20would%20like%20to%20book%20a%20free%20installation%20inspection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/25 transition-transform hover:scale-105 hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-4 w-4" /> Book Free On-Site Inspection
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

      {/* Engineering Standards Grid */}
      <section className="py-16 bg-muted/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Built to the Highest Architectural Standards
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Why thousands of apartment owners and architects across Chennai trust SHIVA
              ENTERPRISES.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-white p-6 shadow-xs hover:border-primary/50 transition-colors"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Step-by-Step Installation Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Step-by-Step Workflow
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              How We Secure Your Balcony from Start to Finish
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Every balcony has distinct structural traits. Our 4-stage protocol ensures foolproof
              tension, aesthetic perfection, and long-term durability.
            </p>
          </div>

          <div className="space-y-16">
            {STEPS.map((s, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={s.step}
                  className={`grid items-center gap-10 lg:grid-cols-12 ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Visual Image */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:col-start-7" : ""}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-md">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 rounded-xl bg-night/80 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                        Stage {s.step}
                      </div>
                    </div>
                  </div>

                  {/* Information Details */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:col-start-1" : ""}`}>
                    <span className="font-mono text-3xl font-extrabold text-primary/40">
                      {s.step}
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>

                    <div className="mt-6 space-y-2.5">
                      {s.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium"
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Reusable Enquiry Form */}
      <section className="bg-night py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <EnquiryForm
            title="Book an Installation Inspection"
            subtitle="Get accurate measurements and expert guidance for your apartment or villa balcony. No service charges for site assessment."
            defaultService="Invisible Grills (SS 316)"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
}
