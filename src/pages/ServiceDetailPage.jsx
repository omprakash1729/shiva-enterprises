import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { SERVICES } from "@/data/services";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero Header with Background Image & Gradient */}
      <section className="relative overflow-hidden bg-night text-night-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.name}
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/95 to-night/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/60">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/services" className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-semibold">{service.shortTitle}</li>
            </ol>
          </nav>

          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              {service.category}
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg font-medium text-primary-foreground/90">
              {service.tagline}
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-night-foreground/80 max-w-2xl">
              {service.description}
            </p>

            {/* Direct CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/919036657577?text=${encodeURIComponent(
                  `Hi SHIVA ENTERPRISES, I'm interested in ${service.name}. I'd like to know more about the installation and pricing.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all hover:scale-105 hover:bg-[#20ba59]"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
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

      {/* Technical Specifications & Benefits Split */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Key Specifications */}
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                  Technical Specifications
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Engineered for Reliability & Longevity
                </h2>
                <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white p-6 shadow-xs">
                  {service.keySpecs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between py-3.5 sm:flex-row sm:items-center"
                    >
                      <span className="text-sm font-medium text-muted-foreground">
                        {spec.label}
                      </span>
                      <span className="font-display text-sm font-bold text-foreground sm:text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Suitable Spaces */}
              <Reveal delay={100} className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Applications
                </p>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Where This System is Installed
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.suitableFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground/90 shadow-xs"
                    >
                      <MapPin className="h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: Key Advantages */}
            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                  Key Advantages
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Why Choose SHIVA ENTERPRISES
                </h2>
                <div className="mt-8 space-y-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-xs transition-shadow hover:shadow-sm"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-foreground">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Real Project Photographs */}
      {service.galleryImages && service.galleryImages.length > 0 && (
        <section className="bg-white py-16 lg:py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Real Project Photographs
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Recent {service.shortTitle} Installations
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                All photographs depict actual on-site installations completed by SHIVA ENTERPRISES
                technicians in Chennai.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.galleryImages.map((imgSrc, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="overflow-hidden rounded-2xl bg-muted shadow-xs transition-transform duration-500 hover:scale-[1.02]">
                    <img
                      src={imgSrc}
                      alt={`${service.name} project installation ${i + 1}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Embedded Reusable Enquiry Form */}
      <section className="bg-night py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <EnquiryForm
            title={`Get a Free Quote for ${service.name}`}
            subtitle="Share your balcony measurements or request an on-site laser survey anywhere in Chennai. We'll provide transparent pricing with zero obligations."
            defaultService={service.name}
            variant="dark"
          />
        </div>
      </section>

      {/* Other Related Services */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Related Services
              </p>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Other Balcony Solutions
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:underline"
            >
              View All Services Catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <div
                key={other.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={other.heroImage}
                      alt={other.name}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground">{other.name}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {other.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-border p-5 pt-3">
                  <Link
                    to={`/services/${other.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline"
                  >
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
