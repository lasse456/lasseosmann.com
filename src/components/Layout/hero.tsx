export default function Hero(props: any) {
  return (
    <section className="mt-[80px] bg-[linear-gradient(rgba(5,29,64,0.70),rgba(5,29,64,1)),url(/heropattern.jpg)] pt-[300px] pb-[70px]">
      <div className="w-[90%] mx-auto max-w-main">
        <p className="text-white mb-[14px] uppercase">{props.section}</p>
        <h1 className="text-[70px] font-[500] w-[80%] leading-[80px] text-white mid:text-[50px] mid:leading-[60px] lg:text-[60px] lg:leading-[70px]">
          {props.heading}
        </h1>
      </div>
    </section>
  );
}
