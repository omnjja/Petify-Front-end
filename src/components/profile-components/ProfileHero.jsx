import React from "react";
import SectionHead from "../shared/ui/SectionHead";

const ProfileHero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center bg-[#F8F9FA] items-center px-6 md:px-[70px] py-10 md:h-[500px] gap-8 md:gap-0">
      <div className="flex flex-col justify-center gap-4 md:gap-5 w-full md:w-1/2 text-center md:text-left">
        <SectionHead
          petify
          head={"welcome back!"}
          headClassName={"tracking-wide"}
          superHead={true}
          subHead={
            "Easily add and update your pet’s information — from name, breed, and age to health records and vaccination history. Everything you need to track your pet’s wellbeing is organized and accessible anytime."
          }
        />
      </div>
    </div>
  );
};

export default ProfileHero;
