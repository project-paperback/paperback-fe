import { usePagination } from "./General";
import BookTile from "./components/bookstore/BookTile";

import { useFetchData } from "./utilities_&_custom_hooks/fetchInfo";
export function Experiment() {
  const id = "";
  let { pageNumber, handleNextPage, handlePrevPage } = usePagination();

  const { data, isPending, error } = useFetchData(
    "https://paperback-vy73.onrender.com/api/books",
    id,
    pageNumber
  );
  if (!data.books) {
    return (
      <div>
        <div>No books</div>
        <div className="flex  gap-6">
          <button onClick={handlePrevPage}>previous</button>
          <p>{pageNumber}</p>
          <button disabled={true}>next</button>
        </div>
      </div>
    );
  } else {
    return (
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
        <div className="flex  gap-6">
          {pageNumber === 1 ? (
            <button disabled={true}>previous</button>
          ) : (
            <button onClick={handlePrevPage}>previous</button>
          )}
          <p>{pageNumber}</p>
          <button onClick={handleNextPage}>next</button>
        </div>
      </div>
    );
  }
}
