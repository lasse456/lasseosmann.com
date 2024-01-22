import Footer from "./Footer";
import Meta from "./Meta";
import Navbar, { PAGES } from "./Navbar";
import Script from "next/script";

export default function Layout({
  page,
  className,
  children,
}: {
  page: PAGES;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Meta />
        <Navbar page={PAGES.HOME} />
        <div className="mt-[68px]">
          <div className={`${className}`}>
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
