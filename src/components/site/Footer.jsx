import { Phone, MapPin, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services Catalogue", to: "/services" },
  { label: "Invisible Grills", to: "/services/invisible-grills" },
  { label: "Bird Protection Nets", to: "/services/bird-protection-nets" },
  { label: "Balcony Safety Nets", to: "/services/balcony-safety-nets" },
  { label: "Vertical Grills", to: "/services/vertical-grills" },
  { label: "Horizontal Grills", to: "/services/horizontal-grills" },
  { label: "Terrace & Turf Nets", to: "/services/terrace-nets" },
  { label: "Installation Process", to: "/installation" },
  { label: "Project Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-night text-night-foreground border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* Brand Info */}
          <div>
            <Link
              to="/"
              aria-label="SHIVA ENTERPRISES Home"
              className="inline-block transition-opacity hover:opacity-90 shrink-0"
            >
              <img
                src="/images/shiva-enterprises-logo-light.png"
                alt="SHIVA ENTERPRISES"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-night-foreground/65">
              Premium invisible bird protection nets and 316 marine-grade stainless steel grill
              solutions designed to protect your home, children, and pets while preserving your open
              panoramic view.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-night-foreground/70 transition-all hover:border-primary hover:bg-primary/10 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services & Pages Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-night-foreground/40 mb-4">
              Services & Navigation
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-xs sm:text-sm text-night-foreground/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-night-foreground/40 mb-4">
              Contact Information
            </p>
            <ul className="space-y-4 text-sm text-night-foreground/75">
              <li>
                <a
                  href="tel:+919036657577"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" /> +91 90366 57577
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919036657577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" /> Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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
          <p>© {new Date().getFullYear()} SHIVA ENTERPRISES. All rights reserved.</p>
          <p>Protection that doesn't compromise your view.</p>
        </div>
      </div>
    </footer>
  );
}
