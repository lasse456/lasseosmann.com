import Link from "next/link";
import { Reveal } from "../Animations/Reveal";

export default function Footer() {
  return (
    <>
      <footer className="py-[60px]">
        <Reveal>
          <div className="w-[90%] mx-auto max-w-main">
            <div className="flex justify-between border-b-[1px] pb-[60px] mb-[20px]">
              <div className="w-[16%]">
                <img className="w-[100px] mb-[16px]" src="/logosvg.svg"></img>
                <p className="mb-[20px]">
                  Vi udvikler brugbar software til virksomheder
                </p>
                <p className="font-[600]">+45 5069 5272</p>
              </div>
              <div className="flex gap-[100px] items-top justify-center">
                <div>
                  <h1 className="text-[18px] font-[600] mb-[20px]">Ydelser</h1>
                  <div className="flex flex-col gap-[12px]">
                    <Link href={"/"}>Web apps</Link>
                    <Link href={"/"}>Hjemmesider</Link>
                    <Link href={"/"}>UI/UX Design</Link>
                    <Link href={"/"}>Vedligeholdelse</Link>
                  </div>
                </div>
                <div>
                  <h1 className="text-[18px] font-[600] mb-[20px]">Arbejde</h1>
                  <div className="flex flex-col gap-[12px]">
                    <Link href={"/"}>Kunde cases</Link>
                    <Link href={"/"}>Interne projekter</Link>
                  </div>
                </div>
                <div>
                  <h1 className="text-[18px] font-[600] mb-[20px]">
                    Virsomheden
                  </h1>
                  <div className="flex flex-col gap-[12px]">
                    <Link href={"/"}>Teamet</Link>
                    <Link href={"/"}>Arbejdsprocesser</Link>
                    <Link href={"/"}>Baggrund</Link>
                  </div>
                </div>
              </div>
              <img
                className="w-[200px] h-[200px] object-cover rounded-[300px] object-top"
                src="/lasseosmann.jpg"
              ></img>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                &#169; {new Date().getFullYear()} Gazella Team
              </p>
              <Link href={"https://www.linkedin.com/company/gazellateam/"}>
                <img className="w-[24px]" src="/linkedin.png"></img>
              </Link>
            </div>
          </div>
        </Reveal>
      </footer>
    </>
  );
}
