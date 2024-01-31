import { ScrollAnimation } from "./Animations/ScrollAnimation";
import Slider from "react-infinite-logo-slider";

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
];
export default function Reviews() {
  return (
    <section className="bg-[#f7f7fc] py-[100px] pb-[50px]">
      <div className="text-white">
        <h1 className="text-sectionheading font-[500] mb-[60px] text-center text-main">
          Glade kunder er vores{" "}
          <span className="text-[#0071e3]">top-prioritet</span>{" "}
        </h1>
        <div>
          <Slider
            width="500px"
            duration={30}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {reviewData.map((v) => (
              <Slider.Slide key={v}>
                <ReviewCard object={v} />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({ object }: { object: any }) => {
  return (
    <div className="mr-[40px] mb-[100px] bg-white p-[30px] rounded-[8px] text-black border-[1px]">
      <img className="w-[120px] mb-[20px]" src={object.image}></img>
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
    </div>
  );
};
