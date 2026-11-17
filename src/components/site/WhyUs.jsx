import installImg from "@/assets/projects/vertical-grill-15.webp";
import { Reveal } from "./Reveal";
const FEATURES = [
  {
    n: "01",
    t: "Grade 316 Marine Stainless Steel",
    d: "High-tensile, rust-proof SS 316 cables with transparent nylon coating engineered to endure humid coastal Chennai weather.",
  },
  {
    n: "02",
    t: "Free On-Site Inspection & Measurement",
    d: "Our experts visit your apartment or villa to measure dimensions accurately and provide honest, transparent quotation.",
  },
  {
    n: "03",
    t: "Skilled In-House Technicians",
    d: "Fitted by our own trained installation specialists with over 2,500+ successful installations across Chennai & Tamil Nadu.",
  },
  {
    n: "04",
    t: "Unobstructed Views & Ventilation",
    d: "Discreet safety and bird barrier solutions designed to disappear into your home architecture without compromising breeze or light.",
  },
  {
    n: "05",
    t: "Tested Safety Load Resistance",
    d: "Grill systems tested for up to 400 kg tensile impact resistance, providing robust safety for children and pets.",
  },
  {
    n: "06",
    t: "Reliable Support & Warranty",
    d: "Committed after-sales service with specified durability of up to 20 years on stainless steel systems.",
  },
];
export function WhyUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-muted-foreground">Why Choose SHIVA ENTERPRISES</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
              Protection is in the details.
            </h2>
            <div className="mt-10 overflow-hidden rounded-2xl bg-muted shadow-md lg:mt-14">
              <img
                src={installImg}
                alt="Precision installation of vertical invisible grills on an apartment balcony by SHIVA ENTERPRISES"
                width={1600}
                height={2132}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:pt-20">
            {FEATURES.map((f, i) => (
              <Reveal key={f.n} delay={i * 60}>
                <div className="hairline grid grid-cols-[auto_minmax(0,1fr)] gap-6 py-7 lg:grid-cols-[5rem_minmax(0,14rem)_minmax(0,1fr)] lg:items-baseline">
                  <span className="font-display text-xl font-bold text-primary">{f.n}</span>
                  <span className="font-display text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
                    {f.t}
                  </span>
                  <span className="col-span-2 text-sm leading-relaxed text-muted-foreground lg:col-span-1">
                    {f.d}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
