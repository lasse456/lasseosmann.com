import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Mission from "@/components/mission";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Reveal } from "@/components/Animations/Reveal";

export default function Index() {
  return (
    <Layout page={PAGES.HOME}>
      <section className="py-[100px] pt-[180px] bg-[linear-gradient(rgba(5,29,64,0.40),rgba(5,29,64,1)),url(/flyout.jpg)]">
        <Reveal>
          <div className="w-[90%] mx-auto max-w-main text-white">
            <h1 className="text-[70px] w-[75%] leading-[80px] font-[600 mb-[20px]">
              Vi udvikler brugbar software til projekter og virksomheder
            </h1>
            <p className="text-[20px] w-[60%] mb-[40px]">
              We bring together public and commercial healthcare organizations,
              offering a 360-degree industry approach to solving your,
              360-degree
            </p>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
