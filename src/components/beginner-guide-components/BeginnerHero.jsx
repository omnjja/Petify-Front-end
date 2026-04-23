import React from "react";
import beginnerPhoto from "@/assets/beginner-media/download.webp";
import SectionHead from "../shared/ui/SectionHead";

const BeginnerHero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center bg-[#F8F9FA] px-6 py-6 md:py-0 md:px-[70px]">
        <SectionHead
          className={`w-full md:w-[50%] px-4 md:px-[50px] text-center`}
          petify={true}
          superHead={true}
          head={"If pets could talk, they’d talk about us!"}
          subHead={
            "Book services, shop for pet products, get expert advice all in one place!"
          }
        />

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
