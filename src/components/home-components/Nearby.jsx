import React from "react";
import locPhoto from "@/assets/home-media/pexels-lara-jameson-8828418.webp";
import { Link } from "react-router-dom";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import useShowToast from "@/hooks/useShowToast";

const Nearby = () => {
  const isLogged = UseLoggedUser();
  const showToast = useShowToast();
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center bg-[#F8F9FA] px-6 md:px-[70px] py-8 md:py-[30px] gap-8 md:gap-0">
      <div className="flex flex-col justify-center gap-4 px-4 md:px-[50px] w-full md:w-[35%] text-center md:text-left">
        <p className="text-[#FD7E14] text-sm md:text-s font-bold">Petify</p>
        <h5 className="text-[#2F4156] font-bold text-2xl md:text-3xl capitalize">
          find nearby pet services
        </h5>
        <p className="text-[#2f415677] text-sm md:text-base">
          Locate grooming salons, vet clinics, and pet-friendly spots around you
          in seconds.
        </p>
        <Link to={isLogged ? `/nearby-places` : `/login`}>
          <button className="hidden mx-auto md:mx-0 md:flex w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer hover:bg-[#1f2c3d] transition">
            Search Now
          </button>
        </Link>
      </div>
      <div className="w-full md:w-[400px] h-[250px] md:h-[400px] flex justify-center items-center overflow-hidden">
        <img
          src={locPhoto}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <Link to={isLogged && `/nearby-places`} onClick={() => showToast()}>
        <button className="md:hidden mx-auto md:mx-0 flex w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer hover:bg-[#1f2c3d] transition">
          Search Now
        </button>
      </Link>
    </div>
  );
};

export default Nearby;
