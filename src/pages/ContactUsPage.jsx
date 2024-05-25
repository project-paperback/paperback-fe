import { ContactForm } from "../components/Forms";

export function ContactUsPage() {
  return (
    <div className="">
      <h1 className="text-center text-[2.5rem] pt-8 mb-8 lg:mb-0  leading-[2.8rem] font-bold">
        <span className="text-[1.2rem]">For More Info</span> <br />
        CONTACT US
      </h1>
      <div className=" w-[100vw]  lg:h-[80vh]   flex content-center lg:w-full lg:block">
        <div className=" lg:bg-gray-300 relative w-[100%] lg:w-[100%] xl:w-[65%] lg:h-[70%]  mx-auto my-auto lg:my-0">
          <div className="border-[10px] border-[#023047] bg-white mx-auto w-[90%] lg:w-[70%] xl:w-[60%] lg:absolute  lg:top-[-10%] lg:right-[15%] xl:right-[20%]  lg:px-[2rem] xl:px-[4rem]">
            <ContactForm
              className={
                "contact-form border-[#023047] py-[4rem] flex flex-col gap-5 lg:gap-10 px-[4rem] lg:px-0"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
