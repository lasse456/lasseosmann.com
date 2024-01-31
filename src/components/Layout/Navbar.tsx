import { useState } from "react";
import Online from "../online";
import Language from "../language";
import { Menu, X } from "lucide-react";
import { Link, Element } from "react-scroll";
import { useRouter } from "next/router";
export enum PAGES {
  HOME,
  EVENTS,
  ABOUT,
  PARTNER,
  CONTACT,
  SOLUTIONS,
  TEAM,
  CASES,
}

const pages = [
  {
    name: "Forside",
    page: PAGES.HOME,
    link: "/",
  },
  {
    name: "Solutions",
    page: PAGES.SOLUTIONS,
    link: "/solutions",
  },
  {
    name: "About",
    page: PAGES.ABOUT,
    link: "/about",
  },
  {
    name: "Bliv partner",
    page: PAGES.PARTNER,
    link: "/partner",
  },
  {
    name: "Kontakt",
    page: PAGES.CONTACT,
    link: "/kontakt",
  },
  {
    name: "Team",
    page: PAGES.TEAM,
    link: "/team",
  },
  {
    name: "Cases",
    page: PAGES.CASES,
    link: "/cases",
  },
  {
    name: "WebApps",
    page: PAGES.SOLUTIONS,
    link: "/solutions/webapps",
  },
  {
    name: "Websites",
    page: PAGES.SOLUTIONS,
    link: "/solutions/hjemmesider",
  },
];

export default function Navbar({ page }: { page: PAGES }) {
  const [isEnglish, setIsEnglish] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <>
      <nav
        className="bg-white py-[16px] z-[999]" // You can adjust opacity using Tailwind's bg-opacity utility
      >
        <div className="w-[96%] mx-auto max-w-main flex items-center justify-between">
          <Link href={"/"} className="text-[24px] font-[600] text-main">
            <img className="w-[100px]" src="/logo.png"></img>
          </Link>
          <div className="flex items-center gap-[50px] font-[500] text-[16px] mde:hidden">
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
          <div className="mde:hidden">
            <Language />
          </div>
          <div
            onClick={() => setMenuClicked(true)}
            className="hidden mde:inline-block"
          >
            <Menu size={26} />
          </div>
        </div>
      </nav>
      {menuClicked ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-white z-[1000] py-[16px] mne:hidden">
          <div className="w-[96%] mx-auto max-w-main flex items-center justify-between">
            <Link href={"/"} className="text-[24px] font-[600] text-main">
              <img className="w-[100px]" src="/logo.png"></img>
            </Link>
            <div className="flex items-center gap-[50px] font-[500] text-[16px] mde:hidden">
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
            <div className="mde:hidden">
              <Language />
            </div>
            <div
              onClick={() => setMenuClicked(false)}
              className="hidden mde:inline-block"
            >
              <X size={28} />
              <div className="flex items-center gap-[50px] font-[500] text-[16px] mde:hidden">
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
              <div className="mde:hidden">
                <Language />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
