import { useContext, useState } from "react";
import { LoginForm } from "../components/Forms";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../utilities_&_custom_hooks/General";
import { useFetchData } from "../utilities_&_custom_hooks/fetchHooks";

export function SignInPage(props) {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(true);

  axios
    .get("https://paperback-vy73.onrender.com/api/books")
    .then(({ data }) => {
      if (data) setIsPending(false);
    });

  const handleLogIn = () => {
    const sendToAutehticate = { email, password };

    axios
      .post(
        "https://paperback-vy73.onrender.com/api/sign_in",
        sendToAutehticate
      )
      .then(({ data }) => {
        localStorage.setItem("currentUser", JSON.stringify(data));
        props.setUserFromBe(data);
      });
  };
  // lg:w-[80%] xl:w-[65%] lg:h-[50%] xl:h-[50%] 2xl:h-[50%] mx-auto my-auto lg:my-0
  return (
    <div className="relative">
      {isPending ? (
        <div className="absolute top-0 bottom-0 h-[80vh] w-full z-10 bg-white flex justify-center content-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      ) : (
        <div className=" w-[100vw] h-[80vh] lg:h-[100vh] flex content-center lg:w-full lg:block ">
          <div className=" lg:bg-gray-300 relative w-[90%] lg:w-[70%] h-[70%] mx-auto my-auto lg:my-0">
            <div className=" bg-white mx-auto w-[100%] lg:w-[60%]  lg:absolute  lg:top-[-10%] lg:right-[20%] px-[2rem] border-[10px] border-[#023047]">
              <LoginForm
                className="  lg:py-[4rem] text-center *:px-5  *:my-3   bg-white "
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogIn={handleLogIn}
              />
              {JSON.parse(user)?.loggedIn?.userEmail && <Navigate to={"/"} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
