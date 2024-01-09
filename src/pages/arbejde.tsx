import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import { Opc } from "@/components/Animations/Opc";
import Navbar from "@/components/Layout/Navbar";

export default function Arbejde() {
  return (
    <div>
      <Navbar page={PAGES.TEAM} />
      <Opc>
        <div className="grid grid-cols-menu">
          <div className="bg-main w-full">
            <div className="text-white mt-[79px] w-[80%] py-[100px] mx-auto">
              <h1 className="">En skrædersyet løsning til hvert projekt</h1>
            </div>
          </div>

          <img
            className="h-[100vh] w-full object-cover object-top"
            src="/two.jpg"
          ></img>
        </div>
      </Opc>
    </div>
  );
}
