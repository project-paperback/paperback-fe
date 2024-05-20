import { Link, NavLink } from "react-router-dom";
import { IconClose, IconProfile } from "./Icons";
import { useContext } from "react";
import { UserContext } from "../utilities_&_custom_hooks/General";
import axios from "axios";

const MobileMenu = (props) => {
  const user = useContext(UserContext);

  return (
    <div
      className={`top-0 right-0 fixed h-[100vh] w-full  bg-white ${props.divStyles}`}
    >
      <button
        className="absolute right-0 mr-5 mt-6 text-[1.5rem]"
        onClick={() => props.setIsOpen(!props.isOpen)}
      >
        <IconClose />
      </button>
      <div className="flex flex-col gap-6 h-full items-center pt-[15%] text-[1.5rem]">
        <div className="items-center *:ease-in *:duration-300 gap-[6px] lg:inline-flex">
          {!user ? (
            <NavLink
              className="hover:opacity-[0.7] flex items-center gap-2 "
              to="sign_in"
              onClick={() => props.setIsOpen(!props.isOpen)}
            >
              <IconProfile />
              <p>Sign In</p>
            </NavLink>
          ) : (
            <Link
              className="text-[#023047] hover:opacity-[0.7] flex items-center gap-2 "
              onClick={() => {
                axios
                  .post("https://paperback-vy73.onrender.com/api/sign_out")
                  .then(() => {
                    console.log("hello");
                    props.setUser(null);
                    localStorage.clear();
                  });
                props.setIsOpen(!props.isOpen);
              }}
            >
              <IconProfile />
              <p>Sign Out</p>
            </Link>
          )}
        </div>
        <NavLink
          className={`hover:opacity-[0.7] `}
          to="/"
          onClick={() => props.setIsOpen(!props.isOpen)}
        >
          Home Page
        </NavLink>{" "}
        <NavLink
          className={`hover:opacity-[0.7] `}
          to="bookstore"
          onClick={() => props.setIsOpen(!props.isOpen)}
        >
          Bookstore
        </NavLink>{" "}
        <NavLink
          className={`hover:opacity-[0.7] `}
          to="contact"
          onClick={() => props.setIsOpen(!props.isOpen)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
