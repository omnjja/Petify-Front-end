import React from 'react'
import petsFamilyImg from "@/assets/beginner-media/image (4).webp";

const FamilyPets = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row py-10 px-6 md:px-10 w-[90%] md:w-[85%] m-auto items-center gap-6">
      <div className="flex flex-col gap-3 text-center md:text-left">
        <p className="text-[#FD7E14] text-2xl md:text-4xl font-semibold">
          Pets are more than companions, they are family.
        </p>
        <p className="text-[#2F4156] text-sm md:text-base md:w-[60%]">
          They bring joy, comfort, and unconditional love into our lives,
          teaching us responsibility, patience, and empathy. Caring for a pet
          can reduce stress, boost happiness, and even improve our physical
          health through play and daily routines.
        </p>
      </div>
      <div className="w-full md:w-[520px] h-[260px] md:h-[320px] overflow-hidden">
        <img
          src={petsFamilyImg}
          alt="pets are family"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default FamilyPets
