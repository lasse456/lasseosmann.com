import { Reveal } from "./Animations/Reveal";
import { CheckCircle2 } from "lucide-react";
import ConicBlurEffect from "./coinblur";

export default function Hero() {
  return (
    <section className=" py-[100px] pb-[30px] pt-[160px]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-center text-heading font-[500] text-main">
          A <span className="italic font-italic text-[88px]">performance</span>{" "}
          based agency
        </h1>

        <p className="text-center text-description w-[70%] mx-auto text-second mb-[40px]">
          Vi er et lille team af dedikerede nørder, der stræber efter at blive
          de førende inden for paid social og e-mail marketing.
        </p>
        <div className="flex items-center justify-center gap-[30px] mb-[50px]">
          <div className="flex items-center justify-center gap-[10px]">
            <CheckCircle2 size={28} />
            <h2 className="text-[22px]">+4 års erfaring</h2>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <CheckCircle2 size={28} />
            <h2 className="text-[22px]">Ingen binding</h2>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="rounded-[60px] bg-gradient-to-r from-blue-800 to-blue-900 text-white p-button02 font-[500]">
            Få en gratis analyse
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mt-[-210px]">
          <ConicBlurEffect />
        </div>
        <div className="mt-[-300px]">
          <ConicBlurEffect />
        </div>
      </div>
    </section>
  );
}
