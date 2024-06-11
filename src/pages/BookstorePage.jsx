import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
// components
import { usePagination } from "../utilities_&_custom_hooks/General";
import { IconArrowLeftCircle, IconArrowRightCircle } from "../components/Icons";
import BookTile from "../components/bookstore/BookTile";
import {
  BasketWarningModal,
  QuickViewModal,
} from "../components/SmallComponents";
import { Filters } from "../components/BookFilter";
// Custom hooks
import { useFetchData } from "../utilities_&_custom_hooks/fetchHooks";
import { useSendToBasket } from "../utilities_&_custom_hooks/postLogs";

export function BookstorePage() {
  const [searchParams] = useSearchParams();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [bookId, setBookId] = useState("");
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
    currentPage,
    searchParams
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
  const hidden = data.msg === "More books coming soon!" ? "hidden" : "block";
  return (
    <div className="relative">
      {isQuickViewOpen && (
        <QuickViewModal
          isQuickViewOpen={isQuickViewOpen}
          setIsQuickViewOpen={setIsQuickViewOpen}
          data={data}
          bookId={bookId}
        />
      )}
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

      <div className="flex relative justify-center">
        <div className="gallery-grid justify-center ">
          {data.msg === "More books coming soon!" && (
            <div className="w-[100%] h-[100%] my-auto  absolute flex flex-col justify-center items-center text-[2rem]">
              <p>{data.msg}</p>
            </div>
          )}
          <div className="grid-filter mx-auto">
            <Filters />
          </div>
          {isPending ? (
            <div className="absolute top-0 bottom-0  w-full h-[80vh] bg-white flex justify-center content-center">
              <span className="loading loading-spinner loading-lg "></span>
            </div>
          ) : data?.books ? (
            data.books.books.map((book) => (
              <BookTile
                title={book.title}
                publisher={book.publisher}
                imageLinks={book.imageLinks}
                authors={book.authors}
                price={book.price}
                key={book._id}
                bookId={book._id}
                sendToBasket={sendToBasket}
                isQuickViewOpen={isQuickViewOpen}
                setIsQuickViewOpen={setIsQuickViewOpen}
                setBookId={setBookId}
              />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className={`flex justify-center items-center  h-9 py-7 ${hidden}`}>
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
