import { useParams } from "react-router-dom";
import { useFetchData } from "../utilities_&_custom_hooks/fetchInfo";

export function BookDetails() {
  const pageNumber = "";
  const { book_id } = useParams();
  const { data, isPending, error } = useFetchData(
    "https://paperback-vy73.onrender.com/api/books",
    book_id,
    pageNumber
  );
  return (
    <div>
      {isPending ? (
        <p>Loading book details...</p>
      ) : (
        <div className="container bg-cyan-200 flex gap-6">
          <div className="book-detail-img bg-gray-100 w-[40%] px-[5rem] py-[1rem] ">
            <img
              src={data.book.imageLinks[0]}
              alt=""
              className="mx-[1rem] my-[1rem] shadow-xl shadow-gray-400"
            />
          </div>
          <div className="bg-red-200 w-full">
            <h1 className="text-2xl">{data.book.title}</h1>
            <p>£{data.book.price.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
