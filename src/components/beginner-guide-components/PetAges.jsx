import React from "react";
import { petAges } from "@/constants/bginnerGuideData";
import ageGuideImg from "@/assets/beginner-media/pexels-helen1-16395151.webp";

const PetAges = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-9 gap-6 md:gap-12">
      <div className="flex flex-col w-full md:w-1/2">
        <p className="text-[#FD7E14] capitalize text-2xl md:text-4xl font-semibold">
          know their age, know their needs
        </p>
        <div className="flex flex-col gap-6 md:gap-8 py-5">
          {petAges.map((age) => (
            <div key={age.id} className="flex flex-col gap-2">
              <p className="text-[#2F4156] font-semibold text-lg md:text-xl">
                {age.age}
              </p>
              <p className="text-[#2F4156] text-sm">{age.needs}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-full md:w-1/2 h-[250px] md:h-[400px] overflow-hidden md:flex items-center">
        <img
          src={ageGuideImg}
          alt="pet age guide"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PetAges;
