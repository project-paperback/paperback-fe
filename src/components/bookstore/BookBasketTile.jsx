import { useEffect, useState } from "react";
import { IconClose } from "../Icons";
import { IncreaseDecreaseBookQty } from "../SmallComponents";
import { deleteItemFromBasket } from "../../utilities_&_custom_hooks/General";

export function BookBasketTile(props) {
  let [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(props.qty);
  }, []);
  const increaseQty = () => {
    setQty((prevQty) => Number(prevQty) + 1); // Use functional update to ensure correct previous state
    // setQty(++qty);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      props.setQtySums();
      setQty((prevQty) => Number(prevQty) - 1); // Ensure qty does not go below 1
    }
  };

  const inputQty = (e) => {
    const value = parseInt(e.target.value);
    setQty(value >= 1 ? value : 1); // Update qty only if input value is valid
  };

  return (
    <div className="lg:grid basket-tile-item relative   flex flex-col text-center lg:text-left my-2 ">
      <div className="lg:grid grid-cols-inner-info flex flex-col">
        <div className="border-2 p-3 w-[8rem] mx-auto lg:mb-0 mb-5">
          <img src={props.thumbnails[0]} alt="" className="h-auto " />
        </div>
        <div className="lg:flex lg:flex-col lg:gap-4 ">
          <h2>{props.description}</h2>
          <p>£{props.price}</p>{" "}
        </div>
      </div>

      {/* ===================== */}
      <div className="lg:ml-8 lg:mt-0 mt-3 flex  flex-col lg:flex-row lg:gap-5 gap-2 lg:justify-between lg:w-[11rem] ">
        {/* Magic qty box*/}
        <IncreaseDecreaseBookQty
          qty={qty}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          inputQty={inputQty}
          className={"w-fit mx-auto lg:mx-0"}
        />
        {/* ===================*/}
        <p id="p-tag">£{(qty * props.price).toFixed(2)}</p>
      </div>
      <button
        className="mb-auto ml-auto absolute right-0 top-0 mr-2"
        onClick={() => {
          deleteItemFromBasket(props.product);
          props.deleteFromFront(props.product);
        }}
      >
        <IconClose />
      </button>
    </div>
  );
}
