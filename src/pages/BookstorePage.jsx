import { useEffect, useRef, useState } from "react";
import { usePagination } from "../utilities_&_custom_hooks/General";
import { IconArrowLeftCircle, IconArrowRightCircle } from "../components/Icons";
import BookTile from "../components/bookstore/BookTile";

import { useFetchData } from "../utilities_&_custom_hooks/fetchHooks";
import { useSendToBasket } from "../utilities_&_custom_hooks/postLogs";
import { BasketWarningModal } from "../components/SmallComponents";
import { Navigate } from "react-router-dom";

export function BookstorePage() {
  const topRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const id = "";
  let { pageNumber, handleNextPage, handlePrevPage } = usePagination();

  const { data, isPending, error } = useFetchData(
    "https://paperback-vy73.onrender.com/api/books",
    id,
    pageNumber
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
            <p>Page {pageNumber}</p>
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
        <div className="gallery-grid justify-center">
          {" "}
          {isPending ? (
            <div className="absolute top-0 bottom-0  w-full h-[80vh] bg-white flex justify-center content-center">
              <span className="loading loading-spinner loading-lg "></span>
            </div>
          ) : data?.books ? (
            data.books.map((book) => (
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
            <Navigate to={"bookstore"} />
          )}
        </div>
        <div className="flex justify-center items-center  h-9 py-7 ">
          <div className="flex  gap-4">
            {pageNumber === 1 ? (
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

            <p>Page {pageNumber}</p>
            <button
              onClick={(e) => {
                handleNextPage();
                scrollToTop();
              }}
            >
              <IconArrowRightCircle className={"h-7 w-7"} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
