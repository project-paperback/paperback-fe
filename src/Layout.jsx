import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import { useEffect, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import { Footer } from "./components/nav/Footer";
import { useFetchData } from "./utilities_&_custom_hooks/fetchHooks";

export function Layout(props) {
  const [divStyles, setDivStyles] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false); // State to track navigation
  const { data, isPending, error } = useFetchData(
    "https://paperback-vy73.onrender.com/api/books",
    "",
    1,
    ""
  );

  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      setDivStyles("side-cart-menu-open");
    } else {
      setDivStyles("side-cart-menu-closed");
    }
  }, [isOpen]);

  // Effect to track location changes (navigation)
  useEffect(() => {
    setIsNavigating(true); // Set navigating to true when the location changes
    const timer = setTimeout(() => setIsNavigating(false), 500); // Set navigating to false after a delay
    return () => clearTimeout(timer); // Cleanup the timer on component unmount or location change
  }, [location]);

  return (
    <>
      <div className="flex flex-col">
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
        <main className="lg:px-10 mb-[5rem]">
          <Outlet />
        </main>
        {!isPending && !isNavigating ? (
          <div className={`w-full`}>
            <Footer />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
