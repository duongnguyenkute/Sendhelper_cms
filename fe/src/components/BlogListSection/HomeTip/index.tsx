"use client";

import React, { useEffect, useState } from "react";
import { HomeTip } from "@/types/home-tip";
import TipGroup from "./TipGroup";
import Gallery from "./Gallery";

const HomeTipPage = () => {
  const [tips, setTips] = useState<HomeTip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCountB, setVisibleCountB] = useState(4);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs?limit=100");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const tipsArray = Array.isArray(data) ? data : data.docs;

        if (!Array.isArray(tipsArray)) {
          throw new Error("Tips data is not an array");
        }

        setTips(tipsArray);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to fetch tips");
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  if (loading) return <div className="px-[5%] py-8 text-center">Loading...</div>;
  if (error) return <div className="px-[5%] py-8 text-center text-red-500">{error}</div>;

  const mainTipGroupA = tips[0];

  const subTipsGroupA = tips.slice(1, 3);
  const otherTipsGroupA = tips.slice(3, 7);

  const mainTipGroupB = tips[7];
  const subTipsGroupB = tips.slice(8, 10);
  const allOtherTipsGroupB = tips.slice(10);

  const displayedOtherTipsGroupB = allOtherTipsGroupB.slice(0, visibleCountB);

  return (
    <div className="py-8 ">
      <h2 className="pl-[5%] text-2xl lg:text-[2rem] font-semibold text-gray-800 w-full max-w-320 mx-auto xl:pl-0">
        Home Tips
      </h2>

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
