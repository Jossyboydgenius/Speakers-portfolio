import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Subtle 2026 Glowing Aura backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lgl:w-[450px] lgl:h-[450px] bg-designColor/15 rounded-full blur-[80px] z-0 pointer-events-none" />
      
      <img
        className="w-[300px] h-[400px] lgl:w-[460px] lgl:h-[600px] z-10 object-cover rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner
