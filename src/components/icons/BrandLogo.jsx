import { NavLink } from "react-router-dom";

const BrandLogo = () => {
  return (
    <NavLink className="tracking-wide	 libre-baskerville-regular  flex  gap-1  w-fit  bg-[#023047]  py-[2px] pr-[2px] border-[1.8px] border-[#023047]">
      <p className=" px-[10px] py-[4px] font-bold	 text-white bg-[#023047]">
        Paperback
      </p>
      <p className="px-[15px] py-[4px] text-[#023047] bg-white hover:bg-[#023047] hover:text-white  transition-all ease-in-out delay-[150ms]">
        Books{" "}
      </p>
    </NavLink>
  );
};

export default BrandLogo;
