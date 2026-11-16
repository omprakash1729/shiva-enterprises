import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
const ITEMS = [
  { src: netsShowcase, alt: "Invisible bird net fitted to an apartment balcony", cat: "Nets" },
  { src: netCloseup, alt: "Close-up of transparent netting on a balcony railing", cat: "Nets" },
  { src: installWork, alt: "Fitting netting along a balcony edge", cat: "Nets" },
  { src: grillsVertical, alt: "Vertical invisible grill installation on a balcony", cat: "Grills" },
  {
    src: grillsHorizontal,
    alt: "Horizontal invisible grill installation on a balcony",
    cat: "Grills",
  },
  { src: wireHook, alt: "Steel hook securing an SS 316 wire to the rail", cat: "Grills" },
  { src: afterProtected, alt: "Clean protected residential balcony", cat: "Residential" },
  {
    src: buildingExterior,
    alt: "Residential building exterior with fitted balconies",
    cat: "Residential",
  },
  {
    src: commercial,
    alt: "Commercial building facade with protected balconies",
    cat: "Commercial",
  },
];
import netsShowcase from "@/assets/nets-showcase.webp";
import netCloseup from "@/assets/net-closeup.webp";
import installWork from "@/assets/installation-work.webp";
import grillsVertical from "@/assets/grills-showcase.webp";
import grillsHorizontal from "@/assets/grills-horizontal.webp";
import wireHook from "@/assets/wire-hook-closeup.webp";
import afterProtected from "@/assets/after-protected.webp";
import buildingExterior from "@/assets/building-exterior.webp";
import commercial from "@/assets/commercial-building.webp";
const FILTERS = ["All", "Nets", "Grills", "Residential", "Commercial"];
export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [openIdx, setOpenIdx] = useState(null);
  const items = ITEMS.filter((i) => filter === "All" || i.cat === filter);
  const open = openIdx !== null ? items[openIdx] : null;
  return (
    <section id="gallery" className="scroll-mt-16 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Project Gallery</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Protection, fitted to perfection.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setOpenIdx(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 lg:columns-3 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className="group block w-full overflow-hidden"
                aria-label={`Open image: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpenIdx(null)}>
        <DialogContent className="max-h-[92vh] max-w-4xl overflow-hidden border-none bg-black/95 p-2 [&>button:last-of-type]:hidden">
          {open && (
            <>
              <img
                src={open.src}
                alt={open.alt}
                className="mx-auto max-h-[85vh] w-auto object-contain"
              />
              <DialogTitle className="px-3 py-3 text-sm font-medium text-white/80">
                {open.alt}
              </DialogTitle>
              <button
                type="button"
                onClick={() => setOpenIdx(null)}
                aria-label="Close viewer"
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
