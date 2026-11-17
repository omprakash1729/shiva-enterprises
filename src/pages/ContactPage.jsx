import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Calendar } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const SERVICE_AREAS = [
  "Anna Nagar",
  "Adyar & Besant Nagar",
  "OMR & Perungudi",
  "ECR & Thiruvanmiyur",
  "Velachery & Madipakkam",
  "T. Nagar & Nungambakkam",
  "Porur & Iyyappanthangal",
  "Tambaram & Chromepet",
  "Mogappair & Ambattur",
  "Sholinganallur & Navalur",
  "Kilpauk & Chetpet",
  "Mylapore & Alwarpet",
];

export function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-night text-night-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Contact SHIVA ENTERPRISES
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get a Free Quote & On-Site Balcony Inspection
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-night-foreground/80">
              Schedule a same-day laser survey or share your balcony photos for an instant estimate.
              Our technical team is available 7 days a week across Chennai.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left: Contact Info & Coverage */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Reach Our Team Directly
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Reach out via phone, WhatsApp, or request an in-person site visit at your
                  convenience.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+919036657577"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-xs transition-colors hover:border-primary/50"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Call Us Directly
                    </p>
                    <p className="mt-0.5 text-base font-bold text-foreground">+91 90366 57577</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Direct line to our senior installation supervisor
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919036657577?text=Hi%20SHIVA%20ENTERPRISES%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20balcony."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-xs transition-colors hover:border-[#25D366]"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      WhatsApp Quick Chat
                    </p>
                    <p className="mt-0.5 text-base font-bold text-[#25D366]">Chat on WhatsApp</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Share balcony photos & receive instant estimates
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-xs">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Office & Workshop
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-foreground">SHIVA ENTERPRISES</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      35A, Sivan Koil Street,
                      <br />
                      Chennai 600024, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-xs">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Operating Hours
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-foreground">
                      Monday – Sunday: 8:00 AM – 9:00 PM
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Weekend on-site inspection appointments available
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="rounded-2xl border border-border bg-muted/40 p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                  Service Areas Across Chennai
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  {SERVICE_AREAS.map((area) => (
                    <div key={area} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Full Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm
                title="Send Balcony Enquiry"
                subtitle="Fill in your details and requirement below. We will calculate estimated pricing and confirm an inspection slot."
                defaultService="Invisible Grills (SS 316)"
                variant="light"
                className="shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
