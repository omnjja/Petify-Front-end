import React from "react";
import { Link } from "react-router-dom";
import { supportStages } from "@/constants/bginnerGuideData";

const SupportStages = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-10 gap-3 md:gap-8">
      <p className="text-[#FD7E14] capitalize text-2xl md:text-4xl font-semibold">
        support for every stage
      </p>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-7 justify-center md:justify-start">
        {supportStages.map((stage) => (
          <div
            key={stage.id}
            className="flex flex-col items-center gap-1 px-2 text-center"
          >
            <Link to={`/${stage.section}`}>
              <p className="text-[#2F4156] font-semibold text-lg md:text-2xl">
                {stage.stage}
              </p>
            </Link>
            <p className="text-[#2f415677] text-sm md:text-base">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportStages;
