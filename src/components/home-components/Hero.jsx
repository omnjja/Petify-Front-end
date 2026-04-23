import React from "react";
import { Link } from "react-router-dom";
import UseLoggedUser from "@/hooks/UseLoggedUser";
import logo from "@/assets/shared/logo.webp";
import Button from "../shared/ui/Button";
import SectionHead from "../shared/ui/SectionHead";

const Hero = () => {
  const isLogged = UseLoggedUser();
  return (
    <div className="flex flex-col md:flex-row justify-center bg-[#F8F9FA] px-5 py-5 md:px-[70px]">
      <div className="flex flex-col justify-center gap-5 px-5 md:px-[50px] w-full md:w-[50%]">
        <SectionHead
          petify
          head={"a pet platform with everthing you need"}
          headClassName={"tracking-wide"}
          superHead={true}
          subHead={
            "Caring for your furry friends has never been easier. From products and guides to booking vets and services — all in one place."
          }
        />
        {!isLogged && (
          <Link to="/signup" className="hidden md:flex mx-auto md:mx-0 w-fit ">
            <Button className={"font-semibold"} primary={true}>
              Start Now
            </Button>
          </Link>
        )}
      </div>

      <div className="hidden w-full md:w-[500px] h-[300px] md:h-[500px] mt-5 md:mt-0 overflow-hidden md:flex items-center justify-center">
        <img
          src={logo}
          alt="Petify logo"
          width={300}
          height={300}
          loading="eager"
          decoding="async"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>
      {!isLogged && (
        <Link to="/signup" className="md:hidden mx-auto mt-3">
          <Button className={"font-semibold"} primary={true}>
            Start Now
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Hero;
