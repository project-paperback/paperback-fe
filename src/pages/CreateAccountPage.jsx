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
    <div className="lg:grid sign-in-grid-block relative xl:w-[80%] mr-6 ml-6 lg:mx-auto my-[5rem] ">
      <div className="bg-gray-300 item-bg"></div>
      <div className="bg-blue-300 item-1 absolute lg:top-[3rem] lg:left-[3rem] top-[-1rem] left-[-1rem] z-[-1] lg:z-0"></div>
      <div className="bg-blue-300 item-2 absolute lg:bottom-[-1rem] lg:right-[3rem] bottom-[-1rem] right-[-1rem] z-[-1] lg:z-0"></div>
      <div className=" item-cont bg-white mx-auto">
        <SignUp
          className={
            "flex flex-col items-center border-[#023047] lg:p-[4rem] text-center *:px-3  *:my-3 border-[10px] lg:border-[10px] bg-white lg:gap-[2rem] py-[3rem]"
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
  );
};

export default CreateAccountPage;
