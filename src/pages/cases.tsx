import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Work from "@/components/work";
export default function Cases() {
  return (
    <Layout page={PAGES.CASES}>
      <Hero heading="Kunde Cases" section="Arbejde" />
      <Description description="We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving your most complex challenges. Our comprehensive suite of healthcare advisory, digital, and managed services drives innovation, growth, and resiliency so you can best serve your communities." />
      <Work />
    </Layout>
  );
}
