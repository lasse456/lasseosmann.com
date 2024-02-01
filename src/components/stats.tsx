import { ScrollAnimation } from "./Animations/ScrollAnimation";
import Counter from "./counter";
import { useRouter } from "next/router";

export default function Stats() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] pt-[160px] bg-white">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="flex items-center justify-between text-main text-[100px] w-[90%] mx-auto ctaOne:flex-col ctaOne:gap-[40px]">
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px]">
              <span className="flex items-center justify-center mb-[30px]">
                <Counter endValue={100} percentage={true} />
              </span>
              <p className="text-[20px] text-center text-gray-600 w-[300px] leading-[30px]">
                {currentPath === "/en" ? "Performance" : "Performance"}{" "}
                {currentPath === "/en" ? "based" : "baseret"}
              </p>
            </div>
          </div>
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px]">
              <span className="flex items-center justify-center mb-[30px]">
                <Counter endValue={62} percentage={true} />
              </span>
              <div>
                <p className="text-[20px] text-center text-gray-600 w-[300px] leading-[30px]">
                  {currentPath === "/en"
                    ? "Average profit growth in 3 months"
                    : "Gennemsnitlig vækst i profit på 3 måneder"}
                </p>
              </div>
            </div>
          </div>
          <div className="font-[600] leading-[76px]">
            <div className="mb-[30px]">
              <span className="flex items-center justify-center mb-[30px]">
                <Counter endValue={18} percentage={false} />
              </span>
              <p className="text-[20px] text-center text-gray-600 w-[300px] leading-[30px]">
                {currentPath === "/en"
                  ? "Average monthly collaboration period"
                  : "Gennemsnitlig månedlig samarbejdsperiode"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
