import React, { useState } from "react";
import style from "../css-modules/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import logo from "@/assets/shared/logo.webp";
import Notifications from "./Notifications";
import UseLogout from "../hooks/UseLogout";
import UseLoggedUser from "../hooks/UseLoggedUser";
import UseCartCount from "../hooks/UseCartCount";
import avatar from "@/assets/shared/download (4).webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logout = UseLogout();
  const loggedUser = UseLoggedUser();
  const count = UseCartCount();

  return (
    <nav
      className={`${style.navbar} sticky top-0 z-50 px-4 py-3 flex items-center justify-between`}
    >
      <div className="w-[70px] h-[70px] flex items-center">
        <img src={logo} alt="Logo" className="w-[60px] h-[60px]" />
      </div>

      <div className="hidden md:flex justify-between w-[500px] font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-1.5 text-[#FD7E14] border-b-2 border-b-[#FD7E14]"
              : "px-1.5"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "px-1.5 text-[#FD7E14] border-b-2 border-b-[#FD7E14]"
              : "px-1.5"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/vets"
          className={({ isActive }) =>
            isActive
              ? "px-1.5 text-[#FD7E14] border-b-2 border-b-[#FD7E14]"
              : "px-1.5"
          }
        >
          Vets
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "px-1.5 text-[#FD7E14] border-b-2 border-b-[#FD7E14]"
              : "px-1.5"
          }
        >
          Pet Services
        </NavLink>
        <NavLink
          to="/beginner-guide"
          className={({ isActive }) =>
            isActive
              ? "px-1.5 text-[#FD7E14] border-b-2 border-b-[#FD7E14]"
              : "px-1.5"
          }
        >
          Beginner Guide
        </NavLink>
      </div>

      <div className="hidden md:flex gap-4 items-center justify-center">
        {loggedUser ? (
          <>
            <Link to="/cart">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                  2.293c-.63.63-.184 1.707.707 1.707H17m0 
                  0a2 2 0 100 4 2 2 0 000-4zm-8 
                  2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-xs indicator-item bg-[#FD7E14] text-white">
                      {count}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Notifications />
            <div className="hidden md:block cursor-pointer dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={avatar} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-[#FF383C]" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className={style.btn}>Login</button>
          </Link>
        )}
      </div>

      <div className="md:hidden flex items-center justify-center gap-2">
        {loggedUser && (
          <>
            <Link to="/cart">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                  2.293c-.63.63-.184 1.707.707 1.707H17m0 
                  0a2 2 0 100 4 2 2 0 000-4zm-8 
                  2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-xs indicator-item bg-[#FD7E14] text-white">
                    {count}
                  </span>
                </div>
              </div>
            </Link>
            <Notifications />
          </>
        )}

        <button onClick={() => setIsOpen(!isOpen)} className="text-[#2F4156]">
          {isOpen ? (
            <MdOutlineCancel size={28} />
          ) : (
            <RxHamburgerMenu size={28} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[59px] right-0 w-[50%]  px-3  bg-white shadow-lg rounded-b-2xl flex flex-col items-center py-4 space-y-4 md:hidden z-50 ">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#FD7E14] font-semibold" : "text-[#2F4156]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#FD7E14] font-semibold" : "text-[#2F4156]"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/vets"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#FD7E14] font-semibold" : "text-[#2F4156]"
            }
          >
            Vets
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#FD7E14] font-semibold" : "text-[#2F4156]"
            }
          >
            Pet Services
          </NavLink>
          <NavLink
            to="/beginner-guide"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#FD7E14] font-semibold" : "text-[#2F4156]"
            }
          >
            Beginner Guide
          </NavLink>

          {loggedUser ? (
            <>
              <NavLink
                to="/profile/appointments"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#FD7E14] font-semibold" : "text-[#2F4156]"
                }
              >
                Appointments
              </NavLink>
              <NavLink
                to="/profile/orders"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#FD7E14] font-semibold" : "text-[#2F4156]"
                }
              >
                Orders
              </NavLink>
              <NavLink
                to="/profile/info"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#FD7E14] font-semibold" : "text-[#2F4156]"
                }
              >
                Profile
              </NavLink>
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
          ) : (
            <Link to="/login">
              <button
                className={`${style.btn} md:hidden`}
                onClick={() => setIsOpen(false)}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
