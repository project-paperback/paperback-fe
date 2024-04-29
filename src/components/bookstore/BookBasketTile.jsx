import { IconClose } from "../Icons";
import { IncreaseDecreaseBookQty } from "../SmallComponents";

export function BookBasketTile(props) {
  return (
    // <div>
    //   <div className="lg:w-3/4 mx-auto lg:p-3 ">
    //     <button className="ml-auto  block lg:hidden">
    //       <IconClose />
    //     </button>
    //     <div className="flex w-full flex-col lg:flex-row">
    //       <div className=" p-9 flex border-red-300 border-2 flex-row text-center gap-[35px] ">
    //         <div className="border-red border-2 w-fit px-[1rem] py-[1rem]">
    //           <img
    //             className="h-auto min-w-[5rem] w-[100%] shadow-sm shadow-gray-700"
    //             src="https://i.pinimg.com/564x/2a/15/90/2a1590bdd52d010b16de2984d18a875c.jpg"
    //             alt=""
    //           />
    //         </div>
    //         <div className="">
    //           <h2>Book Title</h2>
    //           <p>£20.00</p>
    //         </div>
    //         <div className=" flex justify-end gap-[50px] ">
    //           <IncreaseDecreaseBookQty />
    //           <p>£20 xQty</p>
    //         </div>
    //       </div>

    //       <button className="ml-auto mb-auto hidden lg:block">
    //         <IconClose />
    //       </button>
    //     </div>
    //   </div>
    // </div>

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
          <p>
            {" "}
            The magnificet adventures of alfredo in latin american gangs and
            drug dealing
          </p>
          <p>£20.00</p>
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-6 ">
        <div className="lg:hidden flex flex-col gap-4">
          <p>
            The magnificet adventures of alfredo in latin american gangs and
            drug dealing
          </p>
          <p>£20.00</p>
        </div>

        <div className="flex  flex-col lg:flex-row gap-5 lg:justify-between lg:w-[15rem]">
          <IncreaseDecreaseBookQty className={"w-fit"} />
          <p>£20 x Qty</p>
        </div>
      </div>
    </div>
  );
}
