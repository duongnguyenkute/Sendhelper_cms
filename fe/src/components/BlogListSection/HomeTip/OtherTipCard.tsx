// OtherTipCard.tsx
import { HomeTip } from "@/types/home-tip";
import React from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

const OtherTipCard = ({ tip }: { tip: HomeTip }) => {


  return (
    <div className="shadow-md rounded-xl cursor-pointer overflow-hidden h-full flex flex-col">
      <img src={ tip.thumbnailImage || "/images/general-img.webp" } alt={tip.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="mt-2">
          <p className="text-quaternary text-sm">{tip.category}</p>
          <p className="my-3 font-semibold lg:font-normal hover:underline transition-all duration-200 ease-in-out">{tip.name}</p>
        </div>
        <div className="mt-6 text-quaternary flex items-center gap-2">
          <span className="text-base font-medium">Read more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RevealOnScroll(OtherTipCard);
