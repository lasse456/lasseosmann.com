import Layout from "@/components/Layout";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ToolBird() {
  return (
    <Layout>
    <Link href={"/"}>
        <div className="mb-[20px] border-[1px] inline-block p-[10px] rounded-full">
            <ArrowLeft color="rgb(75 85 99)" />
        </div>
    </Link>
      <h1 className="text-[46px] font-[600] text-gray-800 mb-[10px]">ToolBird Platform</h1>
      <p className="font-[400] text-[20px] text-gray-600 mb-[70px]">A self-taught 17-year old software developer and digital product designer from Denmark</p>

      <p className="font-[400] text-gray-600 mb-[100px]">37signals is the company behind Basecamp, HEY, and ONCE. I own that business together with Jason Fried. We&apos;ve been around since 1999.
<br></br><br></br>
Basecamp is the one-place-not-all-over-the-place way to organize your projects and your company. Launched in 2004 as one of the first software-as-a-service applications, and used by millions of people since. It&apos;s the original Rails application.
<br></br><br></br>
HEY is a fresh approach to turning email into something you want to use, not something you&apos;re forced to deal with. A complete alternative to Gmail or Outlook for individuals and companies who want a better relationship with email. Tens of thousands of customers have embraced it since we launched in 2020.
<br></br><br></br>
ONCE is a return to software products, away from services, monthly subscriptions, and shared data. Software you can own with source code you can read and change. Our first offering is Campfire, super simple group chat for a one-time price.</p>
    <img className="rounded-[14px]" src="/projects/toolbird.svg"></img>
    </Layout>
  );
}
