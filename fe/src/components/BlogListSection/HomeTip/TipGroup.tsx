import React from "react";
import MainTipCard from "./MainTipCard";
import SubTipCard from "./SubTipCard";
import OtherTipCard from "./OtherTipCard";
import { HomeTip } from "@/types/home-tip";

interface TipGroupProps {
  mainTip?: HomeTip;
  subTips: HomeTip[];
  otherTips: HomeTip[];
  reverse?: boolean; 
}

const TipGroup: React.FC<TipGroupProps> = ({ mainTip, subTips, otherTips, reverse = false }) => (
  <div className=" px-[5%] mt-5 lg:mt-8 w-full max-w-320 mx-auto xl:pl-0">
    <div className={`flex flex-col lg:flex-row gap-8 ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {mainTip && (
        <div className="">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <MainTipCard tip={mainTip} />
          </a>
        </div>
      )}

      {subTips.length > 0 && (
        <div className="lg:w-7/10 flex flex-col lg:py-0 gap-8 py-5">
          {subTips.map((tip) => (
            <a
              className="h-full"
              key={tip.slug}
              href={tip.thumbnailImage || undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubTipCard tip={tip} />
            </a>
          ))}
        </div>
      )}
    </div>

    {otherTips.length > 0 && (
      <div className="xl:mt-8 mt-6 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        {otherTips.map((tip) => (
          <a
            className="h-full "
            key={tip.slug}
            href={tip.thumbnailImage || undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            <OtherTipCard tip={tip} />
          </a>
        ))}
      </div>
    )}
  </div>
);

export default TipGroup;
