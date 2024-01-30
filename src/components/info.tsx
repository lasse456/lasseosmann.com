import SectionStarter from "./sectionstarter";

export default function Info() {
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto max-w-main grid grid-cols-2 gap-[170px]">
        <div className="flex flex-col justify-center py-[60px]">
          <div className="mb-[40px] flex items-center">
            <img
              className="w-[40px] rounded-full border border-white"
              src="/flags/denflag.png"
            ></img>
            <img
              className="w-[40px] ml-[-10px] rounded-full border-2 border-white"
              src="/flags/gerflag.png"
            ></img>
            <img
              className="w-[40px] ml-[-10px] rounded-full border-2 border-white"
              src="/flags/holflag.png"
            ></img>
            <img
              className="w-[40px] ml-[-10px] rounded-full border-2 border-white"
              src="/flags/norflag.png"
            ></img>
            <img
              className="w-[40px] ml-[-10px] rounded-full border-2 border-white"
              src="/flags/porflag.png"
            ></img>
            <img
              className="w-[40px] ml-[-10px] rounded-full border-2 border-white"
              src="/flags/sweflag.png"
            ></img>
            <img
              className="w-[40px] ml-[-10px] rounded-full border-2 border-white"
              src="/flags/ukflag.png"
            ></img>
            <img
              className="w-[40px] ml-[-10px] rounded-full border-2 border-white"
              src="/flags/usaflag.png"
            ></img>
          </div>
          <h1 className="text-sectionheading font-[600] text-main mb-[40px] leading-[60px]">
            For e-commerces der søger den{" "}
            <span className="text-[#0071e3]">bedste vækstpartner</span>{" "}
          </h1>
          <p className="text-description text-gray-600 font-[500]">
            En af hemmelighederne bag vores samarbejdspartneres enorme succes på
            paid social, skyldes vores content eksekvering, som er alfa-omega
            når det kommer til at skabe ekstraordinære resultater på de sociale
            medier. Vi står for alt når det kommer til content management, og
            varetager hele eksekveringen.<br></br>
            <br></br> Vi udarbejder scripts & storyboards med fokus på
            salgspsykologi, ved brug af højaktuel viden inden for
            content-creation. Ved brug af højaktuel
          </p>
        </div>

        <img src="/ads.jpg" className="object-cover h-full select-none rounded-main"></img>
      </div>
    </section>
  );
}
