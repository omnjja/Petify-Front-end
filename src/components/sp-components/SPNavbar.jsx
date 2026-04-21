import React, { useState } from "react";
import style from "../../css-modules/Navbar.module.css";
import logo from "@/assets/shared/logo.webp";
import UseLogout from "../../hooks/UseLogout";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import Notifications from "../Notifications";

const SPNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logout = UseLogout();
  const loggedUser = UseLoggedUser();

  return (
    <nav
      className={`${style.navbar} sticky top-0 z-50 px-4 py-3 flex items-center justify-between`}
    >
      <div className="w-[70px] h-[70px] flex items-center">
        <img src={logo} alt="Logo" className="w-[60px] h-[60px]" />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-center">
        {loggedUser && (
          <>
            <Notifications />
          </>
        )}
      </div>

      <div className="md:hidden flex items-center justify-center gap-2">
        {loggedUser && <Notifications />}

        <button onClick={() => setIsOpen(!isOpen)} className="text-[#2F4156]">
          {isOpen ? (
            <MdOutlineCancel size={28} />
          ) : (
            <RxHamburgerMenu size={28} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[59px] right-0 w-[50%]  px-3 text-[#2F4156] bg-[#FFFFFF] shadow-lg rounded-b-2xl flex flex-col items-center py-4 space-y-4 md:hidden z-50 ">
          {loggedUser && (
            <>
              <Link to="/profile" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <Link
                to="/login"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-[#FF383C] font-semibold"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default SPNavbar;
