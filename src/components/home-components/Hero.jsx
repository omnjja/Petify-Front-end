import React from "react";
import logo from "../../../public/logo55.png";
import { Link } from "react-router-dom";
import UseLoggedUser from "../../hooks/UseLoggedUser";

const Hero = () => {
  const isLogged = UseLoggedUser();
  return (
    <div className="flex flex-col md:flex-row justify-center bg-[#F8F9FA] px-5 py-5 md:px-[70px]">
      <div className="flex flex-col justify-center gap-5 px-5 md:px-[50px] w-full md:w-[50%] text-center md:text-left">
        <p className="text-[#FD7E14] text-sm md:text-base font-bold">Petify</p>
        <h5 className="text-[#2F4156] font-bold text-3xl md:text-5xl capitalize">
          a pet platform with everthing you need
        </h5>
        {/* <p className="text-[#2f415677] text-sm md:text-base">
          Caring for your furry friends has never been easier. From products and
          guides to booking vets and services — all in one place.
        </p> */}
        {!isLogged &&
        <Link
          to="/signup"
          className="hidden md:flex mx-auto md:mx-0 w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer"
        >
          Start Now
        </Link>
        }
      </div>

      <div className="w-full md:w-[500px] h-[300px] md:h-[500px] mt-5 md:mt-0 overflow-hidden flex items-center justify-center">
        <img
          src={logo}
          alt="petify logo"
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain"
          loading="lazy"
        />
      </div>
      {/* only show if u are not loggid in */}
      <Link to="/signup" className="md:hidden mx-auto">
        <button className=" w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer">
          Start Now
        </button>
      </Link>
    </div>
  );
};

export default Hero;
