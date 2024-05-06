import { useContext, useState } from "react";
import { LoginForm } from "../components/Forms";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { TextContext } from "../utilities_&_custom_hooks/General";

export function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(TextContext);
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

  return (
    <div className="lg:grid sign-in-grid-block relative lg:w-[90%] mr-6 ml-6 lg:mx-auto my-[5rem] ">
      <div className="bg-gray-300 item-bg"></div>
      <div className="bg-blue-300 item-1 absolute lg:top-[3rem] lg:left-[3rem] top-[-1rem] left-[-1rem] z-[-1] lg:z-0"></div>
      <div className="bg-blue-300 item-2 absolute lg:bottom-[-1rem] lg:right-[3rem] bottom-[-1rem] right-[-1rem] z-[-1] lg:z-0"></div>
      <div className=" item-cont">
        <LoginForm
          className=" border-[#023047] lg:p-[4rem] text-center *:px-5 *:my-3 border-[10px] lg:border-[10px]    bg-white"
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogIn={handleLogIn}
        />
        {JSON.parse(user)?.loggedIn?.userEmail && <Navigate to={"/"} />}
      </div>
    </div>
  );
}
