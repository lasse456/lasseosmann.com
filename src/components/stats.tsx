import { ScrollAnimation } from "./Animations/ScrollAnimation";
import Counter from "./counter";

export default function Stats() {
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto">
        <div className="mb-[60px] text-center">
          <h1 className="text-sectionheading font-[500] text-main">
            Resultater vi er{" "}
            <span className="bg-gradient-to-r from-[#526bb9] via-[#233265] via-[#526bb9] to-[#526bb9] text-transparent bg-clip-text">
              stolte af
            </span>{" "}
          </h1>
          <p className="text-description text-gray-600">
            We&apos;ve analyzed the data and have compelling statistics to
            share.
          </p>
        </div>
        <div className="flex justify-between text-main text-[100px] w-[60%] mx-auto">
          <div>
            <Counter endValue={100} />
            <p className="text-[20px] text-gray-600 text-center">
              Leads genereret
            </p>
          </div>
          <div>
            <Counter endValue={100} />
            <p className="text-[20px] text-gray-600 text-center">
              Leads genereret
            </p>
          </div>{" "}
          <div>
            <Counter endValue={100} />
            <p className="text-[20px] text-gray-600 text-center">
              Leads genereret
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
