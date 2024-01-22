import Script from "next/script";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="bubble-hero heroback z-[0] py-[100px] relative bg-white ">
      <Script src="/js/bubbles.js"/>
      <div className="w-[90%] mx-auto max-w-main grid grid-cols-2 gap-[100px]">
        <div className="z-10 flex flex-col justify-center">
          <div className="flex mb-[20px]">
            <div className="flex items-center gap-[10px]">
              <img className="w-[140px]" src="/trust.svg" alt="Trustpilot"/>
              <p className="text-gray-600">4.5/5 - Trustpilot</p>
            </div>
          </div>

          <h1 className="text-heading font-[600] text-main leading-[76px] mb-[30px]">
            Et performance baseret agency
          </h1>

          <p className="text-description font-[400] text-gray-600 mb-[40px]">
            Vi er et lille team af dedikerede nørder, der stræber efter at blive
            de førende inden for paid social og e-mail marketing.
          </p>
          <div className="flex gap-[30px] mb-[50px]">
            <div className="flex items-center justify-center gap-[10px] text-main">
              <CheckCircle2 size={28} />
              <h2 className="text-[20px]">+4 års erfaring</h2>
            </div>
            <div className="flex items-center justify-center gap-[10px] text-main">
              <CheckCircle2 size={28} />
              <h2 className="text-[20px]">Ingen binding</h2>
            </div>
          </div>
          <div className="flex">
            <button className="rounded-[8px] bg-[#0071e3] text-white p-button02 font-[500]">
              Få en gratis analyse
            </button>
          </div>
        </div>
        <div className="z-10 flex flex-col items-end justify-center">
          <img className="rounded-main w-[500px]" src="/gustav.jpg"></img>
        </div>
      </div>
      <div className="bubbles"/>
    </section>
  );
}
