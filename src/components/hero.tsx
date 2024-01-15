import { Reveal } from "./Animations/Reveal";
import { CheckCircle2 } from "lucide-react";
import ConicBlurEffect from "./coinblur";

export default function Hero() {
  return (
    <section className="z-[0] py-[100px] pb-[30px] pt-[160px] relative bg-gradient-to-r from-[#0e152e] via-[#233265] via-[#233265] via-[#233265 to-[#0e152e]">
      <div className="w-[90%] mx-auto max-w-main">
        {" "}
        <h1 className="text-center text-heading font-[500] text-white">
          A performance based agency
        </h1>
        <p className="text-center text-description w-[60%] mx-auto text-gray-200 mb-[40px]">
          Vi er et lille team af dedikerede nørder, der stræber efter at blive
          de førende inden for paid social og e-mail marketing.
        </p>
        <div className="flex items-center justify-center gap-[30px] mb-[50px]">
          <div className="flex items-center justify-center gap-[10px] text-white">
            <CheckCircle2 size={28} />
            <h2 className="text-[20px]">+4 års erfaring</h2>
          </div>
          <div className="flex items-center justify-center gap-[10px] text-white">
            <CheckCircle2 size={28} />
            <h2 className="text-[20px]">Ingen binding</h2>
          </div>
        </div>
        <div className="flex items-center justify-center mb-[50px]">
          <button className="rounded-[60px] border-[2px] border-white text-white p-button02 font-[500]">
            Få en gratis analyse
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className="z-0 spin-animation w-[600px]"
            src="/globe.png"
            alt="Globe"
          ></img>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .spin-animation {
            animation: spin 40s infinite linear;
          }
        `}
      </style>
    </section>
  );
}
