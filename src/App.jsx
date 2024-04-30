import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import BookTile from "./components/bookstore/BookTile";
import {
  ChangeAccountDetails,
  ChangePassword,
  ContactForm,
  LoginForm,
  SignUp,
} from "./components/Forms";
import { BookBasketTile } from "./components/bookstore/BookBasketTile";
import { Experiment } from "./exp";
import { ContactDetailsPage } from "./pages/ContactDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen w-full lg:px-10 ">
        <NavBar />
        {/* <BookBasketTile /> */}
        <Experiment />
        {/* <ContactDetailsPage /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
