import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Mission from "@/components/mission";
import Link from "next/link";

export default function Index() {
  return (
    <Layout page={PAGES.HOME}>
      <section className="mt-[100px] py-[140px] justify-center flex flex-col">
        <div className="w-[90%] mx-auto max-w-main bottom-0">
          <h1 className="text-[84px] text-main mb-[30px] text-mainFont w-[80%] leading-[90px] xl:text-[60px] xl:leading-[70px] mid:text-[45px] mid:leading-[55px]">
            Vi udvikler brugbar software til virksomheder
          </h1>
          <p className=" w-[60%] text-[18px] font-[300] mb-[40px] xl:text-[16px] xl:leading-[26px] mid:text-[16px] mid:leading-[26px] mid:w-[100%]">
            Hos Gazella Team fokuserer vi på at udvikle unikke softwareløsninger
            til virksomheder af alle størrelser. Vi udvikler alt fra statiske
            hjemmesider til funktionelle web applikationer, og vi lægger særligt
            vægt i, at hver løsning tilpasses den enkelte kundes behov
          </p>
        </div>
      </section>
    </Layout>
  );
}
