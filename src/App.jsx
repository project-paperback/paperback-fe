import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import BookTile from "./components/bookstore/BookTile";

import { Experiment } from "./exp";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen w-full lg:px-10 ">
        <NavBar />
        {/* <BookBasketTile /> */}
        <Experiment />
      </div>
    </BrowserRouter>
  );
}
export default App;
