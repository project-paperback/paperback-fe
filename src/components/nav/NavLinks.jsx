import { NavLink } from "react-router-dom";
import { IconProfile, ShoppingCartOutline } from "../Icons";
import { useContext } from "react";
import { TextContext } from "../../utilities_&_custom_hooks/General";
import axios from "axios";

const NavigationLinks = (props) => {
  const user = useContext(TextContext);
  return (
    <div className="text-lg flex items-center gap-4 *:text-[#023047] *:transition-all *:ease-in *:duration-300 w-fit h-full nav-links">
      <NavLink className={`hover:opacity-[0.7] hidden lg:block`} to="bookstore">
        Bookstore
      </NavLink>
      <NavLink className="hover:opacity-[0.7]  hidden lg:block" to="contact">
        Contact
      </NavLink>
      <NavLink className="hover:opacity-[0.7] hidden lg:block" to="sign_up">
        Sign Up
      </NavLink>
      <div className="items-center *:ease-in *:duration-300 gap-[6px] hidden lg:inline-flex">
        <IconProfile />
        {/* <NavLink className="hover:opacity-[0.7]" to="sign_in">
          Sign In
        </NavLink> */}
        {!user ? (
          <NavLink className="hover:opacity-[0.7]" to="sign_in">
            Sign In
          </NavLink>
        ) : (
          <NavLink
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
          </NavLink>
        )}
      </div>
      <NavLink className="hover:opacity-[0.7]" to="shopping_cart">
        <ShoppingCartOutline height={"1.8rem"} width={"1.8rem"} />
      </NavLink>
    </div>
  );
};
export default NavigationLinks;
