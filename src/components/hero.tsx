import { Reveal } from "./Animations/Reveal";
import { CheckCircle2 } from "lucide-react";
import ConicBlurEffect from "./coinblur";

export default function Hero() {
  return (
    <section className=" py-[100px] pb-[30px] pt-[160px] bg-[linear-gradient(rgba(5,29,64,0.98),rgba(5,29,64,0.90)),url(/reviewbg.jpg)] bg-center bg-cover">
      <div className="w-[90%] mx-auto">
        {" "}
        <h1 className="text-center text-heading font-[500] text-white">
          A <span className="italic font-italic text-[88px]">performance</span>{" "}
          based agency
        </h1>
        <p className="text-center text-description w-[70%] mx-auto text-gray-200 mb-[40px]">
          Vi er et lille team af dedikerede nørder, der stræber efter at blive
          de førende inden for paid social og e-mail marketing.
        </p>
        <div className="flex items-center justify-center gap-[30px] mb-[50px]">
          <div className="flex items-center justify-center gap-[10px] text-white">
            <CheckCircle2 size={28} />
            <h2 className="text-[22px]">+4 års erfaring</h2>
          </div>
          <div className="flex items-center justify-center gap-[10px] text-white">
            <CheckCircle2 size={28} />
            <h2 className="text-[22px]">Ingen binding</h2>
          </div>
        </div>
        <div className="flex items-center justify-center mb-[50px]">
          <button className="rounded-[60px] bg-gradient-to-r from-blue-800 to-blue-900 text-white p-button02 font-[500]">
            Få en gratis analyse
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className="z-[0] spin-animation w-[800px]"
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
