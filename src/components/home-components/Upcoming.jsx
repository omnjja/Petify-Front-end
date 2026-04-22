import React from "react";
import { FaArrowRight } from "react-icons/fa";
import upcomingPhoto from "@/assets/home-media/pexels-mikhail-nilov-7469213.webp";
import { Link } from "react-router-dom";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import useShowToast from "@/hooks/useShowToast";

const Upcoming = () => {
  const isLogged = UseLoggedUser();
  const showToast = useShowToast();
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center px-6 md:px-[70px] py-8 md:py-[30px] gap-8 md:gap-0">
      <div className="w-full md:w-[400px] h-[200px] md:h-[270px] flex items-center overflow-hidden">
        <img
          src={upcomingPhoto}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 px-4 md:px-[50px] w-full md:w-[35%] text-center md:text-left">
        <h5 className="text-[#2F4156] font-semibold text-2xl md:text-3xl capitalize">
          upcoming appointments
        </h5>
        <p className="text-[#2f415677] text-sm md:text-base">
          Manage and view your scheduled vet visits and services all in one
          convenient dashboard.
        </p>
        <Link
          to={isLogged && `/profile/appointments`}
          onClick={() => showToast()}
        >
          <button className="mx-auto flex px-5 py-2 align-middle font-semibold rounded-3xl w-fit text-xl md:text-2xl bg-[#F8F9FA] transition cursor-pointer duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
            <FaArrowRight className="text-[#FD7E14]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Upcoming;
