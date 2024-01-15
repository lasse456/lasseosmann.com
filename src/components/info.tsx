import { Reveal } from "./Animations/Reveal";

export default function Info() {
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto max-w-main grid grid-cols-2 gap-[100px]">
        <div className="flex flex-col justify-center py-[60px]">
          <h1 className="text-sectionheading leading-[60px] mb-[40px]">
            High-Converting content til{" "}
            <span className="italic font-italic text-[56px] text-gray-600">
              din virksomhed
            </span>{" "}
          </h1>
          <p>
            En af hemmelighederne bag vores samarbejdspartneres enorme succes på
            paid social, skyldes vores content eksekvering, som er alfa-omega
            når det kommer til at skabe ekstraordinære resultater på de sociale
            medier. Vi står for alt når det kommer til content management, og
            varetager hele eksekveringen.<br></br>
            <br></br> Vi udarbejder scripts & storyboards med fokus på
            salgspsykologi, ved brug af højaktuel viden inden for
            content-creation. Vi arbejder med attention triggers, redigering,
            colorgrading, B-Roll, call to actions mm. Vi samarbejder med over 15
            forskellige videografer i Danmark og udlandet. Disse har vi
            headhuntet for at kunne levere det bedst mulige og skarpeste content
            til vores samarbejdspartnere. Dette er for at sikre de står bedre
            stillet end deres konkurrenter med content fra øverste hylde.
          </p>
        </div>

        <img src="/reviewbg.jpg" className="h-full object-cover"></img>
      </div>
    </section>
  );
}
