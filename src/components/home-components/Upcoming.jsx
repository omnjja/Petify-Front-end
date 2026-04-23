import React from "react";
import { FaArrowRight } from "react-icons/fa";
import upcomingPhoto from "@/assets/home-media/pexels-mikhail-nilov-7469213.webp";
import { Link } from "react-router-dom";
import UseLoggedUser from "@/hooks/UseLoggedUser";
import useShowToast from "@/hooks/useShowToast";
import SectionHead from "../shared/ui/SectionHead";
import Button from "../shared/ui/Button";

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
        <SectionHead
          head={"upcoming appointments"}
          subHead={
            "Manage and view your scheduled vet visits and services all in one convenient dashboard."
          }
        />
        <Link
          to={isLogged && `/profile/appointments`}
          onClick={() => showToast()}
        >
          <Button
            cover={true}
            className={
              "flex align-middle w-fit mx-auto text-lg md:text-2xl transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105"
            }
          >
            <FaArrowRight className="text-[#FD7E14]" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Upcoming;
