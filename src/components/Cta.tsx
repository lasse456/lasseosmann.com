import { Check, CheckCircle } from "lucide-react";
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
];

export default function Cta() {
  return (
    <section className="grid grid-cols-2 border-y-[1px]">
      <div className="max-w-main bg-white py-[100px]">
        <div className="w-[90%] ml-auto max-w-[650px]">
          <div className="flex items-center gap-[10px] mb-[30px]">
            <img className="w-[140px]" src="/trust.svg"></img>
            <p className="text-gray-600">4.5/5 - Trustpilot</p>
          </div>
          <h1 className="text-sectionheading leading-[60px] w-[80%] mb-[20px] text-main">
            Book en gratis performance analyse
          </h1>
          <p className="w-[70%] text-gray-600 mb-[40px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <div className="flex flex-col gap-[20px] mb-[60px]">
            <div className="flex items-center gap-[10px] text-gray-600">
              <CheckCircle className="text-[#0071e3]" />
              <p>Helt uforpligtende</p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600">
              <CheckCircle className="text-[#0071e3]" />
              <p>Gratis analyse</p>
            </div>
            <div className="flex items-center gap-[10px] text-gray-600">
              <CheckCircle className="text-[#0071e3]" />
              <p>Overblik af vækstpotentiale</p>
            </div>
          </div>
          <div className="w-[100%]">
            <Slider
              width="500px"
              duration={14}
              pauseOnHover={true}
              blurBorders={true}
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
      </div>
      <div className="max-w-main bg-[#f7f7fc] py-[100px]">
        <div className="w-[90%] mr-auto max-w-[650px] flex flex-col justify-center items-center">
          <div className="bg-white w-[80%] p-[30px] border-[1px] rounded-main flex flex-col gap-[30px]">
            <h1 className="text-[30px] text-main font-[600] border-b-[2px] border-[#0071e3]">
              Starten på din vækstrejse
            </h1>
            <div>
              <p className="mb-[12px]">Hvilken hjemmeside skal vi analysere?</p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main"
                placeholder="www.eksempel.com"
              ></input>
            </div>
            <div>
              <p className="mb-[12px]">Dit fulde navn</p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main"
                placeholder="Eg. Gustav Walsted"
              ></input>
            </div>
            <div>
              <p className="mb-[12px]">Din foretrukne e-mail</p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] rounded-main"
                placeholder="navn@gmail.com"
              ></input>
            </div>
            <div>
              <p className="mb-[12px]">Noter til Coad</p>
              <input
                className="bg-[#f7f7fc] border-[1px] w-full p-[14px] pb-[100px] rounded-main"
                placeholder="Har i mulighed for at være ekstra opmærksomme på ..."
              ></input>
            </div>
            <button className="rounded-[8px] bg-[#0071e3] text-white p-button02 font-[500]">
              Anmod om analysen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({ object }: { object: any }) => {
  return (
    <div className="mr-[40px] bg-white p-[30px] rounded-[8px] border-[1px] text-black">
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
