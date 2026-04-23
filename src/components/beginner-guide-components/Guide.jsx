import React from "react";

const Guide = ({ guide }) => {
  return (
    <div
      key={guide.id}
      className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
    >
      <div className="w-full h-[220px] md:h-[260px] overflow-hidden">
        <img
          src={guide.photo}
          alt={guide.title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-[#2F4156] text-lg md:text-xl font-semibold">
          {guide.title}
        </h3>
        <p className="text-[#2f415677] text-sm md:text-base leading-relaxed">
          {guide.text}
        </p>
      </div>
    </div>
  );
};

export default Guide;
