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
    <div className="">
      <div className="">
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
      <div className="">
        <div className="">
          <PurchaseSummary />
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;
