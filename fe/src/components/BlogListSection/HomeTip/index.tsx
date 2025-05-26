"use client";

import React, { useEffect, useState } from "react";
import { HomeTip } from "@/types/home-tip";
import TipGroup from "./TipGroup";
import Gallery from "./Gallery";
import Title from "./Title";

const HomeTipPage = () => {
  const [tips, setTips] = useState<HomeTip[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCountB, setVisibleCountB] = useState(4);

  useEffect(() => {
    const fetchTips = async () => {
      const response = await fetch("http://localhost:3000/api/blogs?limit=1000");
      const data = await response.json();
      const tipsArray = Array.isArray(data) ? data : data.docs;

      const filteredTips = tipsArray.filter(
        (tip: HomeTip) => tip.category?.toLowerCase() === "home tips"
      );

      setTips(filteredTips);
      setLoading(false);
    };

    fetchTips();
  }, []);

  if (loading) return <div className="px-[5%] py-8 text-center">Loading...</div>;

  const mainTipGroupA = tips[0];

  const subTipsGroupA = tips.slice(1, 3);
  const otherTipsGroupA = tips.slice(3, 7);

  const mainTipGroupB = tips[7];
  const subTipsGroupB = tips.slice(8, 10);
  const allOtherTipsGroupB = tips.slice(10);

  const displayedOtherTipsGroupB = allOtherTipsGroupB.slice(0, visibleCountB);

  return (
    <div className="py-8 ">
      <Title/>

      <TipGroup
        mainTip={mainTipGroupA}
        subTips={subTipsGroupA}
        otherTips={otherTipsGroupA}
      />

      <Gallery />

      <TipGroup
        mainTip={mainTipGroupB}
        subTips={subTipsGroupB}
        otherTips={displayedOtherTipsGroupB}
        reverse={true}
      />

      {visibleCountB < allOtherTipsGroupB.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCountB((prev) => prev + 4)}
            className="px-6 py-3 border-1 border-primary rounded-lg text-base font-medium text-primary cursor-pointer"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeTipPage;
