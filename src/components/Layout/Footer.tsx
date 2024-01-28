import Link from "next/link";
import { ScrollAnimation } from "../Animations/ScrollAnimation";

export default function Footer() {
  return (
    <footer className="py-[100px] pb-[20px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="grid grid-cols-3"></div>
        <div className="border-t-[1px] flex items-center justify-between py-[20px] text-gray-400 text-[14px] font-[300]">
          <h1>
            COAD Agency | © Alle rettigheder forbeholdt,{" "}
            {new Date().getFullYear()}
          </h1>
          <h1>CVR: 43407376</h1>
        </div>
      </div>
    </footer>
  );
}
