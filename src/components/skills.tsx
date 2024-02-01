import SectionStarter from "./sectionstarter";
import { useRouter } from "next/router";

export default function Skills() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <section className="py-[100px] pt-[160px] ctaOne:pb-[0px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="mb-[60px] text-center ctaOne:text-left">
          <SectionStarter
            section={currentPath === "/en" ? "what we do" : "hvad vi gør"}
          />
          <h1 className="text-sectionheading font-[600] text-main ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
            {currentPath === "/en"
              ? "We dominate the entire e-commerce"
              : "Vi dominerer hele e-commerce"}{" "}
            <span className="text-[#0071e3]">
              {currentPath === "/en" ? "customer journey" : "kunderejsen"}
            </span>{" "}
          </h1>
          <p className="text-description font-[500] text-gray-600">
            {currentPath === "/en"
              ? "It takes a holistic approach to achieve industry-leading results"
              : "Det kræver en holistisk tilgang for at opnå brancheførende resultater"}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[30px] skillsOne:grid-cols-1">
          <div className="px-[20px] py-[40px] bg-[#f7f7fc] rounded-[8px] border-[1px] flex flex-col justify-between">
            <div>
              <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block">
                <img className="w-[30px]" src="/metalogo.png"></img>
              </div>
              <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
                <img className="w-[30px]" src="/tiktok.png"></img>
              </div>
              <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
                <img
                  className="w-[30px] rounded-[50px]"
                  src="/snapchat.png"
                ></img>
              </div>
              <div className="mb-[40px] border-[1px] p-[10px] bg-white rounded-[50px] inline-block ml-[-20px]">
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src="/pinterest.png"
                ></img>
              </div>

              <h1 className="text-[22px] font-[600] mb-[20px]">Paid social</h1>
              <p className="text-[16px] text-gray-600 font-[500] mb-[20px]">
                {currentPath === "/en"
                  ? "Create value with a results-driven and proactive approach to social media advertising"
                  : "Skab værdi med en resultatorienteret og proaktiv tilgang til annoncering på sociale medier"}
              </p>
            </div>

            <div className="bg-white p-[10px] px-[20px] rounded-main border-[1px] h-[70px] flex flex-col justify-center w-[100px]">
              <img className="w-[60px]" src="/partners/meta.png"></img>
            </div>
          </div>
          <div className="px-[20px] py-[40px] px-[20px] bg-[#f7f7fc] rounded-[8px] border-[1px] flex flex-col justify-between">
            <div>
              <div className="mb-[40px] border-[1px] bg-white p-[10px] rounded-[50px] inline-block">
                <img className="w-[30px]" src="/klaviyo.png"></img>
              </div>
              <h1 className="text-[22px] font-[600] mb-[20px]">Klaviyo</h1>
              <p className="text-[16px] text-gray-600 font-[500] mb-[50px]">
                {currentPath === "/en"
                  ? "Get a flow of returning customers with hyper-personalized email marketing flows"
                  : "Få en strøm af tilbagevendende kunder med hyper-personaliserede e-mail marketing flows"}
              </p>
            </div>

            <div className="bg-white p-[10px] px-[20px] rounded-main border-[1px] h-[70px] flex flex-col justify-center w-[100px]">
              <img className="w-[60px]" src="/partners/klaviyo.png"></img>
            </div>
          </div>

          <div className="px-[20px] py-[40px] bg-[#f7f7fc] rounded-[8px] border-[1px] flex flex-col justify-between">
            <div>
              <div className="mb-[40px] border-[1px] bg-white p-[10px] rounded-[50px] inline-block">
                <img className="w-[30px]" src="/adwords.png"></img>
              </div>
              <h1 className="text-[22px] font-[600] mb-[20px]">Google Ads</h1>
              <p className="text-[16px] text-gray-600 font-[500] mb-[50px]">
                {currentPath === "/en"
                  ? "Experience profitable growth on Google with the most advanced strategies"
                  : "Oplev profitabel vækst på Google med de mest avancerede strategier"}
              </p>
            </div>

            <div className="bg-white p-[10px] px-[20px] rounded-main border-[1px] h-[70px] flex flex-col justify-center w-[100px]">
              <img className="w-[60px]" src="/partners/google.png"></img>
            </div>
          </div>

          <div className="px-[20px] py-[40px] bg-[#f7f7fc] rounded-[8px] border-[1px] flex flex-col justify-between">
            <div>
              <div className="mb-[40px] border-[1px] bg-white p-[10px] rounded-[50px] inline-block w-[50px]">
                <img className="w-[30px]" src="/spfy.png"></img>
              </div>
              <h1 className="text-[22px] font-[600] mb-[20px]">
                {currentPath === "/en"
                  ? "Website optimization"
                  : "Hjemmeside optimering"}
              </h1>
              <p className="text-[16px] text-gray-600 font-[500] mb-[50px]">
                {currentPath === "/en"
                  ? "We optimize your conversion rate so you get the most out of your traffic"
                  : "Vi optimerer din konverteringsrate så du får mest muligt ud af trafikken"}
              </p>
            </div>

            <div className="bg-white p-[10px] px-[20px] rounded-main border-[1px] h-[70px] flex flex-col justify-center w-[100px]">
              <img className="w-[60px]" src="/partners/shopify-v2.png"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
