import { NavLink, Link } from "react-router-dom";
import { InputField, TextArea } from "./SmallComponents";
import {
  IconFacebookFilled,
  IconInstagramOutline,
  IconPinterestFilled,
  Icon032Books,
  IconSettingsOuline,
} from "./Icons";

export function LoginForm() {
  return (
    <form className="border-[20px] border-[#023047] p-[5rem] flex flex-col items-center gap-[2rem] ">
      <h3 className="text-2xl font-bold">Log In</h3>
      <div className="flex flex-col gap-[4rem] w-[70%]">
        <InputField
          autoComplete={"off"}
          placeholder={"Email"}
          type={"email"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />
        <InputField
          autoComplete={"off"}
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
}
export function SignUp() {
  return (
    <form className="border-[20px] border-[#023047] p-[5rem] flex flex-col items-center gap-[2rem] ">
      <h3 className="text-2xl font-bold">Sign Up</h3>
      <div className="flex flex-col gap-[4rem] w-[70%]">
        <div className="flex lg:gap-4 flex-col lg:flex-row gap-[4rem]">
          <InputField
            autoComplete={"off"}
            placeholder={"Name"}
            type={"text"}
            styles={
              "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
            }
          />
          <InputField
            autoComplete={"off"}
            placeholder={"Surname"}
            type={"text"}
            styles={
              "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
            }
          />
        </div>
        <InputField
          autoComplete={"off"}
          placeholder={"Email"}
          type={"email"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />
        <div className="flex lg:gap-4 flex-col lg:flex-row gap-[4rem]">
          <InputField
            autoComplete={"off"}
            placeholder={"Password"}
            type={"password"}
            styles={
              "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
            }
          />{" "}
          <InputField
            autoComplete={"off"}
            placeholder={"Confirm Password"}
            type={"password"}
            styles={
              "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
            }
          />
        </div>
        <button className="hover:opacity-[0.6] transition-all duration-[200ms]">
          Continue
        </button>
      </div>
      <div className="flex flex-col w-full">
        <div className="divider">OR</div>
      </div>
      <NavLink className={"flex items-center gap-[0.5rem] create-account-link"}>
        <Icon032Books height={"2rem"} width={"1.4rem"} />
        <p>Log in to your account</p>
      </NavLink>
    </form>
  );
}
export function ChangePassword() {
  return (
    <form className="border-[20px] border-[#023047] p-[5rem] flex flex-col items-center gap-[2rem] ">
      <h3 className="text-2xl font-bold">Change account password</h3>
      <div className="flex flex-col gap-[4rem] w-[70%]">
        <InputField
          autoComplete={"off"}
          placeholder={"Current password"}
          type={"password"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />{" "}
        <InputField
          autoComplete={"off"}
          placeholder={"New password"}
          type={"password"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />{" "}
        <InputField
          autoComplete={"off"}
          placeholder={"Confirm new password"}
          type={"password"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />
        <NavLink
          className={
            "flex items-center gap-[0.5rem] create-account-link ml-auto"
          }
        >
          <IconSettingsOuline height={"2rem"} width={"1.4rem"} />

          <p>Submit change</p>
        </NavLink>
      </div>
    </form>
  );
}

export function ChangeAccountDetails() {
  return (
    <form className="border-[20px] border-[#023047] p-[5rem] flex flex-col items-center gap-[2rem] ">
      <h3 className="text-2xl font-bold">Change user details</h3>
      <div className="flex flex-col gap-[4rem] w-[70%]">
        <InputField
          autoComplete={"off"}
          placeholder={"Name"}
          type={"text"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />{" "}
        <InputField
          autoComplete={"off"}
          placeholder={"Surname"}
          type={"text"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />
        <NavLink
          className={
            "flex items-center gap-[0.5rem] create-account-link ml-auto"
          }
        >
          <IconSettingsOuline height={"2rem"} width={"1.4rem"} />

          <p>Submit change</p>
        </NavLink>
      </div>
    </form>
  );
}
export function ContactForm() {
  return (
    <form
      action=""
      className="contact-form border-[20px] border-[#023047]  p-[5rem] flex flex-col gap-10"
    >
      <div className="mb-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Customer service</h3>
          <p>Email:</p>
          <p>paperback@gmail.com</p>
        </div>
        <div className="flex mt-5 gap-4">
          <Link>
            <IconPinterestFilled height={"1.2rem"} width={"1.2rem"} />
          </Link>
          <Link>
            <IconFacebookFilled height={"1.2rem"} width={"1.2rem"} />
          </Link>
          <Link>
            {" "}
            <IconInstagramOutline height={"1.2rem"} width={"1.2rem"} />
          </Link>
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row  gap-[6rem]">
        <InputField
          autoComplete={"off"}
          type={"text"}
          id={"Name"}
          labelValue={""}
          placeholder={"Name"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]  "
          }
        />
        <InputField
          autoComplete={"off"}
          type={"email"}
          id={"Email"}
          labelValue={""}
          placeholder={"Email"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]  "
          }
        />
      </div>
      <div>
        <TextArea
          placeholder={"Type your message here..."}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none text-[#023047]  "
          }
        />
      </div>
      <button className="hover:opacity-[0.6] transition-all duration-[200ms]">
        Submit
      </button>
    </form>
  );
}
