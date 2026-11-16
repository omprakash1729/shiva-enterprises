import buildingImg from "@/assets/building-exterior.webp";
import residentialImg from "@/assets/after-protected.webp";
import commercialImg from "@/assets/commercial-building.webp";
import utilityImg from "@/assets/nets-showcase.webp";
import { Reveal } from "./Reveal";
const SPACES = [
  {
    img: buildingImg,
    t: "High-rise apartments",
    alt: "Modern high-rise apartment building with glass balcony railings",
    span: "col-span-2 row-span-2 lg:col-span-7 lg:row-span-2",
    ratio: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    img: residentialImg,
    t: "Residential balconies",
    alt: "Residential balcony fitted with invisible protection",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    img: commercialImg,
    t: "Commercial buildings",
    alt: "Contemporary commercial building facade with rows of balconies",
    span: "lg:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    img: utilityImg,
    t: "Multi-storey residential properties",
    alt: "Apartment balcony with transparent netting spanning the opening",
    span: "col-span-2 lg:col-span-12",
    ratio: "aspect-[16/9] lg:aspect-[21/9]",
  },
];
export function Applications() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Applications</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Designed for different spaces.
          </h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-6">
          {SPACES.map((s, i) => (
            <Reveal key={s.t} delay={i * 90} className={s.span}>
              <figure className="group relative h-full w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] ${s.ratio}`}
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-black/50 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
                  {s.t}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
