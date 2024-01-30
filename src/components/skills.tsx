import SectionStarter from "./sectionstarter";

export default function Skills() {
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="mb-[60px] text-center">
          <SectionStarter section="hvad vi gør bedst" />
          <h1 className="text-sectionheading font-[600] text-main">
            Vi dominerer hele e-commerce{" "}
            <span className="text-[#0071e3]">kunderejsen</span>{" "}
          </h1>
          <p className="text-description font-[500] text-gray-600">
            We&apos;ve analyzed the data and have compelling statistics to
            share.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] skillsOne:grid-cols-1">
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] border-[1px]">
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

            <h1 className="text-[22px] font-[600] mb-[20px]">Digital Ads</h1>
            <p className="text-[18px] text-gray-600 font-[500] mb-[50px]">
              Med en langsigtet holistiske tilgang har vi udelukkende fokus på
              at vækste din bundlinje og profit.
            </p>
            <div className="bg-white p-[10px] px-[20px] rounded-main border-[1px] h-[70px] flex flex-col justify-center w-[100px]">
              <img className="w-[60px]" src="/partners/meta.png"></img>
            </div>
          </div>
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] border-[1px]">
            <div className="mb-[40px] border-[1px] bg-white p-[10px] rounded-[50px] inline-block">
              <img className="w-[30px]" src="/klaviyo.png"></img>
            </div>
            <h1 className="text-[22px] font-[600] mb-[20px]">Klaviyo</h1>
            <p className="text-[18px] text-gray-600 font-[500] mb-[50px]">
              Med en langsigtet holistiske tilgang har vi udelukkende fokus på
              at vækste din bundlinje og profit.
            </p>
            <div className="bg-white p-[10px] px-[20px] rounded-main border-[1px] h-[70px] flex flex-col justify-center w-[100px]">
              <img className="w-[60px]" src="/partners/klaviyo.png"></img>
            </div>
          </div>
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] border-[1px]">
            <div className="mb-[40px] border-[1px] bg-white p-[10px] rounded-[50px] inline-block">
              <img className="w-[30px]" src="/adwords.png"></img>
            </div>
            <h1 className="text-[22px] font-[600] mb-[20px]">Meta Ads</h1>
            <p className="text-[18px] text-gray-600 font-[500] mb-[50px]">
              Med en langsigtet holistiske tilgang har vi udelukkende fokus på
              at vækste din bundlinje og profit.
            </p>
            <div className="bg-white p-[10px] px-[20px] rounded-main border-[1px] h-[70px] flex flex-col justify-center w-[100px]">
              <img className="w-[60px]" src="/partners/google.png"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
