import { NavLink } from "react-router-dom";
import { IconProfile, ShoppingCartOutline } from "../icons/Icons";

const NavigationLinks = () => {
  return (
    <div className="text-lg flex items-center gap-4 *:text-[#023047] *:transition-all *:ease-in *:duration-300 w-fit h-full">
      <NavLink className="hover:opacity-[0.7] hidden lg:block">
        Bookstore
      </NavLink>
      <NavLink className="hover:opacity-[0.7] hidden lg:block">Contact</NavLink>
      <NavLink className="hover:opacity-[0.7] hidden lg:block">Sign Up</NavLink>
      <div className="items-center *:ease-in *:duration-300 gap-[6px] hidden lg:inline-flex">
        <IconProfile />
        <NavLink className="hover:opacity-[0.7]">Sign In</NavLink>
      </div>
      <NavLink className="hover:opacity-[0.7]">
        <ShoppingCartOutline height={"1.8rem"} width={"1.8rem"} />
      </NavLink>
    </div>
  );
};
export default NavigationLinks;
