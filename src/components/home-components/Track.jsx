import React from "react";
import { FaArrowRight } from "react-icons/fa";
import trackPhoto from "@/assets/home-media/pexels-kampus-7843933.webp";
import { Link } from "react-router-dom";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import useShowToast from "@/hooks/useShowToast";

const Track = () => {
  const isLogged = UseLoggedUser();
  const showToast = useShowToast();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-[70px] py-[30px] gap-7 md:gap-14">
      <div className="w-full max-w-[350px] md:max-w-[500px] h-[200px] md:h-[250px] overflow-hidden flex items-center justify-center">
        <img
          src={trackPhoto}
          alt="Track orders"
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center gap-3 w-full md:w-[35%] text-center md:text-left px-3 md:px-[50px]">
        <h5 className="text-[#2F4156] font-semibold text-2xl md:text-3xl capitalize">
          track your orders
        </h5>
        <p className="text-[#2f415677] text-sm md:text-base">
          Stay updated with real-time order tracking and never lose sight of
          your pet supplies.
        </p>
        <div className="flex justify-center ">
          <Link to={isLogged && `/profile/orders`} onClick={() => showToast()}>
            <button className="flex align-middle px-5 py-2 font-semibold rounded-3xl w-fit text-lg md:text-2xl bg-[#F8F9FA] transition cursor-pointer duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
              <FaArrowRight className="text-[#FD7E14]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
