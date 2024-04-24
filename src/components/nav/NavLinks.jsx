import { NavLink } from "react-router-dom";
import { IconProfile, ShoppingCartOutline } from "../icons/Icons";

const NavigationLinks = () => {
  return (
    <div className="text-lg flex items-center *:flex *:gap gap-4 *:text-[#023047] *:transition-all *:ease-in *:duration-300 w-fit h-full ">
      <NavLink className="hover:opacity-[0.7]">Bookstore</NavLink>
      <NavLink className="hover:opacity-[0.7]">Contact</NavLink>
      <NavLink className="hover:opacity-[0.7]">Sign Up</NavLink>
      <div className="flex items-center *:ease-in *:duration-300 gap-[3px]">
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
