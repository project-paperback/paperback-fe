import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import BookTile from "./components/bookstore/BookTile";
import ContactForm from "./components/contact/ContactForm";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className=" h-screen w-full px-10">
          <NavBar />

          <BookTile />
          <ContactForm />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
