import { Reveal } from "./Animations/Reveal";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className=" py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-sectionheading font-[500] mb-[60px] text-center text-main">
          Resultater vi er{" "}
          <span className="italic font-italic text-[56px] text-gray-600">
            stotle af
          </span>{" "}
          <CountUp start={0} end={145} duration={2} delay={0} />
        </h1>
      </div>
    </section>
  );
}
