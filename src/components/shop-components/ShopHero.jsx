import React from "react";
import shopPhoto from "@/assets/shared/image.webp";
import SectionHead from "../shared/ui/SectionHead";

const ShopHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#F8F9FA] px-5 md:px-[70px] py-6 md:pt-6 md:py-0">
      <div className="flex flex-col justify-center gap-5 px-5 md:px-[50px] w-full md:w-[50%]">
        <SectionHead
          superHead={true}
          head={"The friendly and caring pet products store"}
          subHead={
            "Discover a wide range of high-quality pet products tailored to your furry friend’s needs. From nutritious food and comfy accessories to fun toys and grooming essentials — everything your pet loves, all in one place."
          }
        />
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
