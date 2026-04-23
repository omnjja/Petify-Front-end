import React from "react";

const SectionHead = ({
  petify,
  head,
  subHead,
  superHead,
  headClassName,
  subHeadClassName,
}) => {
  const headType = superHead
    ? `font-bold text-3xl md:text-5xl`
    : `font-semibold text-2xl md:text-3xl`;
  return (
    <div className="flex flex-col justify-center gap-5 text-center md:text-left">
      {petify && (
        <p className="text-[#FD7E14] text-sm md:text-base font-bold">Petify</p>
      )}
      <h5 className={`text-[#2F4156] capitalize ${headType} ${headClassName}`}>
        {head}
      </h5>
      <p
        className={`text-[#2f415677] text-sm md:text-base ${subHeadClassName}`}
      >
        {subHead}
      </p>
    </div>
  );
};

export default SectionHead;
