// Hooks
import { useEffect, useState } from "react";
import { useFetchBasket } from "../utilities_&_custom_hooks/fetchHooks";

// Components
import { BookBasketTile } from "../components/bookstore/BookBasketTile";
import { PurchaseSummary } from "../components/SmallComponents";

import axios from "axios";
import { Link } from "react-router-dom";

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

  if (data.length === 0) {
    return (
      <div className="lg:flex flex-col lg:w-[75%] lg:mx-auto mx-10 mt-8">
        <div className="border-b-[1px] border-[#023047] py-3">
          <h2 className="text-[1.5rem]">My cart</h2>
        </div>
        <div className="flex items-center justify-center h-[22rem] border-b-[1px] border-[#023047]">
          <div className="text-center">
            <h2 className="text-[1.5rem] mb-4">Cart is empty</h2>
            <Link to="/bookstore?page=1" className="underline">
              Continue Browsing
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="lg:flex flex-col xl:grid grid-cols-[70%_30%] gap-8 2xl:w-[75%] lg:mx-auto mx-10 mt-8">
      <div className="">
        <div className="border-b-[1px] border-[#023047] py-3">
          <h2 className="text-[1.5rem]">My cart</h2>
        </div>
        {booksInData.map((book) => {
          return (
            <BookBasketTile
              key={book.product}
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
      <div className="2xl:w-[15vw] xl:w-[25vw] mt-8">
        <div className="w-full">
          <PurchaseSummary total={total} />
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;
