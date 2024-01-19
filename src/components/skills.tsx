import SectionStarter from "./sectionstarter";

export default function Skills() {
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="mb-[60px] text-center">
          <SectionStarter section="anvendte værktøjer" />
          <h1 className="text-sectionheading font-[600] text-main">
            Vores <span className="text-[#0071e3]">specialer</span>{" "}
          </h1>
          <p className="text-description font-[500] text-gray-600">
            We&apos;ve analyzed the data and have compelling statistics to
            share.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px]">
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
            <p className="text-[18px] text-gray-600 font-[500]">
              Med en langsigtet holistiske tilgang har vi udelukkende fokus på
              at vækste din bundlinje og profit.
            </p>
          </div>
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px]">
            <div className="mb-[40px] border-[1px] bg-white p-[10px] rounded-[50px] inline-block">
              <img className="w-[30px]" src="/klaviyo.png"></img>
            </div>
            <h1 className="text-[22px] font-[600] mb-[20px]">Klaviyo</h1>
            <p className="text-[18px] text-gray-600 font-[500]">
              Med en langsigtet holistiske tilgang har vi udelukkende fokus på
              at vækste din bundlinje og profit.
            </p>
          </div>
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px]">
            <div className="mb-[40px] border-[1px] bg-white p-[10px] rounded-[50px] inline-block">
              <img className="w-[30px]" src="/adwords.png"></img>
            </div>
            <h1 className="text-[22px] font-[600] mb-[20px]">Meta Ads</h1>
            <p className="text-[18px] text-gray-600 font-[500]">
              Med en langsigtet holistiske tilgang har vi udelukkende fokus på
              at vækste din bundlinje og profit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
