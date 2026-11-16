import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
const FAQS = [
  [
    "What are invisible bird protection nets?",
    "Invisible bird protection nets are fine, transparent mesh systems fixed around a balcony's openings. They form a discreet barrier that helps prevent pigeons and other birds from entering, while remaining almost invisible from inside and outside.",
  ],
  [
    "Will the net block natural light?",
    "The netting is designed to be transparent, so it preserves natural light and outdoor visibility. Most people stop noticing it within days of installation.",
  ],
  [
    "Can pigeons enter through the invisible net?",
    "The mesh spacing and tension are chosen so that pigeons and similarly sized birds cannot pass through or force their way in. The net is fixed along the balcony edges so there are no entry gaps.",
  ],
  [
    "What are invisible stainless steel grills?",
    "Invisible grills are thin, nylon-coated stainless steel wires installed vertically or horizontally across a balcony opening. They provide a minimal visual profile compared with conventional heavy grills.",
  ],
  [
    "What is the difference between invisible nets and invisible grills?",
    "Nets are a transparent mesh barrier primarily aimed at keeping birds out of the balcony. Grills are a stainless steel wire system providing a more structural barrier with a minimal look. We assess your balcony and recommend the option that suits your space.",
  ],
  [
    "What material is used in the invisible grills?",
    "Our grill system uses 316 marine-grade stainless steel wires with a nylon-coated finish, installed with aluminium mounting frames and steel connection components.",
  ],
  [
    "Can invisible grills be installed vertically and horizontally?",
    "Yes. The wire arrangement can be installed in a clean vertical or horizontal configuration, chosen based on your balcony's dimensions and the look you prefer.",
  ],
  [
    "How long do invisible grills last?",
    "The stainless steel system is presented with an expected durability of up to 20 years, depending on installation conditions. This is an expectation, not a guaranteed warranty.",
  ],
  [
    "Can the system be customised for my balcony?",
    "Yes. Every installation is measured and planned around your balcony's exact dimensions, openings and railing structure.",
  ],
  [
    "How do I request an installation quote?",
    "Use the enquiry form in the contact section, call +91 90366 57577, or message us on WhatsApp. We'll discuss your balcony and arrange a site visit for measurement.",
  ],
];
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-muted-foreground">FAQ</p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Questions, answered plainly.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Can't find what you're looking for? Call us on{" "}
              <a href="tel:+919036657577" className="font-semibold text-primary">
                +91 90366 57577
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map(([q, a], i) => (
                <AccordionItem key={q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline lg:text-lg">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
