import Link from "next/link";
import { ScrollAnimation } from "../Animations/ScrollAnimation";

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          background:
            "radial-gradient(circle, rgba(18,21,56,1) 0%, rgba(23,23,46,1) 15%, rgba(0,4,50,1) 33%, rgba(14,25,56,1) 51%, rgba(18,14,31,1) 73%, rgba(0,0,0,1) 92%, rgba(0,0,0,1) 100%)",
        }}
      >
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
