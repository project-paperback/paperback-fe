import { Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

export function Layout() {
  return (
    <div>
      <header className="lg:px-10">
        <NavBar />
      </header>
      <main className="lg:px-10">
        <Outlet />
      </main>
    </div>
  );
}
