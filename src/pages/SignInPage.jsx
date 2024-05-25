import { useContext, useState } from "react";
import { LoginForm } from "../components/Forms";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../utilities_&_custom_hooks/General";

export function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);
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
    <div className=" w-[100vw] h-[80vh] lg:h-[100vh] flex content-center lg:w-full lg:block">
      <div className=" lg:bg-gray-300 relative w-[90%] lg:w-[80%] xl:w-[65%] lg:h-[70%] xl:h-[65%] mx-auto my-auto lg:my-0">
        <div className="border-[10px] border-[#023047] bg-white mx-auto w-[90%] lg:w-[60%] lg:h-[76%] lg:absolute  lg:top-[-10%] lg:right-[20%] px-[2rem] xl:px-[4rem] py-[4rem]">
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
  );
}
