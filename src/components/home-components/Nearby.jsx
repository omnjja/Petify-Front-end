import React from "react";
import locPhoto from "@/assets/home-media/pexels-lara-jameson-8828418.webp";
import { Link } from "react-router-dom";
import UseLoggedUser from "@/hooks/UseLoggedUser";
import useShowToast from "@/hooks/useShowToast";
import Button from "../shared/ui/Button";
import SectionHead from "../shared/ui/SectionHead";

const Nearby = () => {
  const isLogged = UseLoggedUser();
  const showToast = useShowToast();
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center bg-[#F8F9FA] px-6 md:px-[70px] py-8 md:py-[30px]">
      <div className="flex flex-col justify-center gap-4 px-4 md:px-[50px] w-full md:w-[35%] text-center md:text-left">
        <SectionHead
          petify={true}
          head={"find nearby pet services"}
          subHead={
            "Locate grooming salons, vet clinics, and pet-friendly spots around you in seconds."
          }
        />
        <Link to={isLogged && `/nearby-places`} onClick={() => showToast()}>
          <div className="hidden mx-auto md:mx-0 md:flex align-middle">
            <Button primary={true}>Search Now</Button>
          </div>
        </Link>
      </div>
      <div className="hidden w-full md:w-[400px] h-[250px] md:h-[400px] md:flex justify-center items-center overflow-hidden">
        <img
          src={locPhoto}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <Link to={isLogged && `/nearby-places`} onClick={() => showToast()}>
        <div className="md:hidden mx-auto flex w-fit">
          <Button primary={true}>Search Now</Button>
        </div>
      </Link>
    </div>
  );
};

export default Nearby;
