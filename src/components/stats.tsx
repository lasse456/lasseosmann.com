import { ScrollAnimation } from "./Animations/ScrollAnimation";
import Counter from "./counter";

export default function Stats() {
  return (
    <section className=" py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-sectionheading font-[500] mb-[60px] text-center text-main">
          Resultater vi er{" "}
          <span className="italic font-italic text-[56px] text-gray-600">
            stotle af
          </span>{" "}
        </h1>
        <div className="flex justify-between justify-center text-[60px] w-[60%] mx-auto">
          <Counter endValue={100} />
          <Counter endValue={100} />
          <Counter endValue={100} />
        </div>
      </div>
    </section>
  );
}
