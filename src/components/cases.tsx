import { useState } from "react";
import { Reveal } from "./Animations/Reveal";

const casesData = [
  {
    media: "bg-[url(/media.jpg)]",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
];

const expandedCasesData = [
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "bg-[url(/media.jpg)]",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
  {
    media: "/media.jpg",
    brand: "/brand.jpg",
    trafic: "125%",
    leads: "307%",
    description:
      "Trendsales er Danmarks største og bedste bedømte secondhand markedsplads. Vi løftede deres digitale markedsføring med 307% gennem Meta, TikTok, Snapchat og content produktion.",
    link: "www.trendsales.dk",
  },
];

export default function Cases() {
  const [casesExpanded, setCasesExpanded] = useState(false);
  return (
    <section className="py-[100px] pt-[160px] z-[2] bg-white mt-[-400px] relative">
      <div className="w-[90%] mx-auto text-center max-w-main">
        <h1 className="text-sectionheading font-[500] mb-[60px] text-main">
          Cases vi er{" "}
          <span className="bg-gradient-to-r from-[#526bb9] via-[#233265] via-[#526bb9] to-[#526bb9] text-transparent bg-clip-text">
            stolte af
          </span>{" "}
        </h1>
        {casesExpanded ? (
          <div className="grid grid-cols-3 gap-[30px] mb-[80px]">
            {expandedCasesData.map((v: any) => (
              <CaseCard background={v.media} key={v} object={v} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-[30px] mb-[80px]">
            {casesData.map((v: any) => (
              <CaseCard background={v.media} key={v} object={v} />
            ))}
          </div>
        )}

        <button
          onClick={() => setCasesExpanded(!casesExpanded)}
          className="border-[1px] p-[16px] px-[40px] rounded-[100px] cursor-pointer"
        >
          {casesExpanded ? "Luk" : "Indlæs flere"}
        </button>
      </div>
    </section>
  );
}

const CaseCard = ({ object, background }: { object: any; background: any }) => {
  return (
    <div className="shadow-lg rounded-main">
      <video className="pointer-events-none" autoPlay muted loop playsInline>
        <source src="/casevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="${background} bg-cover bg-center">
        <h1>bg</h1>
      </div>
      <div className="p-[20px] ">
        <h1 className="">{object.trafic}</h1>
      </div>
    </div>
  );
};
