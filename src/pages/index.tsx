import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Mission from "@/components/mission";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Reveal } from "@/components/Layout/Reveal";

export default function Index() {
  return (
    <Layout page={PAGES.HOME}>
      <section className="py-[100px] pt-[180px]">
        <Reveal>
          <div className="w-[90%] mx-auto max-w-main">
            <h1 className="text-[70px] w-[75%] leading-[80px] font-[600] text-main mb-[20px]">
              Vi udvikler brugbar software til projekter og virksomheder
            </h1>
            <p className="text-[20px] w-[60%] mb-[40px]">
              We bring together public and commercial healthcare organizations,
              offering a 360-degree industry approach to solving your,
              360-degree
            </p>
            <div className="flex gap-[40px]">
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[14px] items-center">
                  <img className="w-[30px] object-cover" src="/check.png"></img>
                  <h1 className="font-[600] text-[18px] text-main">
                    Tilfredshedsgaranti
                  </h1>
                </div>
                <div className="flex gap-[14px] items-center">
                  <img className="w-[30px] object-cover" src="/check.png"></img>
                  <h1 className="font-[600] text-[18px] text-main">
                    Gratis Support
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[14px] items-center">
                  <img className="w-[30px] object-cover" src="/check.png"></img>
                  <h1 className="font-[600] text-[18px] text-main">
                    Kundefokus
                  </h1>
                </div>
                <div className="flex gap-[14px] items-center">
                  <img className="w-[30px] object-cover" src="/check.png"></img>
                  <h1 className="font-[600] text-[18px] text-main">
                    Rådgivning og sparing
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
