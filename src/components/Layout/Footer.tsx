import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-[10px] border-t-[1px] bg-gray-100 text-center">
      <a className="text-gray-600">
        &copy; {new Date().getFullYear()} Gazella Team
      </a>
    </footer>
  );
}
