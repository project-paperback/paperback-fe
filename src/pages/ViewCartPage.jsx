// Hooks
import { useEffect, useState } from "react";
import { useFetchBasket } from "../utilities_&_custom_hooks/fetchHooks";
// Components
import { BookBasketTile } from "../components/bookstore/BookBasketTile";
import { PurchaseSummary } from "../components/SmallComponents";

const ViewCartPage = () => {
  const { data, isPending, error } = useFetchBasket(
    "https://paperback-vy73.onrender.com/api/basket"
  );

  const [booksInData, setBooksInData] = useState([]);
  useEffect(() => {
    const arr = Array.from(data);
    setBooksInData(arr);
  }, [data]);

  const deleteFromFront = (toDel) => {
    const standing = booksInData.filter((book) => book.product != toDel);
    setBooksInData(standing);
  };
  console.log(booksInData);
  return (
    <div className="lg:flex flex-col xl:grid grid-cols-[70%_30%] gap-8 2xl:w-[75%] lg:mx-auto mx-10">
      <div className="">
        <div className="border-b-[1px] border-[#023047] py-3">
          <h2 className="text-[1.5rem]">My cart</h2>
        </div>
        {booksInData.map((book) => {
          return (
            <BookBasketTile
              product={book.product}
              thumbnails={book.thumbnails}
              qty={book.quantity}
              description={book.description}
              price={book.price}
              _id={book._id}
              deleteFromFront={deleteFromFront}
            />
          );
        })}
      </div>
      <div className="bg-blue-100 2xl:relative">
        <div className="xl:fixed">
          <PurchaseSummary />
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;
