import { NavLink, Link } from "react-router-dom";
import { InputField, TextArea } from "./SmallComponents";
import {
  IconFacebookFilled,
  IconInstagramOutline,
  IconPinterestFilled,
  Icon032Books,
  IconSettingsOuline,
} from "./Icons";

export function LoginForm(props) {
  return (
    <form className={props.className}>
      <h3 className="text-[2rem] font-bold roboto-regular p-5">Log In</h3>

      <div className="flex flex-col gap-[3rem] ">
        <InputField
          autoComplete={"off"}
          placeholder={"Email"}
          type={"email"}
          className={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
          onChange={(e) => {
            let emailVal = e.target.value;
            props.setEmail(emailVal);
          }}
        />
        <InputField
          autoComplete={"off"}
          placeholder={"Password"}
          type={"password"}
          className={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
          onChange={(e) => {
            let passValue = e.target.value;
            props.setPassword(passValue);
          }}
        />
      </div>
      <button
        className="hover:opacity-[0.6] transition-all duration-[200ms]"
        onClick={(e) => {
          e.preventDefault();
          props.handleLogIn();
        }}
      >
        Continue
      </button>
      <div className="flex flex-col w-full">
        <div className="divider">OR</div>
      </div>
      <div className="flex justify-center pb-4">
        <NavLink
          to={"/create_account"}
          className={"flex items-center gap-[0.5rem] create-account-link "}
        >
          <Icon032Books height={"2rem"} width={"1.4rem"} />
          <p>Create new account</p>
        </NavLink>
      </div>
    </form>
  );
}
export function SignUp(props) {
  return (
    <form className={props.className}>
      <h3 className="text-[2rem] font-bold roboto-regular">Sign Up</h3>
      <div className="flex flex-col gap-6 lg:gap-[3.5rem] w-[70%] lg:w-[100%]">
        <div className="flex lg:gap-[50px] gap-10 flex-col lg:flex-row ">
          <InputField
            autoComplete={"off"}
            placeholder={"Name"}
            type={"text"}
            onChange={(e) => {
              let nameVal = e.target.value;
              props.setUserFirstName(nameVal);
            }}
            className={
              "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
            }
          />
          <InputField
            autoComplete={"off"}
            placeholder={"Surname"}
            type={"text"}
            onChange={(e) => {
              let surnameVal = e.target.value;
              props.setUserLastName(surnameVal);
            }}
            className={
              "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
            }
          />
        </div>

        <InputField
          autoComplete={"off"}
          placeholder={"Email"}
          type={"email"}
          onChange={(e) => {
            let emailVal = e.target.value;
            props.setUserEmail(emailVal);
          }}
          className={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />

        <div className="flex lg:gap-[50px] flex-col lg:flex-row gap-10">
          <InputField
            autoComplete={"off"}
            placeholder={"Password"}
            type={"password"}
            onChange={(e) => {
              let passwordVal = e.target.value;
              props.setPassword(passwordVal);
            }}
            className={
              "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
            }
          />{" "}
          <InputField
            autoComplete={"off"}
            placeholder={"Confirm Password"}
            type={"password"}
            onChange={(e) => {
              let confirmPasswordVal = e.target.value;
              props.setPasswordConfirm(confirmPasswordVal);
            }}
            className={
              "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
            }
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.handleSignUp();
          }}
          className="hover:opacity-[0.6] transition-all duration-[200ms]"
        >
          Continue
        </button>
      </div>
      <div className="flex flex-col w-full">
        <div className="divider">OR</div>
      </div>
      <NavLink
        to={"/sign_in"}
        className={
          "flex items-center justify-center mx-auto gap-[0.5rem] create-account-link"
        }
      >
        <Icon032Books height={"2rem"} width={"1.4rem"} />
        <p>Log in to your account</p>
      </NavLink>
    </form>
  );
}
export function ChangePassword(props) {
  return (
    <form {...props}>
      <h3 className="text-2xl font-bold text-center">
        Change account password
      </h3>
      <div className="flex flex-col gap-10 lg:gap-[4rem] w-[70%]">
        <InputField
          autoComplete={"off"}
          placeholder={"Current password"}
          type={"password"}
          className={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />{" "}
        <InputField
          autoComplete={"off"}
          placeholder={"New password"}
          type={"password"}
          className={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />{" "}
        <InputField
          autoComplete={"off"}
          placeholder={"Confirm new password"}
          type={"password"}
          className={
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

export function ChangeAccountDetails(props) {
  return (
    <form {...props}>
      <h3 className="text-2xl font-bold mb-[2rem] lg:mb-0">
        Change user details
      </h3>
      <div className="flex flex-col gap-10 lg:gap-[4rem] w-[70%]">
        <InputField
          autoComplete={"off"}
          placeholder={"Name"}
          type={"text"}
          className={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />{" "}
        <InputField
          autoComplete={"off"}
          placeholder={"Surname"}
          type={"text"}
          className={
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
export function ContactForm(props) {
  return (
    <form action="" className={props.className}>
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

      <div className="flex justify-between flex-col lg:flex-row  gap-[50px]  lg:gap-[6rem]">
        <InputField
          autoComplete={"off"}
          type={"text"}
          id={"Name"}
          labelvalue={""}
          placeholder={"Name"}
          className={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]"
          }
        />
        <InputField
          autoComplete={"off"}
          type={"email"}
          id={"Email"}
          labelvalue={""}
          placeholder={"Email"}
          className={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]  "
          }
        />
      </div>

      <div>
        <TextArea
          placeholder={"Type your message here..."}
          className={
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
