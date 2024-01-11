import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Link from "next/link";
import Hero from "@/components/hero";
import Reviews from "@/components/reviews";
import Skills from "@/components/skills";
import Cases from "@/components/cases";
import Info from "@/components/info";
import Stats from "@/components/stats";

export default function Index() {
  return (
    <Layout page={PAGES.HOME}>
      <Hero />
      <Cases />
      <Skills />
      <Stats />
      <Reviews />
      <Info />
    </Layout>
  );
}
