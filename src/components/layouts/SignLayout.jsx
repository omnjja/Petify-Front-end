import React from "react";
import logo55 from "@/assets/logo55.png";
import logo from "@/assets/logo.webp";
const SignLayout = ({ children }) => {
  return (
    <div className="my-[30px] flex flex-col md:flex-row justify-evenly items-center min-h-[600px] px-[20px] md:px-[30px] gap-8">
      <div className="flex flex-grow items-center justify-start h-full bg-gray-50 shadow-lg px-2 py-5 rounded-lg w-full md:w-auto">
        {children}
      </div>
      <div className="hidden w-full md:w-[600px] h-[300px] md:h-[600px] overflow-hidden md:flex justify-center items-center">
        <picture className="w-full h-full">
          <source srcSet={logo} type="image/webp" />
          <img
            src={logo55}
            alt="Petify logo"
            width={600}
            height={600}
            loading="eager"
            decoding="async"
            className="w-full h-full object-contain md:object-cover"
          />
        </picture>
      </div>
    </div>
  );
};

export default SignLayout;
