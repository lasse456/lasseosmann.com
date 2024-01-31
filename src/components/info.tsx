import SectionStarter from "./sectionstarter";

export default function Info() {
  return (
    <section className="py-[100px] pt-[160px] ctaOne:pt-[100px]">
      <div className="w-[90%] mx-auto max-w-main grid grid-cols-2 gap-[100px] skillsOne:grid-cols-1 skillsOne:gap-[0px]">
        <div className="flex flex-col justify-center py-[60px] skillsOne:pb-[20px]">
          <div className="mb-[40px] flex items-center">
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/denflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/sweflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/norflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/holflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/porflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/usaflag.png"
              ></img>
            </div>
            <div className="border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
              <img
                className="w-[40px] rounded-full border border-white"
                src="/flags/ukflag.png"
              ></img>
            </div>
          </div>
          <h1 className="text-sectionheading font-[600] text-main mb-[40px] leading-[60px] ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
            For e-commerces der søger den{" "}
            <span className="text-[#0071e3]">bedste vækstpartner</span>{" "}
          </h1>
          <p className="text-[17px] text-gray-600 font-[500] mb-[60px]">
            For at overgå dine konkurrenter er det afgørende at have en partner
            med førsteklasses e-commerce-strategier og dyb forståelse for,
            hvordan alle dine marketingkanaler kan arbejde sammen.<br></br>
            <br></br>Vi er her for at hjælpe dit brand med hurtig national og
            international vækst, samtidig med at vi konstant holder øje med din
            faktiske profit.<br></br>
            <br></br>Vi gør, hvad der skal til for at opnå de bedste resultater
            og er ikke bundet af strenge aftaler.
          </p>
          <button className="rounded-[8px] bg-[#0071e3] text-white p-button02 font-[500] w-[300px]">
            Book et uforpligtende møde
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <img
            src="/ads.jpg"
            className="object-cover h-[80%] select-none rounded-main"
          ></img>
        </div>
      </div>
    </section>
  );
}
