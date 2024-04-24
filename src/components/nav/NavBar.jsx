import { BrandLogo } from "../icons/Icons";
import NavigationLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center  h-[109px] ">
        <BrandLogo />
        <NavigationLinks />
      </div>
    </nav>
  );
};

export default NavBar;
