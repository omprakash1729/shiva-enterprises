import introImg from "@/assets/projects/vertical-grill-13.webp";
import { Reveal } from "./Reveal";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
export function Intro() {
  return (
    <section id="about" className="scroll-mt-16 bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-muted-foreground">Introduction</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your space.
              <br />
              Your view.
              <br />
              <span className="text-primary">Your protection.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                Your balcony should be a place to relax, not a space constantly affected by unwanted
                birds or compromised by bulky protection systems.
              </p>
              <p>
                We provide thoughtfully designed invisible bird protection nets and stainless steel
                grills that help protect your space while preserving its appearance.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-8">
            <div className="overflow-hidden">
              <img
                src={introImg}
                alt="Modern apartment balcony in Chennai fitted with invisible safety grills by SHIVA ENTERPRISES"
                width={1600}
                height={1200}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03] lg:aspect-[16/10]"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-between lg:col-span-4">
            <div className="hairline pt-6">
              <p className="font-display text-6xl font-bold text-primary lg:text-7xl">2</p>
              <p className="mt-2 text-sm font-medium text-foreground">Primary protection systems</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Invisible bird protection nets and invisible stainless steel grills, each fitted
                around your balcony's exact dimensions.
              </p>
            </div>
            <div className="hairline mt-8 pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every installation is measured, planned and fitted on site — so the result reads as
                part of your architecture, not an addition to it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
