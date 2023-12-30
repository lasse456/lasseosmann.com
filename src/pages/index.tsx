import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Mission from "@/components/mission";
import Link from "next/link";

export default function Index() {
  return (
    <Layout page={PAGES.HOME}>
      <section className="mt-[100px] h-[85vh] justify-center bg-main flex flex-col bg-[linear-gradient(rgba(5,29,64,0.80),rgba(5,29,64,0.80)),url(/herobg.jpg)] bg-cover bg-center xl:h-[100%] xl:py-[100px]">
        <div className="w-[90%] mx-auto max-w-main bottom-0">
          <h1 className="text-white text-[80px] mb-[30px] text-mainFont w-[80%] leading-[90px] xl:text-[60px] xl:leading-[70px] mid:text-[45px] mid:leading-[55px]">
            Vi udvikler brugbar software til virksomheder
          </h1>
          <p className="text-white w-[60%] text-[18px] font-[300] mb-[40px] xl:text-[16px] xl:leading-[26px] mid:text-[16px] mid:leading-[26px]">
            Hos Gazella Team fokuserer vi på at udvikle unikke softwareløsninger
            til virksomheder af alle størrelser. Vi udvikler alt fra statiske
            hjemmesider til funktionelle web applikationer, og vi lægger særligt
            vægt i, at hver løsning tilpasses den enkelte kundes behov
          </p>

          <div className="flex gap-[20px]">
            <Link
              className="bg-white p-[10px] px-[16px] rounded-[50px] text-main text-[16px] font-[600]"
              href={"/cases"}
            >
              Se vores ydelser
            </Link>
            <Link
              className="bg-white p-[10px] px-[16px] rounded-[50px] text-main text-[16px] font-[600]"
              href={"/cases"}
            >
              Kunde casess
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
