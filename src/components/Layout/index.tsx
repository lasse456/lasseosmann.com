import Footer from "./Footer";
import Meta from "./Meta";
import Navbar, { PAGES } from "./Navbar";
import Script from "next/script";
import { useEffect } from "react";
import { useState } from "react";

export default function Layout({
  page,
  className,
  children,
}: {
  page: PAGES;
  className?: string;
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
      <Script
          data-domain="coad.dk"
          strategy="lazyOnload"
        />
        <Meta />
        <Navbar page={PAGES.HOME} />
        <div>
          <div className={`${className}`}>
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
