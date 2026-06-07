import React from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "@/constants/userProfile";

const ProfileNavbar = () => (
  <div className="w-full md:w-fit m-auto my-2 bg-[#f5efebeb] px-4 md:px-10 py-2 rounded-3xl">
    <div className="flex justify-between text-sm md:text-base font-semibold text-[#2F4156] gap-4 md:gap-8">
      {NAV_LINKS.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `px-1.5${isActive ? " text-[#FD7E14] border-b-2 border-[#FD7E14]" : ""}`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  </div>
);

export default ProfileNavbar;
