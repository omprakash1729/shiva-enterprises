import { Phone, MapPin, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Bird Protection Nets", href: "#nets" },
  { label: "Invisible Grills", href: "#grills" },
  { label: "Installation", href: "#installation" },
  { label: "Contact", href: "#contact" },
];
const SOCIALS = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "YouTube", href: "#", icon: Youtube },
];
export function Footer() {
  return (
    <footer className="bg-night text-night-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <a
              href="#top"
              aria-label="Siva Enterprises home"
              className="inline-flex items-center gap-3"
            >
              <img
                src="/images/siva-enterprises-logo.webp"
                alt=""
                className="h-10 w-[4.375rem] rounded bg-white p-1 object-contain"
              />
              <span className="font-display text-xl font-bold tracking-tight text-night-foreground">
                Siva <span className="text-primary">Enterprises</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-night-foreground/60">
              Premium invisible bird protection nets and stainless steel grill solutions designed to
              protect your space while preserving your view.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-night-foreground/70 transition-colors hover:border-primary-foreground/40 hover:text-night-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-night-foreground/40">Navigate</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-night-foreground/70 transition-colors hover:text-night-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-night-foreground/40">Contact</p>
            <ul className="mt-5 space-y-4 text-sm text-night-foreground/70">
              <li>
                <a
                  href="tel:+919036657577"
                  className="flex items-center gap-3 transition-colors hover:text-night-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" /> +91 90366 57577
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919036657577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-night-foreground"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  35A, Sivan Koil Street,
                  <br />
                  Chennai 600024, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-night-foreground/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Siva Enterprises. All rights reserved.</p>
          <p>Protection that doesn't compromise your view.</p>
        </div>
      </div>
    </footer>
  );
}
