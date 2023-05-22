import { useState } from "react";
import { NavLink } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const onHandlerBurger = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-primary w-full flex p-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-popins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}
          >
            <NavLink href="#" to={`/${nav.id}`}>
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>

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
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-redHat font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white`}
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

export default NavBar;
