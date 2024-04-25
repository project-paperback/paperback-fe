import { Link } from "react-router-dom";
import {
  IconFacebookFilled,
  IconInstagramOutline,
  IconPinterestFilled,
} from "../icons/Icons";
import InputField from "../small-components/InputField";
import TextArea from "../small-components/TextAreaField";

const ContactForm = () => {
  return (
    <form
      action=""
      className="contact-form border-[20px] border-[#023047] w-[60%] p-[5rem] flex flex-col gap-10"
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
          type={"text"}
          id={"Name"}
          labelValue={""}
          placeholder={"Name"}
          styles={
            "border-b-[2px] border-b-[#023047] pb-2 px-1 text-[1rem] w-full outline-none placeholder:text-[#023047]  "
          }
        />
        <InputField
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
};

export default ContactForm;
