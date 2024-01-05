import Link from "next/link";
import React, { use } from "react";
import { useState } from "react";
import Button from "../button";
import { Reveal } from "../Animations/Reveal";
import { Opc } from "../Animations/Opc";
import Dropper from "../dropper";
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
  const [menuClicked, setMenuClicked] = useState(false);
  const [solutionsClicked, setSolutionsClicked] = useState(false);
  return (
    <>
      <nav className="py-[14px] fixed w-full bg-white shadow-md z-[2]">
        <Opc>
          <div className="w-[98%] mx-auto max-w-[1420px] flex items-center justify-between">
            <div className="flex items-center gap-[90px]">
              <Link href={"/"}>
                {" "}
                <img
                  alt="gazella logo"
                  src="/logosvg.svg"
                  className="w-[100px]"
                ></img>
              </Link>

              <div className="flex items-center gap-[40px] xl:hidden">
                <Link
                  onClick={() => setSolutionsClicked(!solutionsClicked)}
                  href={"#"}
                >
                  Ydelser
                </Link>
                <Link href={"/cases"}>Cases</Link>
                <Link href={"/team"}>Om os</Link>
                <Link href={"/kontakt"}>Kontakt</Link>
              </div>
            </div>
            <div className="xl:hidden">
              <Link
                href={"/kontakt"}
                className="bg-main text-white p-[14px] rounded-[100px] text-[13px] font-[600] px-[30px]"
              >
                kontakt os
              </Link>
            </div>
            <img
              onClick={() => setMenuClicked(!menuClicked)}
              className="hidden w-[22px] cursor-pointer xl:inline"
              src={menuClicked ? "/cross.png" : "/menu.png"}
            ></img>
          </div>
        </Opc>
      </nav>
    </>
  );
}
