import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className=" h-screen w-full px-10">
          <NavBar />
        </div>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
