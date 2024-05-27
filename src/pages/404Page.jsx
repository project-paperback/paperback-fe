import { Link } from "react-router-dom";
import { Icon404 } from "../components/Icons";

export function PageNotFound() {
  return (
    <div className="not-found-page h-[80vh] flex justify-center items-center">
      <div className="opacity-100 text-[#023047]  bg-white bg-opacity-[.7] p-[2rem] xl:p-[4rem] w-[90%] lg:w-[70%]">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex items-center ">
            <Icon404
              className={`w-[50%] h-[50%] lg:w-[100%] lg:h-[100%] fill-[none] mx-auto`}
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className=" sm:text-[1.2rem] lg:text-[2rem] roboto-regular">
              404: Page Not Found
            </h2>
            <div className="sm:text-[1.2rem] lg:text-[1.6rem]">
              <p>
                Oops! We couldn't find the page you requested. We apologize for
                the inconvenience.
              </p>
              <p>
                Please check the URL or head back to
                <span>
                  {" "}
                  <Link className="underline" to={"/bookstore?page=1"}>
                    Bookstore
                  </Link>
                </span>
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
