import { IncreaseDecreaseBookQty } from "../SmallComponents";

export function BookBasketTile(props) {
  return (
    <div className=" ">
      <div className="flex gap-5">
        <figure>
          <img
            src="https://i.pinimg.com/564x/2a/15/90/2a1590bdd52d010b16de2984d18a875c.jpg"
            alt="book cover"
          />
        </figure>
        <div className="">
          <h2>Book Title</h2>
          <p>£20.00</p>
        </div>
        <div className="">
          <IncreaseDecreaseBookQty />
        </div>
      </div>
    </div>
  );
}
