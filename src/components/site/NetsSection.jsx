import netsImg from "@/assets/nets-showcase.webp";
import closeupImg from "@/assets/net-closeup.webp";
import installImg from "@/assets/installation-work.webp";
import buildingImg from "@/assets/building-exterior.webp";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
const BENEFITS = [
  {
    n: "01",
    title: "Discreet Protection",
    text: "Transparent netting designed to blend into the balcony environment.",
  },
  {
    n: "02",
    title: "Clean Balcony",
    text: "Helps prevent bird entry and reduces issues associated with bird droppings and nesting.",
  },
  {
    n: "03",
    title: "Preserved Views",
    text: "Maintain natural light and outdoor visibility.",
  },
  {
    n: "04",
    title: "Customised Fit",
    text: "Solutions designed around individual balcony dimensions.",
  },
  {
    n: "05",
    title: "Professional Installation",
    text: "Carefully fitted to the balcony structure.",
  },
];
export function NetsSection() {
  return (
    <section id="nets" className="scroll-mt-16 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-muted-foreground">Invisible Bird Protection Nets</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
              Let the breeze in.
              <br />
              Keep the birds out.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:pb-2">
            <p className="leading-relaxed text-muted-foreground lg:pt-14">
              An unobtrusive protection system that helps prevent pigeons and other birds from
              entering your balcony while maintaining the appearance of your home.
            </p>
          </Reveal>
        </div>

        {/* Editorial image collage */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-6">
          <Reveal className="col-span-2 lg:col-span-7">
            <img
              src={netsImg}
              alt="Balcony after installation of transparent bird protection netting"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <img
              src={closeupImg}
              alt="Close-up of fine transparent netting stretched across a balcony railing"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={160} className="lg:col-span-5">
            <img
              src={installImg}
              alt="Installer carefully fitting netting along a balcony railing"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={220} className="col-span-2 lg:col-span-7">
            <img
              src={buildingImg}
              alt="Apartment building exterior with netted balconies blending into the facade"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-[16/10]"
            />
          </Reveal>
        </div>

        {/* How it works */}
        <Reveal className="mt-20">
          <p className="eyebrow text-muted-foreground">How it works</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                t: "Measured to your balcony",
                d: "The net is planned around your balcony's exact openings, edges and railing structure.",
              },
              {
                t: "Fixed along the edges",
                d: "Fixings follow the balcony frame so the net spans the opening under light, even tension.",
              },
              {
                t: "Birds stay outside",
                d: "The fine mesh forms a discreet barrier that birds cannot pass through — people still can enjoy the view.",
              },
            ].map((s, i) => (
              <div key={s.t} className="hairline bg-white p-6 pt-6">
                <p className="font-display text-sm font-bold text-primary">Step 0{i + 1}</p>
                <p className="mt-3 font-display text-lg font-semibold text-foreground">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Benefits */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              What good netting gives you.
            </h3>
          </Reveal>
          <div className="lg:col-span-8">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.n} delay={i * 60}>
                <div className="hairline grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 py-6 sm:grid-cols-[auto_16rem_minmax(0,1fr)]">
                  <span className="font-display text-2xl font-bold text-primary">{b.n}</span>
                  <span className="font-display text-lg font-semibold text-foreground">
                    {b.title}
                  </span>
                  <span className="col-span-2 text-sm leading-relaxed text-muted-foreground sm:col-span-1">
                    {b.text}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 flex justify-start">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_16px_40px_-16px_var(--color-primary)]"
          >
            Get a Customised Net Installation Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
