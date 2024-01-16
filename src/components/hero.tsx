import { ScrollAnimation } from "./Animations/ScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import ConicBlurEffect from "./coinblur";

export default function Hero() {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle, rgba(1,30,62,1) 1%, rgba(0,41,93,1) 50%, rgba(0,22,48,1) 81%, rgba(0,15,32,1) 100%)",
      }}
      className="heroback z-[0] py-[100px] pb-[30px] pt-[160px] relative bg-gradient-to-br from-rgb-1-30-62 via-rgb-0-41-93 to-rgb-0-22-48"
    >
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
        <div className="flex items-center justify-center mb-[100px]">
          <button className="rounded-[60px] border-[2px] border-white text-white p-button02 font-[500]">
            Få en gratis analyse
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="mt-[-300px]" src="/lines.svg"></img>
          <img
            className="z-0 spin-animation w-[800px] mt-[-320px]"
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
          .heroback {
            background: radial-gradient(47.77362456046952% 100% at 50.00000569505985% 3.3306690738754696e-14%,rgba(0,113,227,.3) 0%,rgba(0,0,0,0) 100%);
          }
        `}
      </style>
    </section>
  );
}
