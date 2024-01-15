import React, { useState } from "react";
import Link from "next/link";

export default function Language() {
  const [isEnglish, setIsEnglish] = useState(false);
  return (
    <div className="flex items-center gap-[4px] bg-[#f0f2f5] p-[4px] rounded-[100px]">
      <Link
        href={"/"}
        className={
          isEnglish
            ? "p-[6px] flex items-center gap-[6px] rounded-[70px] cursor-pointer"
            : "bg-white p-[6px] flex items-center gap-[6px] rounded-[70px] cursor-pointer"
        }
        onClick={() => {
          setIsEnglish(false);
          console.log("Button clicked");
        }}
      >
        <img className="w-[16px]" src="/denmark.png"></img>
        <p className="text-[13px]">DK</p>
      </Link>
      <Link
        href={"/"}
        className={
          isEnglish
            ? "bg-white p-[6px] flex items-center gap-[6px] rounded-[70px] cursor-pointer"
            : " p-[6px] flex items-center gap-[6px] rounded-[70px] cursor-pointer"
        }
        onClick={() => {
          setIsEnglish(true);
          console.log("Button clicked");
        }}
      >
        <img className="w-[16px]" src="/united-kingdom.png"></img>
        <p className="text-[13px]">EN</p>
      </Link>
    </div>
  );
}