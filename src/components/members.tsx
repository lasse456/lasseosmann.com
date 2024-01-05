import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

const memberData = [
  {
    name: "Lasse Osmann",
    position: "Stifter & Frontend Udvikler",
    imageUrl: "/lasseosmann.jpg",
  },
  {
    name: "Simon Maribo",
    position: "Medstifter & backend Udvikler",
    imageUrl: "/simonmaribo.jpg",
  },
  {
    name: "Asger Willumsen",
    position: "SoMe Manager",
    imageUrl: "/simonmaribo.jpg",
  },
  {
    name: "Mik Lønborg",
    position: "Marketing og PR",
    imageUrl: "/emptymember.jpg",
  },
];

export default function Members() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="grid grid-cols-4 gap-x-[30px] gap-y-[30px]">
          {memberData.map((v) => (
            <MemberCard key={v} Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const MemberCard = (props: any) => {
  return (
    <Reveal>
      <div>
        <img
          className="h-[300px] w-full object-cover object-top mb-[20px]"
          src={props.Obj.imageUrl}
        ></img>

        <h1 className="text-[20px] font-[500]">{props.Obj.name}</h1>
        <p className="text-gray-700">{props.Obj.position}</p>
      </div>
    </Reveal>
  );
};
