import { NavLink, useParams } from "react-router-dom";
import { useFetchData } from "../utilities_&_custom_hooks/fetchHooks";
import { useSendToBasket } from "../utilities_&_custom_hooks/postLogs";
import { BasketWarningModal, BookInfo } from "../components/SmallComponents";
import { useState } from "react";

export function BookDetailsPage() {
  const [isAdded, setIsAdded] = useState(false);

  setTimeout(() => setIsAdded(false), 2000);
  const pageNumber = "";
  const { book_id } = useParams();
  const { data, dataLength, isPending, error } = useFetchData(
    "https://paperback-vy73.onrender.com/api/books",
    book_id,
    pageNumber
  );
  const [isReadMore, setIsReadMore] = useState(true);

  const { itemSent, errorInBasket, sendToBasket, setErrorInBasket } =
    useSendToBasket();
  return (
    <div>
      {isPending ? (
        <div className="absolute top-0  w-full h-full bg-white flex justify-center content-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      ) : (
        <div className="relative ">
          {errorInBasket && (
            <BasketWarningModal
              setErrorInBasket={setErrorInBasket}
              msg={errorInBasket.response?.data?.msg}
            />
          )}
          <div className="flex flex-col gap-5">
            <div className="text-sm w-full my-8">
              <ul className="flex gap-2 px-12">
                <li>
                  <NavLink to={"/"}>Home /</NavLink>
                </li>
                <li>
                  <NavLink to={"/bookstore?page=1"}>Bookstore /</NavLink>
                </li>
                <li>
                  <NavLink>Book description</NavLink>
                </li>
              </ul>
            </div>
            <div className="container flex flex-col lg:flex-row gap-6 mx-auto">
              <div className="bg-gray-100 py-5 px-[5rem] mx-auto md:w-[450px] w-[350px] lg:h-[500px] flex items-center">
                <img
                  src={data.book.imageLinks[1]}
                  alt=""
                  className="shadow-xl shadow-gray-400 mx-auto book-details-img"
                />
              </div>
              <div className=" w-[80%] lg:w-[50%] flex flex-col gap-6 mx-auto lg:mx-0">
                <BookInfo book={data.book} />
                <button
                  className={`text-center bg-[#023047] text-white w-full lg:w-[60%] my-8 mx-auto  hover:bg-opacity-[0.80] transition-all duration-[200ms] py-3  ${
                    isAdded ? "send-to-basket" : ""
                  }`}
                  onClick={() => {
                    sendToBasket(book_id);
                    setIsAdded((isAdded) => !isAdded);
                  }}
                >
                  {isAdded ? "Sent to Basket" : " Add to basket"}
                </button>

                <div className="flex flex-col gap-3">
                  <h3>Synopsis</h3>
                  <p id="synopsis" className="line-clamp-[2]">
                    {data.book.description}
                  </p>
                  {data.book.description.length > 231 && (
                    <button
                      className="underline"
                      onClick={() => {
                        setIsReadMore(!isReadMore);
                        document
                          .getElementById("synopsis")
                          .classList.toggle("line-clamp-[2]");
                      }}
                    >
                      {isReadMore ? "Read more" : "Show less"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
