import installImg from "@/assets/installation-work.webp";
import { Reveal } from "./Reveal";
const FEATURES = [
  { n: "01", t: "Quality Materials", d: "Selected materials chosen for the space they protect." },
  { n: "02", t: "Customised Solutions", d: "Every balcony measured and planned individually." },
  {
    n: "03",
    t: "Professional Installation",
    d: "Fitted carefully, finished cleanly, checked on site.",
  },
  {
    n: "04",
    t: "Minimal Visual Impact",
    d: "Protection designed to disappear into your architecture.",
  },
  { n: "05", t: "Attention to Detail", d: "Edges, corners and fixings finished with care." },
  { n: "06", t: "Reliable Customer Support", d: "We stay reachable long after the installation." },
];
export function WhyUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-muted-foreground">Why Choose Us</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
              Protection is in the details.
            </h2>
            <img
              src={installImg}
              alt="Installer tensioning netting along a balcony railing"
              width={1024}
              height={1024}
              loading="lazy"
              className="mt-10 aspect-[4/5] w-full object-cover lg:mt-14"
            />
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
