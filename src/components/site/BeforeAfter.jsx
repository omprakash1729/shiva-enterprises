import { useCallback, useRef, useState } from "react";
import beforeImg from "@/assets/before-unprotected.webp";
import afterImg from "@/assets/after-protected.webp";
import { ChevronsLeftRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);
  const setFromClientX = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(Math.max(pct, 0), 100));
  }, []);
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Before & After</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            See the difference. Not the barrier.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div
            ref={ref}
            className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden lg:aspect-[16/9]"
            onPointerDown={(e) => {
              dragging.current = true;
              e.target.setPointerCapture?.(e.pointerId);
              setFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) setFromClientX(e.clientX);
            }}
            onPointerUp={() => {
              dragging.current = false;
            }}
            onPointerCancel={() => {
              dragging.current = false;
            }}
          >
            {/* After (full) */}
            <img
              src={afterImg}
              alt="Balcony after protection: clean, tidy and fitted with an invisible net"
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            {/* Before (clipped from the left) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img
                src={beforeImg}
                alt="Balcony before protection: pigeons inside and droppings on the ledge"
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
            </div>

            {/* Labels */}
            <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
              Before
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-primary/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground backdrop-blur">
              After
            </span>

            {/* Handle */}
            <div className="absolute inset-y-0 z-10 w-px bg-white" style={{ left: `${pos}%` }}>
              <div
                className={cn(
                  "absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/95 text-foreground shadow-lg transition-transform",
                  dragging.current ? "scale-95" : "hover:scale-105",
                )}
              >
                <ChevronsLeftRight className="h-5 w-5" />
              </div>
            </div>

            {/* Keyboard accessibility */}
            <input
              type="range"
              min={0}
              max={100}
              value={Math.round(pos)}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Compare before and after"
              className="absolute inset-x-0 bottom-3 mx-auto h-1 w-2/3 cursor-pointer opacity-0 focus-visible:opacity-60"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Drag the handle — or use arrow keys — to compare the same balcony before and after
            protection.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
