import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Work from "@/components/work";
export default function Cases() {
  return (
    <Layout page={PAGES.CASES}>
      <Hero heading="Kunde Cases" section="Arbejde" />
      <Description description="Hos Gazella Team er kunden altid i fokus. Gennem hele processen fra ide til færdigt produkt, sørger vi for, at kundens vision og krav til projektet overholdes, i takt med at vi efter aftale supplerer med vores faglige viden og forslag til forbedring." />
      <div className="py-[60px] border-b-[1px]">
        <div className="w-[90%] mx-auto max-w-main">
          <h1>Skal dit projekt være vores første case?</h1>
        </div>
      </div>
    </Layout>
  );
}
