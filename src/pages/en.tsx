import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/hero";
import Reviews from "@/components/reviews";
import Skills from "@/components/skills";
import Cases from "@/components/cases";
import Info from "@/components/info";
import Stats from "@/components/stats";
import Team from "@/components/team";
import Cta from "@/components/Cta";
import Swipe from "@/components/swiper";
import CaseSwiper from "@/components/caseswiper";
import { Element } from "react-scroll";

export default function En() {
  return (
    <Layout page={PAGES.HOME}>
      <Hero />
      <Stats />
      <Element name="results">
        <CaseSwiper />
      </Element>
      <Element name="services">
        <Skills />
      </Element>
      <Info />
      <Swipe />
      <Element name="team">
        <Team />
      </Element>
      <Cta />
    </Layout>
  );
}
