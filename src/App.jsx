import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// Pages
import { BookstorePage } from "./pages/BookstorePage";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./Layout";
import { ContactUsPage } from "./pages/ContactUsPage";
import { BookDetailsPage } from "./pages/BookDetailsPage";
import { SignInPage } from "./pages/SignInPage";
// Custom Hooks and Utilities
import { UserContext } from "./utilities_&_custom_hooks/General";
import { useEffect, useState } from "react";
import ViewCartPage from "./pages/ViewCartPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ProfilePage from "./pages/ProfilePage";
import { PageNotFound } from "./pages/404Page";
import { AboutUs } from "./pages/AboutUs";

function App() {
  const [user, setUser] = useState(null);
  const [userFromBe, setUserFromBe] = useState(null);
  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    setUser(userStored);
  }, [userFromBe]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout setUser={setUser} />}>
        <Route path="*" element={<PageNotFound />} />
        <Route index element={<HomePage setUser={setUser} />} />
        <Route path="bookstore" element={<BookstorePage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route
          path="bookstore/book-details/:book_id"
          element={<BookDetailsPage />}
        />
        <Route
          path="sign_in"
          element={<SignInPage setUserFromBe={setUserFromBe} />}
        />
        <Route
          path="create_account"
          element={<CreateAccountPage setUserFromBe={setUserFromBe} />}
        />
        <Route path="profile_page" element={<ProfilePage />} />
        <Route path="shopping-cart" element={<ViewCartPage />} />
        <Route path="aboutUs" element={<AboutUs />} />
      </Route>
    )
  );

  return (
    <>
      <UserContext.Provider value={user}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}
export default App;
