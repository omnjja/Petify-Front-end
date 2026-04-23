import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <Link to={service.id}>
      <div className="group flex flex-col w-full max-w-[280px] sm:max-w-none rounded-[10px] bg-[#F8F9FA] cursor-pointer duration-300 ease-in-out hover:scale-105">
        <div className="w-full h-[200px] sm:h-[180px] overflow-hidden">
          <img
            src={service.photo}
            alt={service.name}
            className="w-full h-full object-cover rounded-t-[10px]"
            loading="lazy"
          />
        </div>
        <div className="flex gap-2 px-3 py-2 justify-between items-center">
          <p className="text-base md:text-lg font-semibold text-[#2F4156]">
            {service.name}
          </p>

          <button className="cursor-pointer group-hover:bg-[#FD7E14] p-2 rounded-2xl">
            <FaArrowRight className="text-[#FD7E14] text-sm md:text-base group-hover:text-white" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Service;
