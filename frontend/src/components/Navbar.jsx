import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinksProtected, navLinksUnprotected } from "../constants";
import { AuthenticationContext } from "./AuthenticationContext";
import styles from "../style";

export const Navbar = ({ isLoading, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);
  const { username } = useContext(AuthenticationContext);
  const [toggle, setToggle] = useState(false);

  const onHandlerBurger = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={`bg-primary ${styles.boxWidth} ${styles.flexBetween} ${styles.paddingY} items-center navbar`}
    >
      <NavLink href="#" to="./home">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </NavLink>

      {isSignedIn ? (
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-7">
          {navLinksProtected.map((nav) => (
            <li
              key={nav.id}
              className={`font-redHat font-normal cursor-pointer text-[16px] 
              text-white`}
            >
              <NavLink href="#" to={`/${nav.id}`}>
                {nav.title}
              </NavLink>
            </li>
          ))}
          <li
            className={`font-redHat font-normal cursor-pointer text-[16px] "mr-0" : "mr-10"} text-white`}
          >
            <div>Hello, {username}</div>
            <button
              onClick={onLogout}
              className={`py-3 w-full redHat 
      font-medium text-[12px] text-primary 
      bg-form-gradient rounded-[10px] text-white
      outline-none`}
            >
              Log Out
            </button>
          </li>
        </ul>
      ) : (
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-7">
          {navLinksUnprotected.map((nav) => (
            <li
              key={nav.id}
              className={`font-redHat font-normal cursor-pointer text-[16px] 
              text-white`}
            >
              <NavLink href="#" to={`/${nav.id}`}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* ONLY FOR MOBILE DEVICES */}
      {/* checking if toggle is turn on*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={onHandlerBurger}
        />

        {isSignedIn ? (
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              <div
                className={`font-redHat font-normal cursor-pointer text-[16px] 
            mb-4 text-white`}
              >
                Hello, {username}
              </div>
              {navLinksProtected.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-redHat font-normal cursor-pointer text-[16px] 
            ${
              index === navLinksProtected.length - 1 ? "mr-0" : "mb-4"
            } text-white`}
                >
                  <NavLink href="#" to={`/${nav.id}`}>
                    {nav.title}
                  </NavLink>
                </li>
              ))}
              <button
                onClick={onLogout}
                className={`py-3 w-full redHat 
      font-medium text-[12px] text-primary 
      bg-form-gradient rounded-[10px] text-white
      outline-none mt-4`}
              >
                Log Out
              </button>
            </ul>
          </div>
        ) : (
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinksUnprotected.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-redHat font-normal cursor-pointer text-[16px] 
            ${
              index === navLinksUnprotected.length - 1 ? "mr-0" : "mb-4"
            } text-white`}
                >
                  <NavLink href="#" to={`/${nav.id}`}>
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
