import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
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
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[100px]">
            <Counter endValue={4322} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          Omsætning
        </p>
      </div>,
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[30px]">
            <Counter endValue={2.4} />
          </span>
          x
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          POAS
        </p>
      </div>,
    ],
    channels: [
      <div key={1} className="flex items-center justify-center">
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
          <img className="w-[30px]" src="/metalogo.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px]" src="/tiktok.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img
            className="w-[30px] h-[30px] object-cover"
            src="/adwords.png"
          ></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
        </div>
      </div>,
    ],
  },
  {
    media: "/cases/skandi/skandi.mp4",
    brand: "/cases/skandi//skandi.png",
    description:
      "En af de førende webshops inden for mode og møbler i Norge. Vi vækstede SKANDI’s profit med 74% gennem annoncering på Meta og datadrevet content produktion.",
    results: [
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={74} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          Profit
        </p>
      </div>,
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          -
          <span className="w-[50px]">
            <Counter endValue={21} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          CPA
        </p>
      </div>,
    ],
    channels: [
      <div key={1} className="flex items-center justify-center">
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
          <img className="w-[30px]" src="/metalogo.png"></img>
        </div>
      </div>,
    ],
  },
  {
    media: "/cases/ankerstjerne/ankerstjerne.mp4",
    brand: "/cases/ankerstjerne/ankerstjerne.png",
    description:
      "Vi har hjulpet det prisvindende brand Dr.Ankerstjerne til at blive en af de hurtigst voksende webshops i Skandinavien. Og taget dem til nye markeder.",
    results: [
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[100px]">
            <Counter endValue={8820} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          Omsætning
        </p>
      </div>,
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          -
          <span className="w-[50px]">
            <Counter endValue={31} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          CAC
        </p>
      </div>,
    ],
    channels: [
      <div key={1} className="flex items-center justify-center">
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
          <img className="w-[30px]" src="/metalogo.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px]" src="/tiktok.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img
            className="w-[30px] h-[30px] object-cover"
            src="/adwords.png"
          ></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img
            className="w-[30px] h-[30px] object-cover"
            src="/pinterest.png"
          ></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
        </div>
      </div>,
    ],
  },
  {
    media: "/cases/denomo/denomo.mp4",
    brand: "/cases/denomo/denomo.png",
    description:
      "Større interiør og møbel webshop. Vi overtog casen fra et af Danmarks større bureauer og skalerede POAS med 72%. Senere i rejsen har vi hjulpet Denomo ind i et nyt marked.",
    results: [
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={72} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          POAS
        </p>
      </div>,
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          -
          <span className="w-[50px]">
            <Counter endValue={29} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          CPA
        </p>
      </div>,
    ],
    channels: [
      <div key={1} className="flex items-center justify-center">
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
          <img className="w-[30px]" src="/metalogo.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px]" src="/klaviyo.png"></img>
        </div>
      </div>,
    ],
  },
  {
    media: "/cases/marina/marina.mp4",
    brand: "/cases/marina/marina.png",
    description:
      "Kåret som det bedste økologiske hudplejemærke i Skandinavien og befinder sig på 6 markeder. Vi står for hele deres digitale kunderejse i et større udvalg af markeder.",
    results: [
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={316} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          Omsætning
        </p>
      </div>,
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          -
          <span className="w-[50px]">
            <Counter endValue={52} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          CAC
        </p>
      </div>,
    ],
    channels: [
      <div key={1} className="flex items-center justify-center">
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
          <img className="w-[30px]" src="/metalogo.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px]" src="/adwords.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
        </div>
      </div>,
    ],
  },
  {
    media: "/cases/gelblast/gelblast.mp4",
    brand: "/cases/gelblast/gelblast.png",
    description:
      "Skandinaviens største webshop inden for Gelblasters. Vi har været med fra start og vækstet dem +520% ved at håndtere marketing på tværs af hele kunde rejsen.",
    results: [
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          +
          <span className="w-[50px]">
            <Counter endValue={520} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          Omsætning
        </p>
      </div>,
      <div key={1} className="flex flex-col items-center text-center">
        <h1 className="mb-[4px] font-[600] text-main flex">
          -
          <span className="w-[50px]">
            <Counter endValue={64} />
          </span>
          %
        </h1>
        <p className="text-[16px] bg-[#0071e3] font-[500] rounded-[100px] w-[100px]">
          CAC
        </p>
      </div>,
    ],
    channels: [
      <div key={1} className="flex items-center justify-center">
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
          <img className="w-[30px]" src="/metalogo.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px]" src="/tiktok.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img
            className="w-[30px] h-[30px] object-cover"
            src="/adwords.png"
          ></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/snapchat.png"></img>
        </div>
        <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
          <img className="w-[30px] rounded-[50px]" src="/klaviyo.png"></img>
        </div>
      </div>,
    ],
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";

export default function CaseSwiper() {
  const swiperRef = useRef<SwiperRef>(null);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  function onArrowClick(direction: "prev" | "next") {
    if (swiperRef.current) {
      if (direction == "prev") {
        if (swiperRef.current.swiper.isBeginning) {
          swiperRef.current.swiper.slideTo(7);
          return;
        }
        swiperRef.current.swiper.slidePrev();
      } else {
        if (swiperRef.current.swiper.isEnd) {
          swiperRef.current.swiper.slideTo(0);
          return;
        }
        swiperRef.current.swiper.slideNext();
      }
    }
  }

  return (
    <>
      <section className="bg-[#f7f7fc] py-[100px]">
        <div className="w-[90%] mx-auto max-w-main">
          <div className="mb-[60px] text-center ctaOne:text-left">
            <SectionStarter section="cases" />
            <h1 className="text-sectionheading font-[600] text-main ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
              Et udvalg af <span className="text-[#0071e3]">succes cases</span>{" "}
            </h1>
            <p className="text-description font-[500] text-gray-600">
              Vi har skabt nogle af de hurtigst voksende e-commerce brands i
              norden
            </p>
          </div>
          <div className="flex items-center justify-end gap-2 mb-4">
            <div
              onClick={() => onArrowClick("next")}
              className="p-4 bg-white border border-gray-300 rounded shadow cursor-pointer active:scale-95"
            >
              <ArrowLeft onClick={() => onArrowClick("prev")} size={20} />
            </div>
            <div
              onClick={() => onArrowClick("next")}
              className="p-4 bg-white border border-gray-300 rounded shadow cursor-pointer active:scale-95"
            >
              <ArrowRight onClick={() => onArrowClick("next")} size={20} />
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
            spaceBetween={20}
            className="mySwiper"
          >
            {casesData.map((v, index) => (
              <SwiperSlide key={index}>
                <CaseCard object={v} background={"/worst.mp4"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

const CaseCard = ({ object, background }: { object: any; background: any }) => {
  return (
    <div>
      <div className="relative p-[10px]">
        <video
          className="pointer-events-none rounded-main bg-[linear-gradient(rgba(5,29,64,0),rgba(5,29,64,0))]"
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
              "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1))",
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
        <p className="text-main w-[90%] mx-auto mb-[20px] font-[500] text-center">
          {object.description}
        </p>
        {object.channels}
      </div>
    </div>
  );
};
