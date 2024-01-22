import Script from "next/script";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bubble-hero heroback z-[0] py-[100px] relative bg-white ">
      <Script src="/js/bubbles.js"/>
      <div className="w-[90%] mx-auto max-w-5xl flex flex-col gap-[30px] justify-center items-center">
        <a href="https://trustpilot.com/review/coad.dk" className="cursor-pointer" target="_blank">
          <img className="w-[160px]" src="/trust.svg" alt="Trustpilot"/>
        </a>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <h1 className="text-3xl font-semibold leading-normal text-center md:text-6xl text-main">
            Vi skaber brancheførende resultater for e-commerce brands.
          </h1>
          <h2 className="max-w-2xl mx-auto font-normal leading-normal text-center text-md md:text-xl text-main">
            Med en langsigtet holistiske tilgang har vi udelukkende fokus på at vækste din profit. Vi varetager hele den digitale kunderejse
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center justify-center gap-2 p-4 px-8 transition-colors rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-br active:scale-[0.99]">
            <p className="text-lg font-bold text-white">Få en gratis marketingsanalyse</p>
            <ChevronRight size={24} color="white"/>
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
          <img src="./partners/google.png" className="h-[50px]"/>
          <img src="./partners/klaviyo.png" className="h-[50px]"/>
          <img src="./partners/meta.png" className="h-[50px]"/>
          <img src="./partners/shopify-v2.png" className="h-[50px]"/>
        </div>
      </div>
      <div className="bubbles"/>
    </section>
  );
}
