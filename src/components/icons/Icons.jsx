import { NavLink } from "react-router-dom";

export function BrandLogo() {
  return (
    <NavLink className="tracking-wide	 libre-baskerville-regular  flex  gap-1  w-fit  bg-[#023047]  py-[2px] pr-[2px] border-[1.8px] border-[#023047]">
      <p className=" px-[10px] py-[4px] font-bold	 text-white bg-[#023047]">
        Paperback
      </p>
      <p className="px-[15px] py-[4px] text-[#023047] bg-white hover:bg-[#023047] hover:text-white  transition-all ease-in duration-[200ms]">
        Books
      </p>
    </NavLink>
  );
}

export function ShoppingCartOutline(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17 18a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 011 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63-.03.12a.25.25 0 00.25.25H19v2H7a2 2 0 01-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16z" />
    </svg>
  );
}

export function IconProfile(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
        clipRule="evenodd"
      />
    </svg>
  );
}
