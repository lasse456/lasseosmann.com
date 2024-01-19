import { useState } from "react";

export default function SectionStarter(props: any) {
  const [isDark, setIsDark] = useState(props.mode);
  return isDark ? (
    <div className="text-center">
      <div className="text-white inline-block p-[4px] px-[16px] rounded-[100px] border-[2px] border-white mb-[20px]">
        <p>{props.section}</p>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <div className="text-white inline-block p-[10px] px-[36px] rounded-[100px] border-[2px] bg-blue-500 mb-[20px]">
        <p>{props.section}</p>
      </div>
    </div>
  );
}