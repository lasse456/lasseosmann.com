import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import { Opc } from "@/components/Animations/Opc";
import Navbar from "@/components/Layout/Navbar";
import { Reveal } from "@/components/Animations/Reveal";
import { Layers } from "lucide-react";

export default function Ydelser() {
  return (
    <div>
      <Navbar page={PAGES.TEAM} />
      <Opc>
        <div className="grid grid-cols-menu">
          <div className="w-full">
            <div className="mt-[82px] py-[100px] w-[70%] h-[90vh] ml-auto grid grid-cols-1 gap-[90px]">
              <Reveal>
                <Layers />
                <div className="bg-white mb-[40px]">
                  <h1 className="text-[24px] font-[500] mb-[10px]">
                    En skrædersyet løsning til hvert projekt
                  </h1>
                  <p className="w-[80%]">
                    Vi specialiserer os i at udvikle kreative, funktionelle og
                    unikke softwareløsninger til projekter og virksomheder af
                    alle størrelser
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <Layers />
                <div className="bg-white mb-[40px]">
                  <h1 className="text-[24px] font-[500] mb-[10px]">
                    En skrædersyet løsning til hvert projekt
                  </h1>
                  <p className="w-[80%]">
                    Vi specialiserer os i at udvikle kreative, funktionelle og
                    unikke softwareløsninger til projekter og virksomheder af
                    alle størrelser
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="bg-white">
                  <h1 className="text-[24px] font-[500] mb-[10px]">
                    En skrædersyet løsning til hvert projekt
                  </h1>
                  <p className="w-[80%]">
                    Vi specialiserer os i at udvikle kreative, funktionelle og
                    unikke softwareløsninger til projekter og virksomheder af
                    alle størrelser
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <img className="h-[100vh] w-full object-cover" src="/one.jpg"></img>
        </div>
      </Opc>
    </div>
  );
}
