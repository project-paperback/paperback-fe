import { BrandLogo } from "../Icons";
import NavigationLinks from "./NavLinks";

const NavBar = (props) => {
  return (
    <nav>
      <div className="flex justify-between items-center  h-[109px] bg-white pr-3 lg:pr-0">
        <BrandLogo />
        <NavigationLinks
          setUser={props.setUser}
          setDivStyles={props.setDivStyles}
          setIsOpen={props.setIsOpen}
          isOpen={props.isOpen}
        />
      </div>
    </nav>
  );
};

export default NavBar;
