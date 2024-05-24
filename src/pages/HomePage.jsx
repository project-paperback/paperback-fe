import { useContext, useEffect, useState } from "react";
import { UserContext, sendToBasket } from "../utilities_&_custom_hooks/General";
import axios from "axios";

import BookTile from "../components/bookstore/BookTile";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSendToBasket } from "../utilities_&_custom_hooks/postLogs";
import { BasketWarningModal } from "../components/SmallComponents";
import { Link } from "react-router-dom";

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
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get("https://paperback-vy73.onrender.com/api/books")
      .then(({ data }) => {
        setIsPending(false);
        setCarouselBooks(Array.from(data.books));
      });
  }, []);

  return (
    <div className="relative">
      {errorInBasket && (
        <BasketWarningModal
          setErrorInBasket={setErrorInBasket}
          msg={errorInBasket.response?.data?.msg}
        />
      )}
      {isPending ? (
        <div className="absolute top-0 bottom-0 h-[80vh] w-full z-10 bg-white flex justify-center content-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      ) : (
        <>
          <div className="hero-banner-styles">
            <div className="w-full h-full bg-black bg-opacity-[.2] relative">
              <h2 className="text-[rgba(214,187,75,.8)] font-bold  lg:text-[5rem]  text-[3.5rem] absolute left-6 top-6 lg:leading-[6rem] leading-[4rem]">
                A SOFA, <br />A GOOD BOOK, <br /> AND YOU.
              </h2>
            </div>
          </div>
          <div className="grid landing-grid mt-[3rem]">
            <div className="bg-row flex justify-center">
              <h2 className="text-[2.5rem] mb-[1rem] pt-[2rem]">BESTSELLERS</h2>
            </div>

            <div className="carousel-holder">
              <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="ease-in-out 600ms"
                // transitionDuration={100}
                containerClass=""
                removeArrowOnDeviceType={["tablet", "lgTablet", "mobile"]}
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
                      textColor={"text-white"}
                      buttonStyle={"button-style"}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="row-start-4 col-start-1 col-end-9 text-white mt-[14rem]">
              <div className="text-[2.5rem] text-center landing-recommended-border-y flex flex-col py-2">
                <h2 className="leading-[3rem]">
                  <span className="text-[1.5rem]">This Month's</span>
                  <br />
                  RECOMMENDED BOOKS
                </h2>
              </div>
            </div>
            <div className="recommended-books-carousel row-start-7 col-start-1 col-end-9 mt-[4rem]">
              <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="ease-in-out 600ms"
                // transitionDuration={100}
                containerClass=""
                removeArrowOnDeviceType={["tablet", "lgTablet", "mobile"]}
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
                      textColor={"text-white"}
                      buttonStyle={"button-style"}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="row-start-10 col-start-2 col-end-8 text-white  mt-[10rem]">
              <div className="text-[4rem] text-center landing-recommended-border-y flex flex-col py-2">
                <h2 className="leading-[5.5rem]">
                  THERE'S NO <br /> SUCH THING AS TOO MANY BOOKS
                </h2>
                <Link
                  to="bookstore"
                  className="button-style text-[1.2rem] w-fit mx-auto py-2 px-6 mt-[3rem] hover:bg-white hover:text-[#023047] transition-all duration-300"
                >
                  Bookstore
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
