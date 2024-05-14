// Hooks
import { useEffect, useState } from "react";
import { useFetchBasket } from "../utilities_&_custom_hooks/fetchHooks";
// Components
import { BookBasketTile } from "../components/bookstore/BookBasketTile";
import { PurchaseSummary } from "../components/SmallComponents";

import axios from "axios";

const ViewCartPage = () => {
  const [changeQty, setChangeQty] = useState(false);
  let [total, setTotal] = useState(0);
  const { data, isPending, error } = useFetchBasket(
    "https://paperback-vy73.onrender.com/api/basket",
    changeQty
  );
  const [booksInData, setBooksInData] = useState([]);

  useEffect(() => {
    const arr = Array.from(data);
    setBooksInData(arr);
  }, [data, changeQty]);

  useEffect(() => {
    const myData = axios
      .get("https://paperback-vy73.onrender.com/api/basket")
      .then(({ data }) => {
        const basket = data.basketItems;
        const values = basket.map((book) => book.price * book.quantity);
        if (values.length > 0) {
          setTotal(() =>
            values.reduce(
              (aggregate, current) => (aggregate = current + aggregate)
            )
          );
        } else if (values.length === 0) setTotal(0);
      });
  }, [changeQty, booksInData]);

  console.log(total, "TOTAAAAAAAAAL!!!!!");

  useEffect(() => {
    for (let i = 0; i < booksInData.length; i++) {
      console.log(booksInData[i].price * booksInData[i].quantity);
    }
  }, [booksInData]);
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
              changeQty={changeQty}
              setChangeQty={setChangeQty}
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
