import { Link, Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import { useEffect, useState } from "react";

export function Layout(props) {
  const [divStyles, setDivStyles] = useState("");
  const [bgStyles, setBgStyles] = useState("");
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
          isOpen={isOpen}
        />
      </header>
      <main className="lg:px-10">
        <div
          className={`top-0 right-0 fixed h-[100vh] w-[30%] bg-red-300 ${divStyles}`}
        >
          <button className="mr-4" onClick={() => setIsOpen(!isOpen)}>
            Close
          </button>
          <button>
            <Link to={"shopping-cart"}>View Cart</Link>
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
