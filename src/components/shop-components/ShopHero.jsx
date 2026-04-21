import React from "react";
import shopPhoto from "@/assets/shared/image.webp";

const ShopHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#F8F9FA] px-5 md:px-[70px] py-6 md:pt-6 md:py-0">
      <div className="flex flex-col justify-center gap-5 px-4 md:px-[50px] w-full md:w-[50%] text-center md:text-left">
        <p className="text-[#FD7E14] text-sm font-bold">Petify</p>
        <h5 className="text-[#2F4156] font-bold text-3xl md:text-5xl capitalize leading-snug">
          The friendly and caring pet products store
        </h5>
        <p className="text-[#2f415677] text-sm md:text-base">
          Discover a wide range of high-quality pet products tailored to your
          furry friend’s needs. From nutritious food and comfy accessories to
          fun toys and grooming essentials — everything your pet loves, all in
          one place.
        </p>
      </div>

      <div className="hidden w-full md:w-[600px] h-[250px] md:h-[500px] overflow-hidden md:flex items-center md:mt-0">
        <img
          src={shopPhoto}
          alt="Vet Hero"
          className="w-full h-full object-cover rounded-lg md:rounded-none"
        />
      </div>
    </div>
  );
};

export default ShopHero;
