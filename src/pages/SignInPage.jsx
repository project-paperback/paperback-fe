import { useState } from "react";
import { LoginForm } from "../components/Forms";
import axios from "axios";
import { Navigate } from "react-router-dom";

export function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [userLogedIn, setUserLoggedIn] = useState({});

  const handleLogIn = () => {
    const sendToAutehticate = { email, password };

    axios
      .post(
        "https://paperback-vy73.onrender.com/api/sign_in",
        sendToAutehticate
      )
      .then(({ data }) => setUserLoggedIn(data));
  };
  console.log(userLogedIn);

  //   if (userLogedIn.loggedIn.userEmail) {
  //     return <Navigate to={"/"} />;
  //   } else {
  //     return (
  //       <div className="sign-in-grid-block w-[90%] mx-auto my-[5rem] ">
  //         <div className="bg-gray-300 item-bg"></div>
  //         <div className="bg-blue-300 item-1"></div>
  //         <div className="bg-blue-300 item-2"></div>
  //         <div className=" item-cont">
  //           <LoginForm
  //             className=" border-[#023047] lg:p-[4rem] text-center *:px-5 *:my-3 border-[10px] lg:border-[10px]   lg:gap-10 bg-white"
  //             setEmail={setEmail}
  //             setPassword={setPassword}
  //             handleLogIn={handleLogIn}
  //           />
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div className="lg:grid sign-in-grid-block relative lg:w-[90%] mx-auto my-[5rem] flex justify-center">
      <div className="bg-gray-300 item-bg"></div>
      <div className="bg-blue-300 item-1 absolute lg:top-[3rem] lg:left-[3rem] top-[-1rem] left-[1rem]"></div>
      <div className="bg-blue-300 item-2 absolute lg:bottom-[-1rem] lg:right-[3rem] bottom-[-1rem] right-[1rem]"></div>
      <div className=" item-cont">
        <LoginForm
          className=" border-[#023047] lg:p-[4rem] text-center *:px-5 *:my-3 border-[10px] lg:border-[10px]    bg-white"
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogIn={handleLogIn}
        />
      </div>
    </div>
  );
}
