import React from "react";
import logo from "@/assets/logo55.png";

const SignLayout = ({ children }) => {
  return (
    <div className="my-[30px] flex flex-col md:flex-row justify-evenly items-center min-h-[600px] px-[20px] md:px-[30px] gap-8">
      <div className="flex flex-grow items-center justify-start h-full bg-gray-50 shadow-lg px-2 py-5 rounded-lg w-full md:w-auto">
        {children}
      </div>
      <div className="hidden w-full md:w-[600px] h-[300px] md:h-[600px] overflow-hidden md:flex justify-center items-center">
        <img
          src={logo}
          loading="lazy"
          alt="petify logo"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>
    </div>
  );
};

export default SignLayout;
