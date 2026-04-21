import React from "react";
import servicesHero from "@/assets/shared/image (2).webp";

const ServicesHero = () => {
  return (
    <div className="bg-[#F8F9FA] flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-[70px] py-10 md:py-0">
      <div className="flex flex-col justify-center gap-5 px-0 md:px-[50px] w-full md:w-[50%] text-center md:text-left mt-6 md:mt-0">
        <p className="text-[#FD7E14] text-sm font-bold">Petify</p>
        <h5 className="text-[#2F4156] font-bold text-3xl md:text-5xl capitalize leading-snug">
          Find trusted pet services near you
        </h5>
        <p className="text-[#2f415677] text-base md:text-lg">
          Easily browse and book appointments with top-rated pet groomers. Check
          their salons, and ratings — all in one place, so your pets look and
          feel their best.
        </p>
      </div>

      <div className="hidden w-full md:w-[600px] h-[250px] md:h-[500px] overflow-hidden md:flex items-center justify-center">
        <img src={servicesHero} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ServicesHero;
