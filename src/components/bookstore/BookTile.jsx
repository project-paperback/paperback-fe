import { Link, NavLink } from "react-router-dom";
const BookTile = (props) => {
  return (
    <div className={`card`} id={props.bookId}>
      {/* Image container start */}
      <div className="image-container relative">
        <NavLink to={`/bookstore/book-details/${props.bookId}`}>
          <div className="px-10 py-4 bg-gray-100">
            <img src={props.imageLinks[1]} alt="" className="shadow-xl" />
          </div>
        </NavLink>
        <div
          className="quick-actions bg-white bg-opacity-[.8] w-full flex flex-col gap-2 p-2 absolute"
          onClick={() => {
            props.setIsQuickViewOpen(true);
            // console.log(props);
          }}
        >
          <button className="py-1 flex justify-center items-center h-[4rem]">
            <div className="hover:opacity-[0.6] transition-all duration-[200ms]">
              Quick View
            </div>
          </button>
        </div>
      </div>
      {/* Image container end */}
      {/* Info book container start */}
      <div
        className={`book-info-card py-4 text-center flex  flex-col gap-2 ${props.textColor}`}
      >
        <NavLink
          to={`/bookstore/book-details/${props.bookId}`}
          className="line-clamp-1 text-lg"
        >
          {props.title}
        </NavLink>
        <p className="line-clamp-1 text-xs">{props.authors}</p>
        <p className="libre-baskerville-regular">£{props.price.toFixed(2)}</p>
        <button
          className={`py-3 text-center bg-[#023047] text-white add-to-cart-btn ${props.buttonStyle}`}
          // >
          //   <button
          onClick={() => {
            props.sendToBasket(props.bookId);
          }}
        >
          Add to basket
          {/* </button> */}
        </button>
      </div>
      {/* Info book container  end*/}
    </div>
  );
};

export default BookTile;
