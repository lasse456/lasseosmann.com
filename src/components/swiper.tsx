import React, { useMemo, useRef, useState } from "react";
// Import Swiper React components
import SectionStarter from "./sectionstarter";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
// hey
const reviewData = [
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førheng gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhenz gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førheng gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhenz gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førheng gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhenz gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førheng gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhenz gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";

export default function Swipe() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const swiperRef = useRef<SwiperRef>(null);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  function onArrowClick(direction: "prev" | "next") {
    if (swiperRef.current) {
      if (direction == "prev") {
        if (swiperRef.current.swiper.isBeginning) {
          swiperRef.current.swiper.slideTo(
            swiperRef.current.swiper.slides.length - 1
          );
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
            <SectionStarter
              section={currentPath === "/en" ? "reviews" : "anmeldelser"}
            />
            <h1 className="text-sectionheading font-[600] text-main ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
              {currentPath === "/en"
                ? "Happy brands are our"
                : "Glade kunder er vores"}{" "}
              <span className="text-[#0071e3]">
                {currentPath === "/en" ? "top priority" : "topprioritet"}
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-end gap-2 mb-4">
            <div
              onClick={() => onArrowClick("prev")}
              className="p-4 bg-white border border-gray-300 rounded shadow cursor-pointer active:scale-95"
            >
              <ArrowLeft size={20} />
            </div>
            <div
              onClick={() => onArrowClick("next")}
              className="p-4 bg-white border border-gray-300 rounded shadow cursor-pointer active:scale-95"
            >
              <ArrowRight size={20} />
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
            spaceBetween={30}
            className="mySwiper"
          >
            {reviewData.map((v, index) => (
              <SwiperSlide key={index}>
                <ReviewCard key={index} object={v} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

const ReviewCard = ({ object }: { object: any }) => {
  const [readMore, setReadmore] = useState(false);

  const description = useMemo(() => {
    return object.description.length > 150 && !readMore
      ? object.description.slice(0, 150) + "..."
      : object.description;
  }, [object.description, readMore]);

  return (
    <>
      <div className="mb-[100px] bg-white p-[30px] rounded-[8px] text-black border-[1px]">
        <img
          className="w-[120px] select-none mb-[20px]"
          src={object.image}
        ></img>
        <h1 className="text-[26px] font-[600] mb-[10px]">{object.heading}</h1>
        <p className="mb-[40px] text-[18px]">{description}</p>

        <div className="flex gap-[20px] items-center">
          <img
            className="w-[60px] h-[60px] object-cover rounded-[60px]"
            src={object.founder}
          ></img>
          <div className="text-gray-600">
            <p className="text-[18px] ">{object.name}</p>
            <p className="text-[18px]">{object.position}</p>
          </div>
        </div>
        <p
          onClick={() => setReadmore(!readMore)}
          className="mt-[30px] cursor-pointer hover:underline"
        >
          {readMore ? "Vis mindre" : "Læs mere"}
        </p>
      </div>
    </>
  );
};
