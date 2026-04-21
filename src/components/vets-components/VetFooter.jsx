import React from "react";
import photo1 from "@/assets/vets-media/pexels-misolo-cosmetic-2588316-4841264.webp"
import photo2 from "@/assets/vets-media/pexels-tahir-x-lf-2153788153-33394308.webp"

const VetFooter = () => {
  return (
    <div className="hidden md:flex m-auto gap-5 justify-center flex-wrap w-[70%] py-10 ">
      <div className="w-[40%] h-[250px] overflow-hidden ">
        <img
          src={photo1}
          className=" w-full h-full object-cover rounded-[10px] "
        />
      </div>
      <div className="w-[40%] h-[250px] overflow-hidden ">
        <img
          src={photo2}
          className=" w-full h-full object-cover rounded-[10px] "
        />
      </div>
    </div>
  );
};

export default VetFooter;
