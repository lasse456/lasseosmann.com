import Link from "next/link";
import { ScrollAnimation } from "../Animations/ScrollAnimation";

export default function Footer() {
  return (
    <div className="relative">
      {/* Image */}
      <div className="py-[60px] relative z-0 flex justify-center">
        <img
          className="z-0 spin-animation w-[800px]"
          src="/globe.png"
          alt="Globe"
        ></img>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-[-60px] py-[100px] left-0 right-0 bg-main z-10">
        <div className="flex flex-col items-center w-[90%] mx-auto text-center">
          <h1 className="text-sectionheading font-[500] text-white mb-[20px]">
            Lad os gennemgå{" "}
            <span className="italic font-italic text-[56px] text-gray-200">
              din forretning
            </span>{" "}
          </h1>
          <p className="text-[20px] text-white w-[60%] mb-[60px]">
            Vi laver en komplet analyse af hele dit marketing-setup og viser dig
            præcis, hvor du skal optimere for at øge din omsætning og profit.
            Dette inkluderer en gennemgang af dine annoncekonti,
            hjemmeside/webshop, kreativer og tekster.
          </p>
          <div className="w-[60%] bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 rounded-[6px] p-[40px]">
            <h1>contact</h1>
          </div>
        </div>
      </footer>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .spin-animation {
            animation: spin 40s infinite linear;
          }
        `}
      </style>
    </div>
  );
}
