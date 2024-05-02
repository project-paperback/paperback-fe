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
  console.log(data);
  return <div>hello</div>;
}
