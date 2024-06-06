import axios from "axios";
import { IconClose, IconMinus, IconPlus, IconProfile } from "./Icons";
import { useContext, useState } from "react";
import {
  UserContext,
  usePagination,
} from "../utilities_&_custom_hooks/General";
import { Link, NavLink } from "react-router-dom";
import { useFetchData } from "../utilities_&_custom_hooks/fetchHooks";
import BookTile from "./bookstore/BookTile";
import { useSendToBasket } from "../utilities_&_custom_hooks/postLogs";

export function InputField(props) {
  return (
    <div className="w-full">
      <label htmlFor={props.id}>{props.labelvalue}</label>
      <input {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="w-full">
      <label htmlFor={props.id}>{props.labelvalue}</label>
      <textarea {...props} />
    </div>
  );
}

export function IncreaseDecreaseBookQty(props) {
  return (
    <div>
      <div action="" className={props.className}>
        <div className=" flex items-center border-[2px] border-[#023047] ">
          <button
            className="h-full w-full *:stroke-[#023047]   px-[5px]"
            onClick={async (e) => {
              e.preventDefault();
              props.decreaseQty();
              await axios.patch(
                "https://paperback-vy73.onrender.com/api/basket/decrease_qty_by_one",
                { productId: props.product }
              );
              props.setChangeQty(() => !props.changeQty);
            }}
          >
            <IconMinus />
          </button>
          <input
            className={"outline-none w-[40px] h-[30px]  text-center"}
            maxLength={"2"}
            value={props.quantity}
            onChange={(e) => {
              props.inputQty(e);
            }}
          />
          <button
            className="h-full w-full *:stroke-[#023047]  px-[5px]"
            onClick={async (e) => {
              e.preventDefault();
              props.increaseQty();
              await axios.patch(
                "https://paperback-vy73.onrender.com/api/basket/increase_qty_by_one",
                { productId: props.product }
              );
              props.setChangeQty(() => !props.changeQty);
            }}
          >
            <IconPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export function BasketWarningModal(props) {
  return (
    <div
      className="bg-gray-700 bg-opacity-[.80] text-white z-[6] fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"
      // onClick={() => {
      //   props.setErrorInBasket();
      // }}
    >
      {/* Added Tailwind CSS classes for modal animation */}
      <div className=" border-[#023047] text-[#023047] py-12 px-6 text-center border-[10px] lG:w-[40%] bg-white flex flex-col gap-8">
        <div>{props.msg}</div>
        <div className="flex justify-end">
          <button
            className="text-[#023047] hover:opacity-[0.7] duration-[300ms]"
            onClick={() => {
              props.setErrorInBasket();
            }}
          >
            {" "}
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function QuickViewModal(props) {
  const booksArray = props.data.books.books;
  const selectedBook = booksArray.filter(
    (book) => book._id === props.bookId
  )[0];
  const { itemSent, errorInBasket, sendToBasket, setErrorInBasket } =
    useSendToBasket();
  return (
    <div className="bg-gray-700 bg-opacity-[.80] fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center m-auto z-[20]">
      {errorInBasket && (
        <BasketWarningModal
          setErrorInBasket={setErrorInBasket}
          msg={errorInBasket.response?.data?.msg}
        />
      )}
      <div className="bg-white border-[5px] border-[#023047] w-[980px] h-[600px] flex p-6 relative quick-view">
        <div className="self-center">
          <NavLink to={`/bookstore/book-details/${selectedBook._id}`}>
            <div className="bg-gray-100 py-10 px-20 w-[450px] h-[500px]">
              <img
                src={selectedBook.imageLinks[1]}
                alt="Book Cover"
                className="shadow-xl"
              />
            </div>
          </NavLink>
        </div>
        <div className="p-6 pt-10 text-[1.3rem] flex flex-col w-full">
          <div className="leading-[80px]">
            <h1 className="leading-7">{selectedBook.title}</h1>
            <p className="font-semibold">£{selectedBook.price.toFixed(2)}</p>
            <div className="flex text-[0.9rem] gap-6 text-nowrap">
              <div className="flex flex-col leading-[30px]">
                <p className="font-thin">Print Length</p>
                <p>{selectedBook.pageCount} Pages</p>
              </div>
              <div className="flex flex-col leading-[30px]">
                <p className="font-thin">Publication Date</p>
                <p>{selectedBook.publishedDate}</p>
              </div>
              <div className="flex flex-col leading-[30px]">
                <p className="font-thin">Publisher</p>
                <p className="text-wrap line-clamp-1 hover:line-clamp-3">
                  {selectedBook.publisher}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-40 leading-10">
            <button
              className=" text-center bg-[#023047] text-white w-full mx-auto hover:bg-opacity-[0.80] transition-all duration-[200ms] py-3 mb-[5px]"
              onClick={() => {
                sendToBasket(selectedBook._id);
              }}
            >
              Add to basket
            </button>
            <NavLink
              to={`/bookstore/book-details/${selectedBook._id}`}
              className={"text-[1rem] underline"}
            >
              View More Details
            </NavLink>
          </div>
        </div>
        <button
          className="absolute top-4 right-4"
          onClick={() => {
            props.setIsQuickViewOpen(!props.isQuickViewOpen);
          }}
        >
          <IconClose height="1.7em" width="1.7em" />
        </button>
      </div>
    </div>
  );
}

export function PurchaseSummary(props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-b-[1px] border-[#023047] py-3 text-[1.5rem] mt-8 xl:mt-0">
        <h2>Order summary</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>£{props.total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-t-[1px] border-[#023047] pt-4 text-[1.2rem]">
          <p>Total</p>
          <p>£{props.total.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={async () => {
          const paymentURL = (
            await axios.post("https://paperback-vy73.onrender.com/api/checkout")
          ).data.paymentURL;
          window.location.href = paymentURL;
        }}
        className="bg-[#023047] text-white p-3 lg:w-[20%] mx-auto xl:w-[100%] w-full"
      >
        Checkout
      </button>
    </div>
  );
}
export function Dropdown(props) {
  const user = useContext(UserContext);
  return (
    <div className="dropdown dropdown-hover z-[11] hidden lg:block">
      <div tabIndex={0} role="button" className="flex items-center gap-1 m-1">
        <IconProfile />
        {!user ? <p>Profile</p> : <NavLink to="profile_page">Profile</NavLink>}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content absolute left-[-50px] z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {!user ? (
          <div></div>
        ) : (
          <li>
            <a href="/profile_page">My Account</a>
          </li>
        )}

        <li>
          {!user ? (
            <a href="/sign_in">Sign In</a>
          ) : (
            <Link
              onClick={() => {
                axios
                  .post("https://paperback-vy73.onrender.com/api/sign_out")
                  .then(() => {
                    props.setUser(null);
                    localStorage.clear();
                  });
              }}
            >
              Sign Out
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
