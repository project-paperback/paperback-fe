import { Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import { useEffect, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import { Footer } from "./components/nav/Footer";

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
    <div className="relative flex flex-col justify-between h-screen ">
      <header className="lg:px-10">
        <NavBar
          setUser={props.setUser}
          setDivStyles={setDivStyles}
          setIsOpen={setIsOpen}
          divStyles={divStyles}
        />
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          divStyles={divStyles}
          setUser={props.setUser}
        />
      </header>
      <main className="lg:px-10">
        <Outlet />
      </main>
      <div className="mt-[8rem]">
        <Footer />
      </div>
    </div>
  );
}
