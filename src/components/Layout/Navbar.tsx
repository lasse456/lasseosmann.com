import Link from "next/link";
import React, { use } from "react";
import { useState } from "react";
import Button from "../button";

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

const solutionsData = [
  {
    heading: "Web Applikationer",
    description:
      "Hurtig performende funktionelle web apps med skrædersyet design og tilhørende backend",
    link: "/ydelser/webapps",
  },
  {
    heading: "Hjemmesider",
    description:
      "En skarp skrædersyet hjemmeside som får dig og din forretning til at fremstå som vindere online",
    link: "/ydelser/hjemmesider",
  },
  {
    heading: "UI/UX Design",
    description:
      "Fremhæv dine værdier og gør dine kunders oplevelser bedre med et proffesionelt digitalt design",
    link: "/ydelser/uiux",
  },
  {
    heading: "Vedligeholdelse",
    description:
      "Vi står for vedligeholdelsen, driften og optimeringen af din kommende webløsning",
    link: "/ydelser/vedligeholdelse",
  },
];
const aboutData = [
  {
    heading: "Holdet Bag",
    description:
      "Sæt ansigt på alle designere, udviklere og medlemmer bag Gazella Team",
    link: "/team",
  },
  {
    heading: "Baggrund",
    description:
      "Hør mere om stiftelsen af Gazella Team, samt hvordan vi startede som et gymnasieprojekt",
    link: "/baggrund",
  },
  {
    heading: "Arbejdsprocesser",
    description:
      "Lær mere om hvordan vi arbejder så effektivt som muligt for at tilfredstille en hver kundes behov",
    link: "/arbejdsprocesser",
  },
  {
    heading: "Værdier",
    description:
      "Vi lægger primært vægt i tre værdier, som danner selve identiteten af Gazella team",
    link: "/vaerdier",
  },
];

