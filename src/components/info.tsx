import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";
import { Link, Element } from "react-scroll";
import { ChevronRight } from "lucide-react";

export default function Info() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] pt-[160px] ctaOne:pt-[100px]">
      <div className="w-[90%] mx-auto max-w-main grid grid-cols-2 gap-[100px] skillsOne:grid-cols-1 skillsOne:gap-[0px]">
        <div className="flex flex-col justify-center py-[60px] skillsOne:pb-[20px]">
          <div className="mb-[40px] flex items-center">
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/denflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/sweflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/norflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/holflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/porflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/usaflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/ukflag.png"
              ></img>
            </div>
          </div>
          <h1 className="text-sectionheading font-[600] text-main mb-[40px] leading-[60px] ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
            {currentPath === "/en"
              ? "For e-commerce brands looking for the"
              : "For e-commerce brands der søger den"}{" "}
            <span className="text-[#0071e3]">
              {currentPath === "/en"
                ? "best growth partner"
                : "bedste vækstpartner"}
            </span>{" "}
          </h1>
          {currentPath === "/en" ? (
            <p className="text-[17px] text-gray-600 font-[500] mb-[60px]">
              To outperform your competitors, having a partner with top-notch
              e-commerce strategies and a deep understanding of how all your
              marketing channels work together is crucial.
              <br></br>
              <br></br>We are here to help your brand achieve rapid national and
              international growth while keeping a constant eye on your bottom
              line.<br></br>
              <br></br>We do what it takes to achieve the best results and are
              not bound by strict agreements.
            </p>
          ) : (
            <p className="text-[17px] text-gray-600 font-[500] mb-[60px]">
              For at overgå dine konkurrenter er det afgørende at have en
              partner med førsteklasses e-commerce-strategier og dyb forståelse
              for, hvordan alle dine marketingkanaler kan arbejde sammen.
              <br></br>
              <br></br>Vi er her for at hjælpe dit brand med hurtig national og
              international vækst, samtidig med at vi konstant holder øje med
              din reelle profit.<br></br>
              <br></br>Vi gør, hvad der skal til for at opnå de bedste
              resultater og er ikke bundet af strenge aftaler.
            </p>
          )}
          <Link
            to="cta"
            className="flex items-center justify-center gap-2 p-4 px-8 transition-colors cursor-pointer md:w-[400px] text-[14px] md:text-lg font-[600] text-white rounded-lg bg-[#0071e3]"
            smooth={true}
            duration={10}
          >
            {currentPath === "/en"
              ? "Get a free marketing analysis"
              : "Få en gratis marketinganalyse"}
            <ChevronRight size={24} color="white" />
          </Link>
        </div>
        <div className="flex flex-col justify items-center w-[70%] rounded-main ml-auto skillsOne:mx-auto skillsOne:mt-[100px] skillsOne:w-[90%]">
        <video className="ml-auto rounded-main skillsOne:mx-auto" controls width="600" height="100%" poster="/thumb.png">
        <source src={currentPath === "/en" ? "/videos/englishvid.mp4":"/videos/danishvid.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
    </section>
  );
}
