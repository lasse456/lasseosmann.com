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
  {
    name: "Simon Maribo",
    position: "Co-Founder & Head of Backend",
    imageUrl: "/lasseosmann.jpg",
  },
  {
    name: "Simon Maribo",
    position: "Co-Founder & Head of Backend",
    imageUrl: "/lasseosmann.jpg",
  },
];

export default function Members() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto grid grid-cols-4 gap-x-[30px] max-w-main">
        {memberData.map((v) => (
          <MemberCard key={v} Obj={v} />
        ))}
      </div>
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
