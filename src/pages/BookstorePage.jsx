import { useEffect, useRef, useState } from "react";
import { usePagination } from "../utilities_&_custom_hooks/General";
import { IconArrowLeftCircle, IconArrowRightCircle } from "../components/Icons";
import BookTile from "../components/bookstore/BookTile";

import { useFetchData } from "../utilities_&_custom_hooks/fetchHooks";
import { useSendToBasket } from "../utilities_&_custom_hooks/postLogs";
import { BasketWarningModal } from "../components/SmallComponents";
import { Link, Navigate } from "react-router-dom";

export function BookstorePage() {
  const topRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const id = "";
  let { currentPage, handleNextPage, handlePrevPage } = usePagination();

  const { data, isPending, error } = useFetchData(
    "https://paperback-vy73.onrender.com/api/books",
    id,
    currentPage
  );
  useEffect(() => {
    let timer;

    if (isPending) {
      // Set a timer to clear local storage after 20 seconds
      timer = setTimeout(() => {
        // Clear local storage here
        localStorage.clear(); // Replace 'tokenExpiration' with your key
        // You can clear other relevant keys or perform logout actions here
      }, 5000); // 20 seconds (20000 milliseconds)
    }

    // Clean up function to clear the timer when isPending changes to false
    return () => {
      clearTimeout(timer); // Clear the timer if component unmounts or isPending becomes false
    };
  }, [isPending]);
  const { itemSent, errorInBasket, sendToBasket, setErrorInBasket } =
    useSendToBasket();

  if (!data) {
    return (
      <div className="flex flex-col">
        <div>No books</div>
        <div className="flex justify-center items-center bg-red-300 h-9">
          <div className="flex  gap-6">
            <button
              onClick={(e) => {
                handlePrevPage();
                scrollToTop();
              }}
            >
              <IconArrowLeftCircle className={"h-7 w-7"} />
            </button>
            <p>Page {currentPage}</p>
            <button disabled={true}>
              {" "}
              <IconArrowRightCircle className={"h-7 w-7"} />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative">
        {errorInBasket && (
          <BasketWarningModal
            setErrorInBasket={setErrorInBasket}
            msg={errorInBasket.response?.data?.msg}
          />
        )}
        <h2
          className="text-[2.5rem] text-center my-[2rem] font-bold hidden lg:block "
          ref={topRef}
        >
          <span className="text-[1.2rem]">Our </span>
          <br />
          BOOKSTORE
        </h2>

        <div className="flex">
          {/* Filters */}
          <form className="w-[20%]  mr-8 flex flex-col gap-2 ">
            <h2 className="roboto-regular border-[#778da9] border-b-[1px] pb-2 text-2xl ">
              Filter by
            </h2>

            <div className="collapse rounded-none border-[#778da9] border-b-[1px]">
              <input type="checkbox" />
              <div className="collapse-title text-[1rem] font-medium">
                <h2 className="roboto-regular">Publisher</h2>
              </div>
              <div className="collapse-content">
                <div className="flex flex-row">
                  <input
                    type="checkbox"
                    defaultChecked
                    id="routledge"
                    className="checkbox h-[1rem] w-[1rem] mr-2 my-auto border-[#778da9] [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
                  />
                  <label for="routledge">Routledge</label>
                </div>
              </div>
            </div>
            <div className="collapse rounded-none border-[#778da9] border-b-[1px]">
              <input type="checkbox" />
              <div className="collapse-title text-[1rem] font-medium">
                <h2 className="roboto-regular">Categories</h2>
              </div>

              <div className="collapse-content">
                <p>Categories</p>
              </div>
            </div>
            <div className="collapse rounded-none border-[#778da9] border-b-[1px]">
              <input type="checkbox" />
              <div className="collapse-title text-[1rem] font-medium">
                <h2 className="roboto-regular"> Year</h2>
              </div>

              <div className="collapse-content">
                <p> year_from, year_to</p>
              </div>
            </div>
            <div className="collapse rounded-none border-[#778da9] border-b-[1px]">
              <input type="checkbox" />
              <div className="collapse-title text-[1rem] font-medium">
                <h2 className="roboto-regular"> Price</h2>
              </div>

              <div className="collapse-content">
                <p> , min_price, max_price,</p>
              </div>
            </div>
          </form>
          {/* End filters */}

          <div className="gallery-grid justify-center">
            {" "}
            {isPending ? (
              <div className="absolute top-0 bottom-0  w-full h-[80vh] bg-white flex justify-center content-center">
                <span className="loading loading-spinner loading-lg "></span>
              </div>
            ) : data?.books ? (
              data.books.books.map((book) => (
                <BookTile
                  title={book.title}
                  imageLinks={book.imageLinks}
                  authors={book.authors}
                  price={book.price}
                  key={book._id}
                  bookId={book._id}
                  sendToBasket={sendToBasket}
                />
              ))
            ) : (
              <Navigate to={"/bookstore?page=1"} />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center  h-9 py-7 ">
          <div className="flex  gap-4">
            {currentPage === 1 ? (
              <button disabled={true} className="hidden">
                <IconArrowLeftCircle className={"h-7 w-7"} />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handlePrevPage();
                  scrollToTop();
                }}
              >
                <IconArrowLeftCircle className={"h-7 w-7"} />
              </button>
            )}

            <p>Page {currentPage}</p>

            {currentPage === Math.ceil(data?.books?.lengthOfCollection / 12) ? (
              <button
                className="hidden"
                onClick={(e) => {
                  handleNextPage();
                  scrollToTop();
                }}
              >
                <IconArrowRightCircle className={"h-7 w-7"} />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleNextPage();
                  scrollToTop();
                }}
              >
                <IconArrowRightCircle className={"h-7 w-7"} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
