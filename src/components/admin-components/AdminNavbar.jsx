import React from "react";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import Notifications from "../Notifications";
import { Link } from "react-router-dom";
import style from "../../css-modules/Navbar.module.css";
import logo from "@/assets/shared/logo.webp";
import UseLogout from "../../hooks/UseLogout";

const AdminNavbar = () => {
  const loggedUser = UseLoggedUser();
  const logout = UseLogout();

  return (
    <nav
      className={`${style.navbar} sticky top-0 z-50 px-4 py-3 flex items-center justify-between`}
    >
      <div className="w-[70px] h-[70px] flex items-center">
        <img src={logo} alt="Logo" className="w-[60px] h-[60px]" />
      </div>

      <div className="flex gap-4 items-center justify-center">
        {loggedUser && (
          <>
            <Notifications />

            <Link to="/login">
              <button
                className={`${style.btn} !bg-[#FF383C]`}
                onClick={() => logout()}
              >
                Logout
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
