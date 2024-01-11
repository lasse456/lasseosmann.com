import { Reveal } from "./Animations/Reveal";

const casesData = [
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
  return (
    <section className=" py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto text-center">
        <h1 className="text-sectionheading font-[500] mb-[60px] text-main">
          Cases vi er{" "}
          <span className="italic font-italic text-[56px] text-gray-600">
            stolte af
          </span>{" "}
        </h1>
        <div className="grid grid-cols-3 gap-[30px]">
          {casesData.map((v: any) => (
            <CaseCard key={v} object={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const CaseCard = ({ object }: { object: any }) => {
  return (
    <div className="shadow-lg rounded-main">
      <img className="rounded-t-[8px]" src={object.media}></img>
      <div className="p-[20px] ">
        <h1 className="">{object.trafic}</h1>
      </div>
    </div>
  );
};
