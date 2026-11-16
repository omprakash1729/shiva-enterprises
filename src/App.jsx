import { Toaster } from "sonner";
import { Applications } from "@/components/site/Applications";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { GrillsSection } from "@/components/site/GrillsSection";
import { HeroScrub } from "@/components/site/HeroScrub";
import { Intro } from "@/components/site/Intro";
import { Navbar } from "@/components/site/Navbar";
import { NetsSection } from "@/components/site/NetsSection";
import { Process } from "@/components/site/Process";
import { Solutions } from "@/components/site/Solutions";
import { Trust } from "@/components/site/Trust";
import { WhyUs } from "@/components/site/WhyUs";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroScrub />
        <Intro />
        <Solutions />
        <NetsSection />
        <GrillsSection />
        <BeforeAfter />
        <Process />
        <Applications />
        <WhyUs />
        <Trust />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </>
  );
}
