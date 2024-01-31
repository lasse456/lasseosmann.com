import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";

export default function Team() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="mb-[60px] text-center ctaOne:text-left">
          <SectionStarter
            section={currentPath === "/en" ? "the team" : "teamet"}
          />
          <h1 className="text-sectionheading font-[600] text-main ctaOne:text-left ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
            {currentPath === "/en"
              ? "Hyper-specialized"
              : "Hyper-specialiseret team inden for"}{" "}
            <span className="text-[#0071e3]">
              {currentPath === "/en" ? "e-commerce team" : "e-commerce"}
            </span>{" "}
          </h1>
          <p className="text-description text-gray-600 mx-auto font-[500] w-[70%] ctaOne:text-left ctaOne:w-[90%] ctaOne:mr-auto ctaOne:ml-0">
            {currentPath === "/en"
              ? "We have spent the last 4 years creating some of the fastest-growing e-commerce brands in Europe. We have no desire to evolve into a large, average agency with many employees. We want to remain a small team of specialists delivering the absolute best results in the industry for e-commerce businesses."
              : "Vi har de seneste 4 år skabt nogle af de hurtigst voksende e-commerce brands i Europa. Vi har ingen ønsker om at udvikle os til et stort, gennemsnitligt bureau med mange ansatte. Tværtimod vil vi forblive et lille team af specialister, der leverer de absolut bedste resultater i branchen for e-commerce virksomheder."}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[30px] teamOne:grid-cols-1">
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] flex items-center gap-[20px] border-[1px]">
            <img
              className="w-[80px] h-[80px] object-cover rounded-[100px]"
              src="/gustav.jpg"
            ></img>
            <div>
              <h1 className="text-[26px] font-[600] mb-[0px]">
                Gustav Walsted
              </h1>
              <p className="text-[20px] text-gray-600">Stifter</p>
            </div>
          </div>
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] flex items-center gap-[20px] border-[1px]">
            <img
              className="w-[80px] h-[80px] object-cover rounded-[100px]"
              src="/gustav.jpg"
            ></img>
            <div>
              <h1 className="text-[26px] font-[600] mb-[0px]">Tobias Nissen</h1>
              <p className="text-[20px] text-gray-600">CMO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
