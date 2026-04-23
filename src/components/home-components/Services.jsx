import React from "react";
import Service from "./Service";
import { services } from "@/constants/services";


const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10 px-5">
      <div className="capitalize text-2xl md:text-3xl font-semibold text-[#2F4156] text-center">
        our services
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
