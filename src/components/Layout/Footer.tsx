import { ScrollAnimation } from "../Animations/ScrollAnimation";
import { Link, Element } from "react-scroll";

export default function Footer() {
  return (
    <footer className="py-[100px] pb-[20px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="grid grid-cols-footermain gap-[100px] pb-[40px] ctaOne:grid-cols-1">
          <div>
            <Link href={"/"} className="text-[24px] font-[600] text-main">
              <img className="w-[100px] mb-[40px]" src="/logo.png"></img>
            </Link>
            <button className="rounded-[8px] bg-[#0071e3] text-white p-button02 font-[500]">
              Book et uforpligtende møde
            </button>
          </div>
          <div className="flex justify-between gap-[130px] ctaOne:flex-col">
            <div>
              <h1 className="font-[600] text-[22px] mb-[10px]">
                Vi skaber brancheførende vækst resultater for e-commmerce brands
              </h1>
              <p className="text-gray-600">
                Med en langsigtet holistiske tilgang har vi udelukkende fokus på
                at vækste din profit. Vi varetager hele den digitale kunderejse.
              </p>
            </div>
            <div className="flex gap-[160px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-[600] text-[22px] mb-[10px]">Menu</h1>
                <Link
                  to="results"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[18px]"
                >
                  Resultater
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[18px]"
                >
                  Services
                </Link>
                <Link
                  to="team"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[18px]"
                >
                  Teamet
                </Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-[600] text-[22px] mb-[10px]">Kontakt os</h1>
                <p className="text-gray-600">CVR: 43407376</p>
                <p className="text-gray-600">gustav@coad.dk</p>
                <p className="text-gray-600">Vesterbrogade 18b 2.1</p>
                <p className="text-gray-600">8000, Aarhus C</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] flex items-center justify-between py-[50px] text-gray-400 text-[14px] font-[300] ctaOne:flex-col ctaOne:gap-[60px]">
          <h1>
            COAD Agency - © Alle rettigheder forbeholdt,{" "}
            {new Date().getFullYear()}
          </h1>
          <div className="flex items-center gap-[40px] mde:flex-col">
            <img className="w-[100px]" src="/trust.svg" alt="Trustpilot" />
            <img className="w-[80px]" src="/partners/google.png"></img>
            <img className="w-[100px]" src="/partners/shopify-v2.png"></img>
            <img className="w-[100px]" src="/partners/klaviyo.png"></img>
            <img className="w-[100px]" src="/partners/meta.png"></img>
          </div>
        </div>
      </div>
    </footer>
  );
}
