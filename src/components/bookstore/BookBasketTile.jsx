import { useEffect, useRef, useState } from "react";
import { IconClose } from "../Icons";
import { IncreaseDecreaseBookQty } from "../SmallComponents";
import axios from "axios";

export function BookBasketTile(props) {
  let [quantity, setQuantity] = useState(1);
  // const pRef = useRef(null);
  useEffect(() => {
    setQuantity(props.qty);
  }, []);
  const increaseQty = () => {
    setQuantity((prevQty) => Number(prevQty) + 1);
    // console.log(pRef?.current?.innerText);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => Number(prevQty) - 1);
    }
  };

  const inputQty = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value >= 1 ? value : 1);
  };

  //update summary using backend values

  return (
    <div className="lg:grid basket-tile-item relative   flex flex-col text-center lg:text-left my-2 ">
      <div className="lg:grid grid-cols-inner-info flex flex-col">
        <div className="border-2 p-3 w-[8rem] mx-auto lg:mb-0 mb-5">
          <img src={props.thumbnails[1]} alt="" className="h-auto " />
        </div>
        <div className="lg:flex lg:flex-col lg:gap-4 ">
          <h2>{props.description}</h2>
          <p>£{props.price.toFixed(2)}</p>{" "}
        </div>
      </div>

      {/* ===================== */}
      <div className="lg:ml-8 lg:mt-0 mt-3 flex  flex-col lg:flex-row lg:gap-5 gap-2 lg:justify-between lg:w-[11rem] ">
        {/* Magic quantity box*/}
        <IncreaseDecreaseBookQty
          quantity={props.qty}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          inputQty={inputQty}
          changeQty={props.changeQty}
          setChangeQty={props.setChangeQty}
          product={props.product}
          className={"w-fit mx-auto lg:mx-0"}
        />
        {/* ===================*/}
        <p id="p-tag">£{(props.qty * props.price).toFixed(2)}</p>
      </div>
      <button
        className="mb-auto ml-auto absolute right-0 top-0 mr-2"
        onClick={async () => {
          try {
            await axios.delete(
              `https://paperback-vy73.onrender.com/api/remove_from_basket/${props.product}`
            );
            props.setChangeQty(() => !props.changeQty);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <IconClose />
      </button>
    </div>
  );
}
