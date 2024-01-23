import { useState } from "react";
import Counter from "./counter";
import SectionStarter from "./sectionstarter";
import Slider from "react-infinite-logo-slider";

const casesData = [
  {
    media: "/cases/castillo/castillo.mp4",
    brand: "/cases/castillo//castillo.png",
    description:
      "Vi har vækstet Callisto Jewellery kraftigt siden vi startede samarbejdet for 15 måneder siden. Vi står for hele deres digitale kunderejse i både Danmark og Sverige.",
    results: [
      <div className="flex flex-col items-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={4322} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          omsætning
        </p>
      </div>,
      <div className="flex flex-col items-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={2.4} />
          </span>
          x
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          POAS
        </p>
      </div>,
    ],
  },
  {
    media: "/cases/skandi/skandi.mp4",
    brand: "/cases/skandi//skandi.png",
    description:
      "En af de førende webshops inden for mode og møbler i Norge. Vi vækstede SKANDI’s profit med 74% gennem annoncering på Meta og datadrevet content produktion.",
    results: [
      <div className="flex flex-col items-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={100} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          roi
        </p>
      </div>,
      <div className="flex flex-col items-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={100} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          roi
        </p>
      </div>,
    ],
  },
  {
    media: "/cases/ankerstjerne/ankerstjerne.mp4",
    brand: "/cases/ankerstjerne/ankerstjerne.png",
    description:
      "Vi har hjulpet det prisvindende brand Dr.Ankerstjerne til at blive en af de hurtigst voksende webshops i Skandinavien. Og taget dem til nye markeder, ved at stå for alt deres betalte markedsføring.",
    results: [
      <div className="flex flex-col items-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={100} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          roi
        </p>
      </div>,
      <div className="flex flex-col items-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={100} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          roi
        </p>
      </div>,
    ],
  },
];

export default function Cases() {
  const [casesExpanded, setCasesExpanded] = useState(false);
  return (
    <section className="py-[150px] pt-[160px] z-[2] bg-[#f7f7fc]">
      <div className="w-[90%] mx-auto text-center max-w-main">
        <div className="mb-[60px]">
          <SectionStarter section="resultater" />
          <h1 className="text-sectionheading font-[600] text-main">
            Et udvalg af <span className="text-[#0071e3]">succes cases</span>{" "}
          </h1>
          <p className="text-description text-gray-600 font-[500]">
            Vi har skabt nogle af de hurtigst voksende e-commerce brands i
            norden
          </p>
        </div>
        <Slider
          width="500px"
          duration={30}
          pauseOnHover={true}
          blurBorders={true}
          blurBoderColor={"#f7f7fc"}
        >
          {casesData.map((v) => (
            <Slider.Slide key={v}>
              <CaseCard object={v} background={"/worst.mp4"} />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const CaseCard = ({ object, background }: { object: any; background: any }) => {
  return (
    <div className="mr-[50px]">
      <div className="relative p-[10px]">
        <video
          className="pointer-events-none rounded-main bg-[linear-gradient(rgba(5,29,64,0),rgba(5,29,64,1))]"
          autoPlay
          muted
          loop
          playsInline
          width="600"
        >
          <source src={object.media} type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%", // Adjust the height of the gradient overlay as needed
            background:
              "linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 1))",
            pointerEvents: "none",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
        <div className="absolute top-[20px] flex justify-center items-center w-full">
          <div className="bg-white mt-[10px] p-[20px] py-[10px] h-[70px] rounded-main flex flex-col items-center justify-center">
            <img className="w-[70px]" src={object.brand}></img>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="w-[80%] mx-auto flex text-white justify-center gap-[40px] text-[30px]">
          {object.results.map((v: any) => v)}
        </div>
      </div>
      <div className="p-[20px] bg-white rounded-b-main py-[50px] pt-[24px] pb-[0px]">
        <p className="text-main w-[80%] mx-auto mb-[20px] font-[500]">
          {object.description}
        </p>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
          <img className="w-[30px]" src="/metalogo.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px]" src="/tiktok.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
        </div>
      </div>
    </div>
  );
};
