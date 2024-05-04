import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { BookstorePage } from "./pages/BookstorePage";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./Layout";
import { ContactUsPage } from "./pages/ContactUsPage";
import { BookDetailsPage } from "./pages/BookDetailsPage";
import { SignInPage } from "./pages/SignInPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="bookstore" element={<BookstorePage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route
          path="bookstore/book-details/:book_id"
          element={<BookDetailsPage />}
        />
        <Route path="sign_in" element={<SignInPage />} />
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
