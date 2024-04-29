import { useState } from "react";
import { IconClose } from "../Icons";
import { IncreaseDecreaseBookQty } from "../SmallComponents";

export function BookBasketTile(props) {
  let [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty((prevQty) => Number(prevQty) + 1); // Use functional update to ensure correct previous state
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty((prevQty) => Number(prevQty) - 1); // Ensure qty does not go below 1
    }
  };

  const inputQty = (e) => {
    const value = parseInt(e.target.value);
    setQty(value >= 1 ? value : 1); // Update qty only if input value is valid
  };

  return (
    <div className="flex gap-[1rem] lg:gap-[4rem] py-[3rem]  px-3 relative">
      <button className="mb-auto ml-auto absolute right-0 top-0 mr-2">
        <IconClose />
      </button>
      <div className=" flex lg:gap-5 ">
        <div className="lg:border-2 p-3">
          <img
            src="https://i.pinimg.com/736x/d7/d1/a9/d7d1a92ea203e12e8af6f3702c52a28f.jpg"
            alt=""
            className="h-auto min-w-[4rem] w-[5rem]"
          />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:gap-4">
          <p>The Fellowship of the Ring</p>
          <p>£20.00</p>
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-6 ">
        <div className="lg:hidden flex flex-col gap-4 pr-3 lg:pr-0">
          <p>The Fellowship of the Ring</p>
          <p>£20.00</p>
        </div>

        <div className="flex  flex-col lg:flex-row gap-5 lg:justify-between lg:w-[15rem]">
          {/* Magic qty box*/}
          <IncreaseDecreaseBookQty
            qty={qty}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            inputQty={inputQty}
            className={"w-fit"}
          />
          {/* ===================*/}
          <p>£{qty * 20}.00</p>
        </div>
      </div>
    </div>
  );
}
