import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Members from "@/components/members";
export default function Team() {
  return (
    <Layout page={PAGES.TEAM}>
      <Hero heading="Holdet Bag" section="om os" />
      <Description description="We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving your most complex challenges. Our comprehensive suite of healthcare advisory, digital, and managed services drives innovation, growth, and resiliency so you can best serve your communities." />
      <Members />
    </Layout>
  );
}
