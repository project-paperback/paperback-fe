import axios from "axios";
import { IconMinus, IconPlus } from "./Icons";

export function InputField(props) {
  return (
    <div className="w-full">
      <label htmlFor={props.id}>{props.labelvalue}</label>
      <input {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="w-full">
      <label htmlFor={props.id}>{props.labelvalue}</label>
      <textarea {...props} />
    </div>
  );
}

export function IncreaseDecreaseBookQty(props) {
  return (
    <div>
      <div action="" className={props.className}>
        <div className=" flex items-center border-[2px] border-[#023047] ">
          <button
            className="h-full w-full *:stroke-[#023047]   px-[5px]"
            onClick={async (e) => {
              e.preventDefault();
              props.decreaseQty();
              await axios.patch(
                "https://paperback-vy73.onrender.com/api/basket/decrease_qty_by_one",
                { productId: props.product }
              );
              props.setChangeQty(() => !props.changeQty);
            }}
          >
            <IconMinus />
          </button>
          <input
            className={"outline-none w-[40px] h-[30px]  text-center"}
            maxLength={"2"}
            value={props.quantity}
            onChange={(e) => {
              props.inputQty(e);
            }}
          />
          <button
            className="h-full w-full *:stroke-[#023047]  px-[5px]"
            onClick={async (e) => {
              e.preventDefault();
              props.increaseQty();
              await axios.patch(
                "https://paperback-vy73.onrender.com/api/basket/increase_qty_by_one",
                { productId: props.product }
              );
              props.setChangeQty(() => !props.changeQty);
            }}
          >
            <IconPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export function BasketWarningModal(props) {
  return (
    <div
      className="bg-gray-700 bg-opacity-[.80] text-white z-[6] fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"
      // onClick={() => {
      //   props.setErrorInBasket();
      // }}
    >
      {/* Added Tailwind CSS classes for modal animation */}
      <div className=" border-[#023047] text-[#023047] py-12 px-6 text-center border-[10px] lG:w-[40%] bg-white flex flex-col gap-8">
        <div>{props.msg}</div>
        <div className="flex justify-end">
          <button
            className="text-[#023047] hover:opacity-[0.7] duration-[300ms]"
            onClick={() => {
              props.setErrorInBasket();
            }}
          >
            {" "}
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function PurchaseSummary(props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-b-[1px] border-[#023047] py-3 text-[1.5rem] mt-8 xl:mt-0">
        <h2>Order summary</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>£{props.total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-t-[1px] border-[#023047] pt-4 text-[1.2rem]">
          <p>Total</p>
          <p>£{props.total.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={async () => {
          const paymentURL = (
            await axios.post("https://paperback-vy73.onrender.com/api/checkout")
          ).data.paymentURL;
          window.location.href = paymentURL;
        }}
        className="bg-[#023047] text-white p-3 lg:w-[20%] mx-auto xl:w-[100%] w-full"
      >
        Checkout
      </button>
    </div>
  );
}
