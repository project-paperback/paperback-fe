import { NavLink, Link } from "react-router-dom";
import { IconProfile, ShoppingCartOutline } from "../Icons";
import { useContext } from "react";
import { UserContext } from "../../utilities_&_custom_hooks/General";
import axios from "axios";

const NavigationLinks = (props) => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className="text-lg flex items-center gap-4 *:text-[#023047] *:transition-all *:ease-in *:duration-300 w-fit h-full nav-links">
      <NavLink className={`hover:opacity-[0.7] hidden lg:block`} to="bookstore">
        Bookstore
      </NavLink>
      <NavLink className="hover:opacity-[0.7]  hidden lg:block" to="contact">
        Contact
      </NavLink>
      {/* <NavLink className="hover:opacity-[0.7] hidden lg:block" to="sign_up">
        Sign Up
      </NavLink> */}
      <div className="items-center *:ease-in *:duration-300 gap-[6px] hidden lg:inline-flex">
        <IconProfile />

        {!user ? (
          <NavLink className="hover:opacity-[0.7] " to="sign_in">
            Sign In
          </NavLink>
        ) : (
          <Link
            className="text-[#023047] hover:opacity-[0.7]"
            onClick={() => {
              axios
                .post("https://paperback-vy73.onrender.com/api/sign_out")
                .then(() => {
                  props.setUser(null);
                  localStorage.clear();
                });
            }}
          >
            Sign Out
          </Link>
        )}
      </div>
      <NavLink
        onClick={() => props.setIsOpen(!props.isOpen)}
        className="hover:opacity-[0.7]"
      >
        <ShoppingCartOutline height={"1.8rem"} width={"1.8rem"} />
      </NavLink>
    </div>
  );
};
export default NavigationLinks;
