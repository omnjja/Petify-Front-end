import React from "react";
import foodHealthImg from "@/assets/beginner-media/pexels-enginakyurt-1437465.webp";
import SectionHead from "../shared/ui/SectionHead";

const FoodSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-[70px] py-6 md:py-[30px] gap-6">
      <div className="w-full md:w-[550px] h-[250px] md:h-[400px] overflow-hidden flex items-center">
        <img
          src={foodHealthImg}
          alt="food is health"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>


      <SectionHead
        className={`ml-6 w-full md:w-[37%]`}
        head={"Food is health"}
        subHead={
          "Give age-appropriate food, fresh water daily, and avoid human junk . Dogs and cats need protein-rich diets; birds need seeds and fresh greens."
        }
      />
    </div>
  );
};

export default FoodSection;
