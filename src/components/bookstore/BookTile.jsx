import { NavLink } from "react-router-dom";

const BookTile = (props) => {
  return (
    <div className="card" id={props.bookId}>
      {/* Image container start */}
      <NavLink
        className="image-container relative"
        to={`book-details/${props.bookId}`}
      >
        <div className="px-10 py-4 bg-gray-100">
          <img src={props.imageLinks[0]} alt="" className="shadow-xl" />
        </div>
        <div className="quick-actions bg-white bg-opacity-[.8] w-full flex flex-col gap-2 p-2 absolute">
          <div className="py-1 flex justify-center items-center h-[4rem]">
            <button className="hover:opacity-[0.6] transition-all duration-[200ms]">
              Quick View
            </button>
          </div>
        </div>
      </NavLink>
      {/* Image container end */}
      {/* Info book container start */}
      <div className="book-info-card py-4 text-center flex  flex-col gap-2">
        <NavLink to={`book-details`} className="line-clamp-1 text-sm">
          {props.title}
        </NavLink>
        <p className="line-clamp-1 text-xs">{props.authors}</p>
        <p className="libre-baskerville-regular">£{props.price.toFixed(2)}</p>
        <div className="py-1 text-center bg-[#023047] text-white add-to-cart-btn">
          <button
            onClick={() => {
              props.sendToBasket(props.bookId);
            }}
          >
            Add to basket
          </button>
        </div>
      </div>
      {/* Info book container  end*/}
    </div>
  );
};

export default BookTile;
