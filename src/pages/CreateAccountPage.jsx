import { SignUp } from "../components/Forms";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../utilities_&_custom_hooks/General";

const CreateAccountPage = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [wrongCredentialsError, setWrongCredentialsError] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const user = useContext(UserContext);
  console.log(wrongCredentialsError);
  axios
    .get("https://paperback-vy73.onrender.com/api/books")
    .then(({ data }) => {
      if (data) setIsPending(false);
    });

  const handleSignUp = () => {
    const sendToAutehticate = {
      userFirstName,
      userLastName,
      userEmail,
      password,
    };

    setTimeout(() => setIsShaking(false), 500);
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
        })
        .catch((error) => {
          setWrongCredentialsError(error.response.data.msg);
        });
    } else {
      setWrongCredentialsError("Passwords not matching"); // << to be changed
    }
  };
  return (
    <div className="relative">
      {isPending ? (
        <div className="absolute top-0 bottom-0 h-[80vh] w-full z-10 bg-white flex justify-center content-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      ) : (
        <div className=" w-[100vw] h-[40%] lg:h-[100vh] flex content-center lg:w-full lg:block ">
          <div className=" lg:bg-gray-300 relative w-[90%] lg:w-[70%] lg:min-w-[950px] h-[650px] mx-auto my-auto lg:my-0">
            <div className="border-[10px] border-[#023047] bg-white mx-auto w-[100%] lg:w-[60%] lg:absolute  lg:top-[-10%] lg:right-[20%]  lg:px-[4rem]">
              <SignUp
                className={
                  "py-[3rem] *:my-[.5rem] text-center flex flex-col  *:mx-auto"
                }
                setUserEmail={setUserEmail}
                setPassword={setPassword}
                setUserFirstName={setUserFirstName}
                setUserLastName={setUserLastName}
                handleSignUp={handleSignUp}
                setPasswordConfirm={setPasswordConfirm}
                error={wrongCredentialsError}
                setIsShaking={setIsShaking}
                isShaking={isShaking}
              />
              {JSON.parse(user)?.user?.userEmail && <Navigate to={"/"} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccountPage;
