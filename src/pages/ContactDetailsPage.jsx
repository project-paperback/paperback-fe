import { NavLink } from "react-router-dom";
import { ChangeAccountDetails, ChangePassword } from "../components/Forms";

export function ContactDetailsPage() {
  return (
    // <div className=" w-4/5 mx-auto flex flex-col gap-20">
    //   <h3 className="text-3xl">Your account</h3>
    //   <div className=" flex flex-col gap-20">
    //     <div className="flex flex-col gap-10 ">
    //       <div className="flex flex-col gap-3">
    //         <h3 className="text-3xl">Your details</h3>
    //         <p>
    //           This section contains your public details, which will be visible
    //           to everyone viewing your book reviews.
    //         </p>
    //       </div>
    //       <div className="w-[80%] mx-auto">
    //         <ChangeAccountDetails
    //           className={
    //             "border-[10px] lg:border-[10px] border-[#023047] p-[2rem] lg:p-[5rem] flex flex-col items-center lg:gap-[2rem] "
    //           }
    //         />
    //       </div>
    //     </div>

    //     <div className="flex flex-col gap-10 ">
    //       <div className="flex flex-col gap-3">
    //         <h3 className="text-3xl">Your password</h3>
    //         <p>
    //           Certain criteria must be met for passwords: they must consist of
    //           at least 10 characters, and we advise using a combination of
    //           lowercase and uppercase letters, numbers, and special characters
    //           for enhanced security.
    //         </p>
    //       </div>
    //       <div className="w-[80%] mx-auto">
    //         <ChangePassword
    //           className={
    //             "border-[10px] lg:border-[10px] border-[#023047] p-2 lg:p-[5rem] flex flex-col items-center gap-[2rem] "
    //           }
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="grid">
      <div className="item1">1 Your credentials</div>
      <div className="item2">2 Your details</div>
      <div className="item3">3 Contact Us</div>
      <div className="item4">5</div>
      <div className="item5">6</div>
      <div className="item6">7</div>
    </div>
  );
}
