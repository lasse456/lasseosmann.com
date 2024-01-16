import { ScrollAnimation } from "./Animations/ScrollAnimation";

export default function Online() {
  return (
    <div className="flex items-center gap-[10px]">
      <img
        className="w-[40px] rounded-[40px] border-[2px] border-white"
        src="/gustav.jpg"
      ></img>
      <div className="flex items-center gap-[5px]">
        <img className="w-[16px]" src="/online.svg"></img>
        <p className="text-white">Online</p>
      </div>
    </div>
  );
}
