import { pets } from "@/constants/bginnerGuideData";
import React from "react";
import PetType from "./PetType";

const PetsTypes = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-10 gap-4 bg-[#F8F9FA]">
      <div className="flex flex-col md:items-start gap-1 text-center md:text-left">
        <p className="text-[#2F4156] capitalize text-2xl md:text-4xl font-semibold">
          every pet is unique
        </p>
        <p className="text-[#2F4156] text-sm md:text-base">
          Dogs, cats, birds, rabbits — each has different needs. Consider your
          lifestyle, home space, and budget before choosing.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {pets.map((pet) => (
            <PetType  key={pet.id} pet={pet}/>
        ))}
      </div>
    </div>
  );
};

export default PetsTypes;
