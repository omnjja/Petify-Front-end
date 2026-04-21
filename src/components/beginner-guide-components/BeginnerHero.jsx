import React from "react";
import beginnerPhoto from "@/assets/beginner-media/download.webp";

const BeginnerHero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center bg-[#F8F9FA] px-6 py-6 md:py-0 md:px-[70px]">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center gap-5 px-4 md:px-[50px] w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#FD7E14] text-sm font-bold">Petify</p>
          <h5 className="text-[#2F4156] font-bold text-3xl md:text-5xl capitalize">
            If pets could talk, they’d talk about us!
          </h5>
          <p className="text-[#2f415677] text-base">
            Book services, shop for pet products, get expert advice all in one
            place!
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden w-full md:w-[600px] h-[300px] md:h-[500px] overflow-hidden md:flex items-center justify-center mt-6 md:mt-0">
          <img
            src={beginnerPhoto}
            alt="Happy pet"
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default BeginnerHero;
