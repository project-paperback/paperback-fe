import { Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

export function Layout(props) {
  return (
    <div>
      <header className="lg:px-10">
        <NavBar setUser={props.setUser} />
      </header>
      <main className="lg:px-10">
        <Outlet />
      </main>
    </div>
  );
}
