import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationLinks from "./components/nav/NavLinks";
import BrandLogo from "./components/icons/BrandLogo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BrandLogo />
        {/* <NavigationLinks /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
