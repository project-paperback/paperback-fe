import { useState } from "react";
import { ContactForm } from "../components/Forms";
import axios from "axios";

export function ContactUsPage() {
  const [isPending, setIsPending] = useState(true);

  axios
    .get("https://paperback-vy73.onrender.com/api/books")
    .then(({ data }) => {
      if (data) setIsPending(false);
    });
  return (
    <div>
      {isPending ? (
        <div className="absolute top-0 bottom-0 h-[80vh] w-full z-10 bg-white flex justify-center content-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      ) : (
        <div className="">
          <h1 className="text-center text-[2.5rem] pt-8 mb-8 lg:mb-0  leading-[2.8rem] font-bold">
            <span className="text-[1.2rem]">For More Info</span> <br />
            CONTACT US
          </h1>
          <div className=" w-[100vw] h-[40vh] lg:h-[100vh] flex content-center lg:w-full lg:block ">
            <div className=" lg:bg-gray-300 relative w-[90%] lg:w-[70%] h-[70%] mx-auto my-auto lg:my-0">
              <div className="border-[10px] border-[#023047] bg-white mx-auto w-[100%] lg:w-[70%] xl:w-[60%] lg:absolute  lg:top-[-10%] lg:right-[15%] xl:right-[20%]  lg:px-[2rem] xl:px-[4rem]">
                <ContactForm
                  className={
                    "contact-form border-[#023047] py-[4rem] flex flex-col gap-5 lg:gap-10 px-[4rem] lg:px-0"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
