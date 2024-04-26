import { NavLink } from "react-router-dom";
import { Icon032Books } from "../icons/Icons";
import InputField from "../small-components/InputField";

const LoginForm = () => {
  return (
    <form className="border-[20px] border-[#023047] p-[5rem] flex flex-col items-center gap-[2rem] ">
      <h3 className="text-2xl font-bold">Log In</h3>
      <div className="flex flex-col gap-[4rem] w-[70%]">
        <InputField
          placeholder={"Email"}
          type={"email"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />
        <InputField
          placeholder={"Password"}
          type={"password"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />
        <button className="hover:opacity-[0.6] transition-all duration-[200ms]">
          Continue
        </button>
      </div>
      <div className="flex flex-col w-full">
        <div className="divider">OR</div>
      </div>
      <NavLink className={"flex items-center gap-[0.5rem] create-account-link"}>
        <Icon032Books height={"2rem"} width={"1.4rem"} />
        <p>Create new account</p>
      </NavLink>
    </form>
  );
};

export default LoginForm;
