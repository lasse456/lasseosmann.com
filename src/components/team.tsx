import SectionStarter from "./sectionstarter";

export default function Team() {
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="mb-[60px] text-center">
          <SectionStarter section="holdet bag" />
          <h1 className="text-sectionheading font-[600] text-main">
            Vores dedikerede <span className="text-[#0071e3]">team</span>{" "}
          </h1>
          <p className="text-description text-gray-600 font-[500]">
            We&apos;ve analyzed the data and have compelling statistics to
            share.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] flex items-center gap-[20px]">
            <img
              className="w-[80px] h-[80px] object-cover rounded-[100px]"
              src="/gustav.jpg"
            ></img>
            <div>
              <h1 className="text-[26px] font-[600] mb-[0px]">
                Gustav Walsted
              </h1>
              <p className="text-[20px] text-gray-600">Stifter</p>
            </div>
          </div>
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] flex items-center gap-[20px]">
            <img
              className="w-[80px] h-[80px] object-cover rounded-[100px]"
              src="/gustav.jpg"
            ></img>
            <div>
              <h1 className="text-[26px] font-[600] mb-[0px]">
                Gustav Walsted
              </h1>
              <p className="text-[20px] text-gray-600">Stifter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
