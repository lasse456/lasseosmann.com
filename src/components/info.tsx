import { ScrollAnimation } from "./Animations/ScrollAnimation";

export default function Info() {
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto max-w-main grid grid-cols-2 gap-[170px]">
        <div className="flex flex-col justify-center py-[60px]">
          <h1 className="text-sectionheading font-[500] text-main mb-[40px] leading-[60px]">
            Vi kan ikke alt, men her er vi{" "}
            <span className="text-[#0071e3]">specialister</span>{" "}
          </h1>
          <p className="text-description text-gray-600">
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

        <img src="/ads.jpg" className="h-full object-cover rounded-main"></img>
      </div>
    </section>
  );
}
