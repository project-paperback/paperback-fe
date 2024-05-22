import { ContactForm } from "../components/Forms";

export function ContactUsPage() {
  return (
    <div>
      <h1 className="text-center text-[2.5rem] pt-8 pb-16 leading-[2.8rem] font-bold">
        <span className="text-[1.2rem]">For More Info</span> <br />
        CONTACT US
      </h1>
      <div className="lg:w-[950px] lg:m-auto bg-white md:mx-6">
        <ContactForm />
      </div>
      <div className="bg-gray-100 h-[720px] w-[90%] absolute m-auto left-0 right-0 hidden lg:block top-[380px] -z-10"></div>
    </div>
  );
}
