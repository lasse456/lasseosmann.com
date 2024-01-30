import { ScrollAnimation } from "./Animations/ScrollAnimation";
import Counter from "./counter";

export default function Stats() {
  return (
    <section className="py-[100px] pt-[160px] bg-white">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between text-main text-[100px] w-[90%] mx-auto">
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px]">
              <span className="flex items-center justify-center">
                <Counter endValue={100} percentage={true} />
              </span>
              <p className="text-[20px] text-center text-gray-600">
                Performance baseret
              </p>
            </div>
          </div>
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px]">
              <span className="flex items-center justify-center">
                <Counter endValue={62} percentage={true} />
              </span>
              <div>
                <p className="text-[20px] text-center text-gray-600 w-[100%]">
                  Gennemsnitlig vækst i profit på 3 måneder
                </p>
              </div>
            </div>
          </div>
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px]">
              <span className="flex items-center justify-center">
                <Counter endValue={14} percentage={false} />
              </span>
              <p className="text-[20px] text-center text-gray-600">
                Performance baseret
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
