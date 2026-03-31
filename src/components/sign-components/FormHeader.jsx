import React from "react";

const FormHeader = ({head, subHead}) => {
  return (
    <>
      <div className="flex items-start text-3xl md:text-5xl font-bold mb-2 text-center text-[#FD7E14]">
        {head}
      </div>
      <p className="text-[#2f415677] mb-3 text-sm md:text-base">
        {subHead}
      </p>
    </>
  );
};

export default FormHeader;
