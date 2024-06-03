import { NavLink, Link } from "react-router-dom";
import { IconProfile, ShoppingCartOutline } from "../Icons";
import { useContext } from "react";
import { UserContext } from "../../utilities_&_custom_hooks/General";
import axios from "axios";
import { Dropdown } from "../SmallComponents";
const NavigationLinks = (props) => {
  const user = useContext(UserContext);

  return (
    <div className="text-lg flex items-center gap-4 *:text-[#023047] *:transition-all *:ease-in *:duration-300 w-fit h-full nav-links">
      <NavLink className={`hover:opacity-[0.7] hidden lg:block`} to="/">
        Home
      </NavLink>
      <NavLink
        className={`hover:opacity-[0.7] hidden lg:block`}
        to="bookstore?page=1"
      >
        Bookstore
      </NavLink>
      <NavLink className="hover:opacity-[0.7]  hidden lg:block" to="contact">
        Contact
      </NavLink>
      <Dropdown setUser={props.setUser} />
      {!user ? (
        <button disabled={true}>
          {" "}
          <ShoppingCartOutline
            height={"1.8rem"}
            width={"1.8rem"}
            fill={"#8d99ae"}
          />
        </button>
      ) : (
        <NavLink className="hover:opacity-[0.7]" to={"shopping-cart"}>
          <ShoppingCartOutline height={"1.8rem"} width={"1.8rem"} />
        </NavLink>
      )}

      <button
        className="lg:hidden "
        onClick={() => props.setIsOpen(!props.isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="30px"
          height="35px"
          fill="#023047"
        >
          <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
        </svg>
      </button>
    </div>
  );
};
export default NavigationLinks;
