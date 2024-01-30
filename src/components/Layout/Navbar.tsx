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
          <img className="w-[100px]" src="/logo.png"></img>
        </Link>
        <div className="flex items-center gap-[50px] font-[500] text-[16px]">
          <Link href={"/"}>Resultater</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Teamet</Link>
        </div>
        <Language />
      </div>
    </nav>
  );
}
