import { Reveal } from "./Reveal";
const STEPS = [
  {
    n: "01",
    t: "Consultation",
    d: "Understand your requirements and the type of balcony or property.",
  },
  {
    n: "02",
    t: "Measurement",
    d: "Assess the balcony dimensions and identify the most suitable installation method.",
  },
  {
    n: "03",
    t: "Installation",
    d: "Install the selected invisible net or grill system using the appropriate components.",
  },
  {
    n: "04",
    t: "Final Inspection",
    d: "Review the installation finish, coverage, alignment, and connections.",
  },
];
export function Process() {
  return (
    <section id="installation" className="scroll-mt-16 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Installation Process</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            From consultation to protection.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="border-t-2 border-foreground/80 pt-6">
                <p className="font-display text-5xl font-bold tracking-tight text-foreground/15 lg:text-6xl">
                  {s.n}
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-foreground">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
