import BookTile from "./components/bookstore/BookTile";
import { useFetchData } from "./utilities/fetchInfo";

export function Experiment() {
  const { data, isPending, error } = useFetchData(
    "https://paperback-vy73.onrender.com/api/books"
  );
  return (
    <div className="gallery-grid w-[60%]">
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
          />
        ))
      )}
    </div>
  );
}
