import Link from "next/link";
import { useState } from "react";
import Online from "../online";
import Language from "../language";
import { Menu } from "lucide-react";

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
  return (
    <nav
      className="bg-white fixed w-full py-[16px] z-[999]" // You can adjust opacity using Tailwind's bg-opacity utility
    >
      <div className="w-[96%] mx-auto max-w-main flex items-center justify-between">
        <Link href={"/"} className="text-[24px] font-[600] text-main">
          COAD{" "}
        </Link>
        <div className="flex">
          <Menu size={28} className="fixed top-[41px] right-[95px]" />
          <img className="w-[80px]" src="/menuspin.png"></img>
        </div>
      </div>
    </nav>
  );
}
