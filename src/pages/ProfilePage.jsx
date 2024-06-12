import axios from "axios";
import { InputField } from "../components/SmallComponents";

const ProfilePage = () => {
  return (
    <div className="2xl:w-[1100px] lg:w-[80%] m-auto px-10">
      <div className="flex items-center py-10">
        <img
          src="https://t4.ftcdn.net/jpg/05/09/59/75/360_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg"
          alt="Profile Avatar"
          className="md:w-[12rem] w-[5rem]"
        />
        <div className="leading-4 w-full">
          <InputField
            autoComplete={"off"}
            placeholder={"Name"}
            type={"text"}
            className={
              "placeholder:text-[#023047] bg-gray-200 p-2 outline-none"
            }
          />{" "}
          <br />
          <InputField
            autoComplete={"off"}
            placeholder={"Surname"}
            type={"text"}
            className={
              "placeholder:text-[#023047] bg-gray-200 p-2 outline-none"
            }
          />
        </div>
      </div>
      <div className="border-t-[2px] border-[#023047] pt-6">
        <h2 className="text-[2rem]">Account Management</h2>
        <form className="py-10">
          <InputField
            autoComplete={"off"}
            placeholder={"Email"}
            type={"email"}
            className={
              "placeholder:text-[#023047] bg-gray-200 p-2 md:w-[50%] w-[100%] max-w-[400px] outline-none"
            }
          />{" "}
          <br />
          <InputField
            autoComplete={"off"}
            placeholder={"Password"}
            type={"password"}
            className={
              "placeholder:text-[#023047] bg-gray-200 p-2 md:w-[50%] w-[100%] max-w-[400px] outline-none"
            }
          />
          <p>
            <button className="bg-[#023047] text-white p-3 mt-6">
              Save Changes
            </button>
          </p>
        </form>
      </div>
      <div className="border-t-[2px] border-[#023047] pt-6">
        <h2 className="text-[2rem]">Danger Zone</h2>
        <button
          className="bg-[#023047] p-3 text-red-500 mt-6"
          onClick={async () => {
            await axios.delete(
              "https://paperback-vy73.onrender.com/api/delete_account"
            );
            localStorage.clear();
          }}
        >
          Delete Your Account
        </button>
      </div>
    </div>
  );
};
export default ProfilePage;
