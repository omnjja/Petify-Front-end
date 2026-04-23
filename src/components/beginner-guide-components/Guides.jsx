import React from "react";
import Guide from "./Guide";
import { petCareGuides } from "@/constants/bginnerGuideData";

const Guides = () => {
  return (
    <div className="bg-[#F8F9FA] px-6 md:px-16 py-10">
      <h2 className="text-2xl md:text-4xl font-bold text-[#2F4156] text-center mb-10">
        Guides
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 md:max-w-[80%] mx-auto">
        {petCareGuides.map((guide) => (
          <Guide key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};

export default Guides;
