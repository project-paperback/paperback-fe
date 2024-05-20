import { useContext, useEffect, useState } from "react";
import { UserContext, sendToBasket } from "../utilities_&_custom_hooks/General";
import axios from "axios";

import BookTile from "../components/bookstore/BookTile";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSendToBasket } from "../utilities_&_custom_hooks/postLogs";
import { BasketWarningModal } from "../components/SmallComponents";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2100 },
    items: 5,
    // partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1084 },
    items: 4,
    // partialVisibilityGutter: 40,
  },
  lgTablet: {
    breakpoint: { max: 1080, min: 720 },
    items: 3,
    // partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 700, min: 500 },
    items: 2,
    // partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // partialVisibilityGutter: 40,
  },
};
export function HomePage(props) {
  const { itemSent, errorInBasket, sendToBasket, setErrorInBasket } =
    useSendToBasket();
  const salutations = useContext(UserContext);
  const [carouselBooks, setCarouselBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://paperback-vy73.onrender.com/api/books")
      .then(({ data }) => setCarouselBooks(Array.from(data.books)));
  }, []);
  console.log(carouselBooks);
  return (
    <div>
      {errorInBasket && (
        <BasketWarningModal
          setErrorInBasket={setErrorInBasket}
          msg={errorInBasket.response?.data?.msg}
        />
      )}

      <div className="hero-banner-styles">
        <div className="w-full h-full bg-black bg-opacity-[.2] relative">
          <h2 className="text-[rgba(214,187,75,.8)] font-bold  lg:text-[5rem]  text-[3.5rem] absolute left-6 top-6 lg:leading-[6rem] leading-[4rem]">
            A SOFA, <br />A GOOD BOOK, <br /> AND YOU.
          </h2>
        </div>
      </div>
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="ease-in-out 600ms"
        // transitionDuration={100}
        containerClass=""
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="mx-[5%] lg:px-14 px-[12%] lg:w-[90%]"
      >
        {carouselBooks.map((book) => (
          <div className="w-[70%]">
            <BookTile
              title={book.title}
              imageLinks={book.imageLinks}
              price={book.price}
              key={book._id}
              bookId={book._id}
              sendToBasket={sendToBasket}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
