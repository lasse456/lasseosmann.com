import Link from "next/link";
import { Reveal } from "./Layout/Reveal";

const memberData = [
  {
    name: "Lasse Osmann",
    position: "Founder & Head of Frontend",
    imageUrl: "/lasseosmann.jpg",
  },
  {
    name: "Simon Maribo",
    position: "Co-Founder & Head of Backend",
    imageUrl: "/simonmaribo.jpg",
  },
];

export default function Members() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <Reveal>
        <div className="w-[90%] mx-auto max-w-main grid grid-cols-2 gap-[50px]">
          <div className="grid grid-cols-2 gap-x-[30px]">
            {memberData.map((v) => (
              <MemberCard key={v} Obj={v} />
            ))}
          </div>
          <div className="border-l-[1px] p-[50px] flex flex-col justify-center">
            <h1 className="text-[24px] mb-[16px]">
              Har du en passion for software?
            </h1>
            <p className="mb-[30px]">
              Hos Gazella Team er vi altid åbne for dygtige ambitiøse mennesker
            </p>
            <Link className="text-main font-[600]" href={"/ansøg"}>
              Se ledige stillinger &#8594;
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const MemberCard = (props: any) => {
  return (
    <div>
      <img
        className="h-[300px] w-full object-cover object-top mb-[20px]"
        src={props.Obj.imageUrl}
      ></img>

      <h1 className="text-[20px] font-[500]">{props.Obj.name}</h1>
      <p className="text-gray-700">{props.Obj.position}</p>
    </div>
  );
};
