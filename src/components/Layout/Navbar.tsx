import Link from "next/link";
import React, { use } from "react";
import { useState } from "react";
import Button from "../button";
import { Reveal } from "./Reveal";

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
  const [solutionsClicked, setSolutionsClicked] = useState(false);
  return (
    <>
      <nav className="border-b-[1px] py-[14px] fixed w-full bg-white">
        <div className="w-[90%] mx-auto max-w-main flex items-center justify-between">
          <div className="flex items-center gap-[90px]">
            <Link href={"/"}>
              {" "}
              <img
                alt="gazella logo"
                src="/logosvg.svg"
                className="w-[100px]"
              ></img>
            </Link>

            <div className="flex items-center gap-[40px]">
              <p
                className="cursor-pointer"
                onClick={() => setSolutionsClicked(true)}
              >
                Ydelser
              </p>
              <Link href={"/cases"}>Cases</Link>
              <Link href={"/team"}>Om os</Link>
              <Link href={"/kontakt"}>Kontakt</Link>
            </div>
          </div>
          <div>
            <Link
              href={"/kontakt"}
              className="bg-main text-white p-[14px] rounded-[6px] text-[14px] font-[600] px-[20px]"
            >
              kontakt os
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
