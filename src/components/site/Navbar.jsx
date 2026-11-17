import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services Catalogue", path: "/services" },
  { label: "Installation", path: "/installation" },
  { label: "Gallery", path: "/gallery" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || !isHome
            ? "border-b border-border/80 bg-white/95 backdrop-blur-md shadow-xs py-2.5"
            : "border-b border-transparent bg-white/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none py-3.5",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10"
        >
          {/* Brand Logo - Pure logo without background container or extra text */}
          <Link
            to="/"
            aria-label="SHIVA ENTERPRISES Home"
            className="flex items-center transition-opacity hover:opacity-90 shrink-0"
          >
            <img
              src="/images/shiva-enterprises-logo-transparent.png"
              alt="SHIVA ENTERPRISES"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links - Strict Multi-Page, No Dropdowns, No Section Jumps */}
          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(link.path)
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                    : "text-foreground/80 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+919036657577"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>+91 90366 57577</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md cursor-pointer"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-foreground transition-colors hover:bg-muted lg:hidden cursor-pointer"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col justify-between bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
                <img
                  src="/images/shiva-enterprises-logo-transparent.png"
                  alt="SHIVA ENTERPRISES"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-border">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-primary py-3 text-center text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              Get a Free Quote
            </Link>

            <a
              href="https://wa.me/919036657577?text=Hi%20SHIVA%20ENTERPRISES%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white shadow-xs hover:bg-[#20ba59]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Chat
            </a>

            <a
              href="tel:+919036657577"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/60 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <Phone className="h-4 w-4 text-primary" /> Call +91 90366 57577
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
