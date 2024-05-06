import { NavLink, useParams } from "react-router-dom";
import { useFetchData } from "../utilities_&_custom_hooks/fetchInfo";

export function BookDetailsPage() {
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
        <div className="absolute top-0  w-full h-full bg-white flex justify-center content-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="text-sm w-full  ">
            <ul className="flex gap-2 px-12">
              <li>
                <NavLink to={"/"}>Home/</NavLink>
              </li>
              <li>
                <NavLink to={"/bookstore"}>Bookstore/</NavLink>
              </li>
              <li>
                <NavLink>Book description</NavLink>
              </li>
            </ul>
          </div>
          <div className="container  flex flex-col lg:flex-row gap-6 mx-auto ">
            <div className="book-detail-img bg-gray-100 lg:w-[40%] px-[5rem] py-[1rem] mx-auto w-[80%]">
              <img
                src={data.book.imageLinks[0]}
                alt=""
                className="lg:mx-[1rem] my-[1rem] shadow-xl shadow-gray-400 mx-auto"
              />
            </div>
            <div className=" w-[80%] lg:w-[50%] flex flex-col gap-6 mx-auto lg:mx-0">
              <h1 className="text-2xl">{data.book.title}</h1>
              <p className="text-xl price">£{data.book.price.toFixed(2)}</p>

              <button className=" text-center bg-[#023047] text-white w-full lg:w-[60%] mx-auto  hover:bg-opacity-[0.80] transition-all duration-[200ms] py-3">
                Add to basket
              </button>

              <div className="flex flex-col gap-3">
                <h3>Synopsis</h3>
                <p className="line-clamp-[8]">{data.book.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
