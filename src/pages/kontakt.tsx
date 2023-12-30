import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";

export default function Kontakt() {
  return (
    <Layout page={PAGES.TEAM}>
      <section className="mt-[100px]">
        <div className="w-[90%] mx-auto max-w-main py-[100px]">
          <h1 className="text-main text-[60px] mb-[20px] w-[70%] leading-[70px]">
            Lad os snakke om mulighederne ved dit kommende projekt
          </h1>
          <p className="w-[70%] text-[20px] text-gray-600 mb-[60px] font-[300]">
            We bring together public and commercial healthcare organizations,
            offering a 360-degree industry approach to solving your most complex
            challenges. Our comprehensive suite of healthcare advisory, digital,
            and managed services drives innovation, growth, and resiliency so
            you can
          </p>
          <div className="flex gap-[40px]">
            <h1 className="text-[20px] text-main">+45 5069 6272</h1>
            <h1 className="text-[20px] text-main">kontakt@gazellateam.com</h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}
