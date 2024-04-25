const BookTile = () => {
  return (
    <div className="bg-white w-[10rem] h-[20rem] card-container text-center text-[1.2rem] flex flex-col justify-between">
      <div className="bg-gray-200 bg-opacity-[0.7] overflow-hidden relative">
        <figure className="px-[2rem] py-[1rem]">
          <img
            className="w-auto h-[8.5rem] m-auto shadow-sm shadow-gray-700"
            src="https://i.pinimg.com/564x/2a/15/90/2a1590bdd52d010b16de2984d18a875c.jpg"
            alt=""
          />
        </figure>
        <div className="absolute w-full h-[3rem] bg-white bg-opacity-[.8] bottom-0 flex items-center justify-center quick-view-container">
          <p>Quick View</p>
        </div>
      </div>
      <div className="">
        <h2>Book Title</h2>
        <p>£20.00</p>
      </div>
      <button className="bg-[#023047] add-to-cart-btn h-[3rem] text-white">
        Add To Cart
      </button>
    </div>
  );
};

export default BookTile;
