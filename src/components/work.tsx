import Link from "next/link";

const workData = [
  {
    company: "Centox.io",
    heading: "En discord-fokuseret webapp til ledelse af applikationer",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl: "/centox.jpg",
    url: "https://centox.io/",
  },
  {
    company: "Unge Ivaerksaettere",
    heading: "Unik skrædersyet hjemmeside til at fremstå professionel online",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl: "/ui.jpg",
    url: "https://ui.plexit.group/",
  },
];

export default function Work() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto grid grid-cols-2 gap-x-[40px] gap-y-[40px] max-w-main small:grid-cols-1">
        {workData.map((v) => (
          <WorkCard Obj={v} key={v} />
        ))}
      </div>
    </section>
  );
}

const WorkCard = (props: any) => {
  return (
    <div>
      <img
        className="h-[300px] w-full object-cover object-top small:object-top"
        src={props.Obj.imageUrl}
      ></img>
      <div className="border-[1px] p-[40px]">
        <p className="mb-[20px]">{props.Obj.company}</p>
        <h1 className="text-[24px] font-[500] w-[70%] mb-[16px]">
          {props.Obj.heading}
        </h1>
        <p className="text-gray-600 mb-[30px]">{props.Obj.description}</p>
        <Link className="font-[600] text-main" href={props.Obj.url}>
          Se det færdige produkt &#8594;
        </Link>
      </div>
    </div>
  );
};
