import { Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import { useEffect, useState } from "react";
import SideCartMenu from "./components/SideCartMenu";

export function Layout(props) {
  const [divStyles, setDivStyles] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setDivStyles("side-cart-menu-open");
    } else {
      setDivStyles("side-cart-menu-closed");
    }
  }, [isOpen]);
  return (
    <div className="relative">
      <header className="lg:px-10">
        <NavBar
          setUser={props.setUser}
          setDivStyles={setDivStyles}
          setIsOpen={setIsOpen}
          divStyles={divStyles}
        />
      </header>
      <main className="lg:px-10">
        <SideCartMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          divStyles={divStyles}
          setUser={props.setUser}
        />

        <Outlet />
      </main>
    </div>
  );
}
