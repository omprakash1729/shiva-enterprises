import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SERVICES } from "@/data/services";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const handleNavClick = (to) => {
    setOpen(false);
    setServicesOpen(false);
    if (to.startsWith("/#") && isHome) {
      const targetId = to.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || !isHome
            ? "border-b border-border/80 bg-background/90 backdrop-blur-md shadow-xs py-2"
            : "border-b border-transparent bg-background/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none py-3.5",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10"
        >
          {/* Brand Logo - Pure logo without background container or extra text */}
          <Link
            to="/#top"
            onClick={() => handleNavClick("/#top")}
            aria-label="SHIVA ENTERPRISES Home"
            className="flex items-center transition-opacity hover:opacity-90 shrink-0"
          >
            <img
              src="/images/shiva-enterprises-logo-transparent.png"
              alt="SHIVA ENTERPRISES"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-7 lg:flex">
            <Link
              to="/#top"
              onClick={() => handleNavClick("/#top")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isHome && !location.hash ? "text-primary font-semibold" : "text-foreground/85",
              )}
            >
              Home
            </Link>

            {/* Services with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2",
                  location.pathname.startsWith("/services")
                    ? "text-primary font-semibold"
                    : "text-foreground/85",
                )}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    servicesOpen ? "rotate-180" : "",
                  )}
                />
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 top-full w-72 rounded-2xl border border-border bg-white p-2.5 shadow-xl transition-all animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    to="/services"
                    className="flex flex-col rounded-xl px-3.5 py-2.5 text-xs transition-colors hover:bg-muted"
                  >
                    <span className="font-semibold text-foreground">All Services Catalogue</span>
                    <span className="text-muted-foreground text-[0.7rem]">
                      Browse all safety netting & invisible grills
                    </span>
                  </Link>
                  <div className="my-1.5 h-px bg-border/60" />
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex flex-col rounded-xl px-3.5 py-2 text-xs transition-colors hover:bg-muted"
                    >
                      <span className="font-medium text-foreground">{s.name}</span>
                      <span className="text-muted-foreground text-[0.7rem] line-clamp-1">
                        {s.tagline}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/#installation"
              onClick={() => handleNavClick("/#installation")}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              Installation
            </Link>

            <Link
              to="/#gallery"
              onClick={() => handleNavClick("/#gallery")}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              Gallery
            </Link>

            <Link
              to="/#about"
              onClick={() => handleNavClick("/#about")}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              About
            </Link>

            <Link
              to="/#contact"
              onClick={() => handleNavClick("/#contact")}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>

          {/* Right Action CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/#contact"
              onClick={() => handleNavClick("/#contact")}
              className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-white/80 text-foreground backdrop-blur-xs lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Slide-down / Drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] sm:top-[68px] z-40 flex flex-col bg-background px-6 pb-12 pt-6 transition-all duration-300 lg:hidden overflow-y-auto",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
      >
        <div className="flex flex-col divide-y divide-border/60">
          <Link
            to="/#top"
            onClick={() => handleNavClick("/#top")}
            className="py-4 text-lg font-semibold text-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>

          {/* Expandable Mobile Services */}
          <div className="py-2">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-2.5 text-lg font-semibold text-foreground"
            >
              <span>Services</span>
              <ChevronDown
                className={cn("h-5 w-5 transition-transform", servicesOpen ? "rotate-180" : "")}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-2 pt-1 flex flex-col gap-2">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="py-1 text-sm font-bold text-primary"
                >
                  All Services Catalogue →
                </Link>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/#installation"
            onClick={() => handleNavClick("/#installation")}
            className="py-4 text-lg font-semibold text-foreground transition-colors hover:text-primary"
          >
            Installation
          </Link>

          <Link
            to="/#gallery"
            onClick={() => handleNavClick("/#gallery")}
            className="py-4 text-lg font-semibold text-foreground transition-colors hover:text-primary"
          >
            Gallery
          </Link>

          <Link
            to="/#about"
            onClick={() => handleNavClick("/#about")}
            className="py-4 text-lg font-semibold text-foreground transition-colors hover:text-primary"
          >
            About
          </Link>

          <Link
            to="/#contact"
            onClick={() => handleNavClick("/#contact")}
            className="py-4 text-lg font-semibold text-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Contact Quick Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <Link
            to="/#contact"
            onClick={() => handleNavClick("/#contact")}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-center text-sm font-bold text-primary-foreground shadow-sm"
          >
            Get a Free Quote
          </Link>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href="tel:+919036657577"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white py-3 text-xs font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" /> Call Now
            </a>
            <a
              href="https://wa.me/919036657577?text=Hi%20SHIVA%20ENTERPRISES%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366]/10 py-3 text-xs font-semibold text-[#128C7E]"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
