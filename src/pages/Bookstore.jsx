import { useRef } from "react";
import { usePagination } from "../General";
import { IconArrowLeftCircle, IconArrowRightCircle } from "../components/Icons";
import BookTile from "../components/bookstore/BookTile";

import { useFetchData } from "../utilities_&_custom_hooks/fetchInfo";
export function Experiment() {
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
      <div>
        <h2 ref={topRef}>Our Bookstore</h2>
        <div className="gallery-grid justify-center">
          {" "}
          {isPending ? (
            <p>Pending</p>
          ) : (
            data.books.map((book) => (
              <BookTile
                title={book.title}
                imageLinks={book.imageLinks}
                authors={book.authors}
                price={book.price}
                key={book._id}
                bookId={book._id}
              />
            ))
          )}
        </div>
        <div className="flex justify-center items-center bg-red-300 h-9 py-7 ">
          <div className="flex  gap-4">
            {pageNumber === 1 ? (
              <button disabled={true}>
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
