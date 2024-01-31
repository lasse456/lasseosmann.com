import SectionStarter from "./sectionstarter";

export default function Team() {
  return (
    <section className="py-[100px] pt-[160px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="mb-[60px] text-center ctaOne:text-left">
          <SectionStarter section="holdet bag" />
          <h1 className="text-sectionheading font-[600] text-main ctaOne:text-left ctaOne:text-[40px] ctaOne:leading-[50px] ctaOne:mb-[14px]">
            Ikke det største men det{" "}
            <span className="text-[#0071e3]">bedste team</span>{" "}
          </h1>
          <p className="text-description text-gray-600 mx-auto font-[500] w-[70%] ctaOne:text-left ctaOne:w-[90%] ctaOne:mr-auto ctaOne:ml-0">
            De sidste 4 år har vi vækstet et utal af e-commerce cases i hele
            verden. Vi har ingen ambition om at blive er stort, middelmådigt
            bureau med mange amsatte. Tværtimod vil vi være et mindre agilt team
            der levere den absolut bedste service
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[30px] teamOne:grid-cols-1">
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] flex items-center gap-[20px] border-[1px]">
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
          <div className="p-[50px] bg-[#f7f7fc] rounded-[8px] flex items-center gap-[20px] border-[1px]">
            <img
              className="w-[80px] h-[80px] object-cover rounded-[100px]"
              src="/gustav.jpg"
            ></img>
            <div>
              <h1 className="text-[26px] font-[600] mb-[0px]">Tobias Nissen</h1>
              <p className="text-[20px] text-gray-600">CMO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
