import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="py-[40px] border-t-[1px] text-gray-600">
            <div className="max-w-[1000px] w-[90%] mx-auto flex items-center justify-between">
            <div>
                Made with ❤️ by Lasse Osmann
            </div>
            <div className="flex items-center gap-[14px]">
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
            </div>
        </section>
    )
}