import { SignUp } from "../components/Forms";
import { useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../utilities_&_custom_hooks/General";

const CreateAccountPage = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const user = useContext(UserContext);
  const handleSignUp = () => {
    const sendToAutehticate = {
      userFirstName,
      userLastName,
      userEmail,
      password,
    };
    if (password === passwordConfirm) {
      axios
        .post(
          "https://paperback-vy73.onrender.com/api/create_account",
          sendToAutehticate
        )
        .then(({ data }) => {
          localStorage.setItem("currentUser", JSON.stringify(data));
          props.setUserFromBe(data);
          console.log(data, "<<DATA");
        });
    } else {
      console.log("Passwords not matching"); // << to be changed
    }
  };
  return (
    <div className=" w-[100vw] h-[80vh] lg:h-[100vh] flex content-center lg:w-full lg:block">
      <div className=" lg:bg-gray-300 relative w-[90%] lg:w-[80%] xl:w-[65%] lg:h-[70%] xl:h-[65%] mx-auto my-auto lg:my-0">
        <div className="border-[10px] border-[#023047] bg-white mx-auto w-[90%] lg:w-[60%] lg:absolute  lg:top-[-10%] lg:right-[20%] lg:px-[2rem] xl:px-[4rem]">
          <SignUp
            className={
              "py-[3rem] *:my-[1rem] text-center flex flex-col  *:mx-auto"
            }
            setUserEmail={setUserEmail}
            setPassword={setPassword}
            setUserFirstName={setUserFirstName}
            setUserLastName={setUserLastName}
            handleSignUp={handleSignUp}
            setPasswordConfirm={setPasswordConfirm}
          />
          {JSON.parse(user)?.user?.userEmail && <Navigate to={"/"} />}
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
