import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
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

export default function Swipe() {
  const swiperRef = useRef<SwiperRef>(null);

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
        <div className="w-[90%] mx-auto">
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
            slidesPerView={3}
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
  const [cardClicked, setCardClicked] = useState(false);
  return (
    <>
      <div className="mb-[100px] bg-white p-[30px] rounded-[8px] text-black border-[1px]">
        <img
          className="w-[120px] select-none mb-[20px]"
          src={object.image}
        ></img>
        <h1 className="text-[26px] font-[600] mb-[10px]">{object.heading}</h1>
        <p className="mb-[40px] text-[18px]">{object.description}</p>

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
        <p onClick={() => setCardClicked(true)} className="mt-[30px]">
          Læs mere
        </p>
      </div>
      {cardClicked && (
        <div className="box-border fixed top-0 left-0 w-full h-full bg-blue-500">
          <h1 onClick={() => setCardClicked(!cardClicked)}>review</h1>
        </div>
      )}
    </>
  );
};
