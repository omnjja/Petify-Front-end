import React from "react";
import { FaArrowRight } from "react-icons/fa";
import trackPhoto from "@/assets/home-media/pexels-kampus-7843933.webp";
import { Link } from "react-router-dom";
import UseLoggedUser from "@/hooks/UseLoggedUser";
import useShowToast from "@/hooks/useShowToast";
import SectionHead from "../shared/ui/SectionHead";
import Button from "../shared/ui/Button";

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
        <SectionHead
          head={"track your orders"}
          subHead={
            "Stay updated with real-time order tracking and never lose sight of your pet supplies."
          }
        />
        <div className="flex justify-center ">
          <Link to={isLogged && `/profile/orders`} onClick={() => showToast()}>
            <Button
              cover={true}
              className={
                "w-fit flex align-middle text-lg md:text-2xl transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105"
              }
            >
              <FaArrowRight className="text-[#FD7E14]" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
