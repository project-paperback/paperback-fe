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

export function IncreaseDecreaseBookQty() {
  return (
    <div>
      <form action="">
        <div className=" flex items-center border-[2px] border-[#023047]  px-1">
          <button className="h-full w-full *:stroke-[#023047] px-[2px]">
            <IconMinus />
          </button>
          <InputField
            className={"outline-none w-[40px] h-[30px]  text-center "}
            maxLength={"2"}
          />
          <button className="h-full w-full *:stroke-[#023047]  px-[2px]">
            <IconPlus />
          </button>
        </div>
      </form>
    </div>
  );
}
