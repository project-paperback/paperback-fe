import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Experiment } from "./pages/Bookstore";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { Contact } from "./pages/Contact";
import { BookDetails } from "./pages/BookDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bookstore" element={<Experiment />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="bookstore/book-details/:book_id"
          element={<BookDetails />}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
