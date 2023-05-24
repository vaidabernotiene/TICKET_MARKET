import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinksProtected, navLinksUnprotected } from "../constants";
import { AuthenticationContext } from "./AuthenticationContext";
import Button from "./Button";

export const Navbar = ({ isLoading, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);
  const { username } = useContext(AuthenticationContext);
  const [toggle, setToggle] = useState(false);

  const onHandlerBurger = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-primary w-full flex py-6 justify-between items-center navbar">
      <NavLink href='#' to='./home'><img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /></NavLink>
      
      {isSignedIn ? (
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-7">
          <li
            className={`font-redHat font-normal cursor-pointer text-[16px] "mr-0" : "mr-10"} text-white`}
          >
            <NavLink href="#" to="./new_participant">
              New participant
            </NavLink>
          </li>
          <li
            className={`font-redHat font-normal cursor-pointer text-[16px] "mr-0" : "mr-10"} text-white`}
          >
            <NavLink href="#" to="./participants_list">
              Participants List
            </NavLink>
          </li>
          <li
            className={`font-redHat font-normal cursor-pointer text-[16px] "mr-0" : "mr-10"} text-white`}
          ><div>Hello, {username}</div>
            <button onClick={onLogout}>LOGOUT</button>
          </li>
        </ul>
      ) : (
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-7">
          <li
            className={`font-redHat font-normal cursor-pointer text-[16px] "mr-0" : "mr-10"} text-white`}
          >
            <NavLink href="#" to="./login">
              Login
            </NavLink>
          </li>
          <li
            className={`font-redHat font-normal cursor-pointer text-[16px] "mr-0" : "mr-10"} text-white`}
          >
            <NavLink href="#" to="./register">
              Register
            </NavLink>
          </li>
        </ul>
      )}
      {/*  */}

      {isSignedIn && <button onClick={onLogout}>LOGOUT</button>}

      {/* ONLY FOR MOBILE DEVICES */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={onHandlerBurger}
        />

        {/* checking if toggle is turn on*/}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinksProtected.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-redHat font-normal cursor-pointer text-[16px] 
            ${index === navLinksProtected.length - 1 ? "mr-0" : "mb-4"} text-white`}
              >
                <NavLink href="#" to={`/${nav.id}`}>
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
