import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";

export default function Baggrund() {
  return (
    <Layout page={PAGES.CASES}>
      <Hero heading="Baggrund" section="Om os" />
      <Description description="We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving your most complex challenges. Our comprehensive suite of healthcare advisory, digital, and managed services drives innovation, growth, and resiliency so you can best serve your communities." />
    </Layout>
  );
}
