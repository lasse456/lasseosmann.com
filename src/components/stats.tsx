import { ScrollAnimation } from "./Animations/ScrollAnimation";
import Counter from "./counter";

export default function Stats() {
  return (
    <section className="py-[100px] pt-[160px] bg-[#f7f7fc]">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between text-main text-[100px] w-[60%] mx-auto">
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px] w-[100px]">
              <span className="flex items-center justify-start">
                <Counter endValue={100} percentage={true} />
              </span>
            </div>
            <p className="text-[20px] text-gray-400 text-center leading-[0px]">
              Leads genereret
            </p>
          </div>
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px] w-[100px]">
              <span className="flex items-center justify-start">
                <Counter endValue={62} percentage={true} />
              </span>
            </div>
            <p className="text-[20px] text-gray-400 text-center leading-[0px]">
              Leads genereret
            </p>
          </div>
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px] w-[100px]">
              <span className="flex items-center justify-start">
                <Counter endValue={14} percentage={false} />
              </span>
            </div>
            <p className="text-[20px] text-gray-400 text-center leading-[0px]">
              Leads genereret
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
