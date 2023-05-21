import { useState } from "react";

import { Login } from "./Login";
import { Register } from "./Register";
import { menu, close } from "../assets";
import { defaults } from "autoprefixer";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const onHandlerBurger = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}

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
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
