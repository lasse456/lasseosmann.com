import Layout from "@/components/Layout";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <img className="w-[80px] rounded-full mb-[30px]" src="/lasse.png"></img>
      <h1 className="text-[46px] font-[600] text-gray-800 mb-[10px]">Hello, I'm Lasse 👋</h1>
      <p className="font-[400] text-[20px] text-gray-600 mb-[30px]">A self-taught 17-year old software developer and digital product designer from Denmark</p>
      <div className="flex items-center gap-[14px] mb-[70px]">
        <Link target="_blank" href={"https://www.linkedin.com/in/lasse-osmann-%F0%9F%91%8B-1b6ab9243/"}>
          <FaLinkedin size={24} color="rgb(75 85 99)" />
        </Link>
        <Link target="_blank" href={"https://twitter.com/lasse_osmann"}>
          <FaXTwitter size={24} color="rgb(75 85 99)" />
        </Link>
        <Link target="_blank" href={"https://github.com/lasse456"}>
          <FaGithub size={24} color="rgb(75 85 99)" />
        </Link>
        <Link target="_blank" href={"https://instagram.com/lasse.osmann"}>
          <FaInstagram size={24} color="rgb(75 85 99)" />
        </Link>
      </div>
      <p className="font-[400] text-gray-600 mb-[100px]">37signals is the company behind Basecamp, HEY, and ONCE. I own that business together with Jason Fried. We've been around since 1999.
<br></br><br></br>
Basecamp is the one-place-not-all-over-the-place way to organize your projects and your company. Launched in 2004 as one of the first software-as-a-service applications, and used by millions of people since. It's the original Rails application.
<br></br><br></br>
HEY is a fresh approach to turning email into something you want to use, not something you’re forced to deal with. A complete alternative to Gmail or Outlook for individuals and companies who want a better relationship with email. Tens of thousands of customers have embraced it since we launched in 2020.
<br></br><br></br>
ONCE is a return to software products, away from services, monthly subscriptions, and shared data. Software you can own with source code you can read and change. Our first offering is Campfire, super simple group chat for a one-time price.</p>
    
    <h1 className="text-[30px] font-[600] text-gray-800 mb-[70px]">Products I'm working on 💼</h1>
    <div className="flex gap-[20px]">
      <img className="w-[80px] h-[80px] object-cover rounded-full" src="/projects/toolbird.svg"></img>
      <div>
        <h1 className="font-[500] text-gray-800 text-[22px] mb-[10px]">ToolBird</h1>
        <p className="text-gray-600 font-[400]">
          The all-in-one toolkit for your SaaS business
          <br></br><br></br>
          ONCE is a return to software products, away from services, monthly subscriptions, and shared data. Software you can own with source code you can read and change. Our first offering is Campfire, super simple group chat for a one-time price.
        </p>
    </div>
    </div>
    </Layout>
  );
}
