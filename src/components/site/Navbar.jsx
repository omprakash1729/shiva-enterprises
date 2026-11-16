import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
const LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Bird Protection Nets", href: "#nets" },
  { label: "Invisible Grills", href: "#grills" },
  { label: "Installation", href: "#installation" },
  { label: "Contact", href: "#contact" },
];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
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
  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-border bg-background/95 backdrop-blur-md lg:border-transparent lg:bg-transparent lg:backdrop-blur-none",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto grid min-h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between lg:px-10"
        >
          <a
            href="#top"
            className={cn(
              "flex min-w-0 items-center gap-2.5 font-display text-lg font-bold tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-foreground/90",
            )}
          >
            <img
              src="/images/siva-enterprises-logo.webp"
              alt=""
              className="h-8 w-14 shrink-0 rounded-sm bg-white p-0.5 object-contain"
            />
            <span className="truncate">
              Siva <span className="font-medium text-primary">Enterprises</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[0.8rem] font-medium text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-primary px-5 py-2.5 text-[0.8rem] font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_8px_24px_-10px_var(--color-primary)]"
            >
              Get a Free Quote
            </a>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 top-16 z-40 flex flex-col bg-background px-6 pb-10 pt-8 transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex flex-col">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${open ? i * 40 : 0}ms` }}
              className={cn(
                "hairline flex items-center justify-between py-5 font-display text-2xl font-semibold tracking-tight text-foreground transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {l.label}
              <span className="eyebrow text-muted-foreground">0{i + 1}</span>
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-8 rounded-full bg-primary px-6 py-4 text-center font-semibold text-primary-foreground"
        >
          Get a Free Quote
        </a>
        <a href="tel:+919036657577" className="mt-4 text-center text-sm text-muted-foreground">
          +91 90366 57577
        </a>
      </div>
    </>
  );
}
