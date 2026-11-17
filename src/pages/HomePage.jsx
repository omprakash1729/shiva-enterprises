import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Applications } from "@/components/site/Applications";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Gallery } from "@/components/site/Gallery";
import { GrillsSection } from "@/components/site/GrillsSection";
import { HeroScrub } from "@/components/site/HeroScrub";
import { Intro } from "@/components/site/Intro";
import { NetsSection } from "@/components/site/NetsSection";
import { Process } from "@/components/site/Process";
import { Solutions } from "@/components/site/Solutions";
import { Trust } from "@/components/site/Trust";
import { WhyUs } from "@/components/site/WhyUs";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
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
  );
}