export default function Navbar({ page }: { page: PAGES }) {
  const [solutionsHovered, setSolutionsHovered] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <>
      <div className="bg-main fixed w-full text-white p-[10px] py-[12px] flex justify-between z-[2]">
        <div className="flex gap-[40px]">
          <p className="text-[14px]">+45 5069 5272</p>

          <p className="text-[14px]">contact@gazellateam.com</p>
        </div>
        <p className="text-[14px]">Book møde</p>
      </div>
      <nav className="bg-white z-[2] flex items-center justify-between fixed w-full px-[10px] top-[44px] border-b-[1px] xl:py-[15px]">
        <div className="flex items-center gap-[100px]">
          <Link href={"/"}>
            <img src="/logosvg.svg" alt="logo" className="w-[100px]"></img>
          </Link>

          <div className="flex gap-[40px] xl:hidden">
            <Link
              className={
                solutionsHovered
                  ? "h-[81px] flex item-center justify-center border-b-[3px] border-black leading-[81px]"
                  : "h-[81px] flex item-center justify-center leading-[81px]"
              }
              onMouseEnter={() => setSolutionsHovered(true)}
              onMouseLeave={() => setSolutionsHovered(false)}
              href={"/solutions"}
            >
              Ydelser
              <span className="flex items-center ml-[10px]">
                <img
                  className="w-[10px]"
                  src={solutionsHovered ? "/angle-up.svg" : "/angle-down.svg"}
                ></img>
              </span>
            </Link>
            <Link
              className={
                aboutHovered
                  ? "h-[81px] flex item-center justify-center border-b-[3px] border-black leading-[81px]"
                  : "h-[81px] flex item-center justify-center leading-[81px]"
              }
              onMouseEnter={() => setAboutHovered(true)}
              onMouseLeave={() => setAboutHovered(false)}
              href={"/baggrund"}
            >
              Om os
              <span className="flex items-center ml-[10px]">
                <img
                  className="w-[10px]"
                  src={aboutHovered ? "/angle-up.svg" : "/angle-down.svg"}
                ></img>
              </span>
            </Link>
            <Link
              className="h-[81px] hover:border-b-[3px] hover:border-black flex item-center justify-center leading-[81px]"
              href={"/cases"}
            >
              Cases
            </Link>
            <Link
              className="h-[81px] hover:border-b-[3px] hover:border-black flex item-center justify-center leading-[81px]"
              href={"/kontakt"}
            >
              Kontakt
            </Link>
          </div>
        </div>
        <div className="xl:hidden">
          <Link className="font-[600]" href={"/contact"}>
            Talk to us
          </Link>
        </div>

        <img
          onClick={() => setMenuClicked(!menuClicked)}
          className="hidden small:inline-block small:w-[20px] small:cursor-pointer"
          src={menuClicked ? "/cross.png" : "/menu.png"}
        ></img>
      </nav>

      {menuClicked ? (
        <section className="fixed top-[125px] w-[100%] py-[100px] bg-white z-[2] px-[10px] border-t-[1px] smaller:hidden">
          <div className="flex flex-col gap-[20px]">
            <Link
              onClick={() => setMenuClicked(false)}
              className="text-[40px]"
              href={"/cases"}
            >
              Cases
            </Link>
            <Link className="text-[40px]" href={"/contact"}>
              Contact
            </Link>
          </div>
        </section>
      ) : (
        <div></div>
      )}

      {solutionsHovered ? (
        <div
          onMouseLeave={() => setSolutionsHovered(false)}
          onMouseEnter={() => setSolutionsHovered(true)}
          className="bg-white fixed top-[125px] w-full py-[40px] border-t-[1px] z-[2] shadow-md xl:hidden"
        >
          <div className="w-[90%] mx-auto grid grid-cols-2 gap-x-[40px] max-w-main">
            <div className="grid grid-cols-2">
              {solutionsData.map((v) => (
                <Link
                  className="hover:bg-gray-100 p-[30px] rounded-[10px] transition-all"
                  key={1}
                  href={v.link}
                >
                  <h1 className="text-[20px] font-[600] mb-[14px]">
                    {v.heading}
                  </h1>
                  <p className="text-gray-600">{v.description}</p>
                </Link>
              ))}
            </div>
            <div className="border-l-[1px] p-[30px] flex flex-col justify-between">
              <div>
                <h1 className="text-[24px] mb-[14px]">
                  Tal med os allerede i dag
                </h1>
                <p className="text-gray-600">
                  Har du en ide eller et projekt i tankerne? Vi tilbyder dig en
                  helt gratis og uforpligtende samtale om dit kommende projekt,
                  hvor du får mulighed for at sætte dine krav og ønsker til
                  projektet
                </p>
              </div>

              <div className="flex flex-col gap-[16px]">
                <div className="flex text-main gap-[12px]">
                  <img className="w-[26px]" src="/check.png"></img>
                  <p>30 minutters gratis og uforpligtende samtale</p>
                </div>
                <div className="flex text-main gap-[12px]">
                  <img className="w-[26px]" src="/check.png"></img>
                  <p>Gratis rådgivning og sparing</p>
                </div>
              </div>
              <Link
                href={"/kontakt"}
                className="bg-main p-[10px] rounded-[60px] text-white text-center"
              >
                Kontakt os
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-blue-600 w-full hidden">
          <p>solutions</p>
        </div>
      )}

      {aboutHovered ? (
        <div
          onMouseLeave={() => setAboutHovered(false)}
          onMouseEnter={() => setAboutHovered(true)}
          className="bg-white fixed top-[125px] w-full py-[40px] z-[2] border-t-[1px] shadow-md xl:hidden"
        >
          <div className=" w-[90%] mx-auto grid grid-cols-2 gap-x-[40px] max-w-main">
            <div className="grid grid-cols-2">
              {aboutData.map((v) => (
                <Link
                  className="hover:bg-gray-100 p-[30px] rounded-[10px] transition-all"
                  key={1}
                  href={v.link}
                >
                  <h1 className="text-[20px] font-[600] mb-[14px]">
                    {v.heading}
                  </h1>
                  <p className="text-gray-600">{v.description}</p>
                </Link>
              ))}
            </div>
            <img className="h-[100%] object-cover" src="/flyout.jpg"></img>
          </div>
        </div>
      ) : (
        <div className="bg-blue-600 w-full hidden">
          <p>About</p>
        </div>
      )}
    </>
  );
}
