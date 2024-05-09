import axios from "axios";
import { useState, useEffect, createContext } from "react";
export function usePagination() {
  const [pageNumber, setPageNumber] = useState(1);

  const handleNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const handlePrevPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };
  return { pageNumber, handleNextPage, handlePrevPage };
}
export function sendToBasket(id) {
  console.log(id);
  const sendTo = `https://paperback-vy73.onrender.com/api/add_to_basket`;
  const productId = id;
  const sendToBasket = axios
    .post(sendTo, { productId })
    .then((data) => console.log(data));
}

export const UserContext = createContext(null);

export function deleteItemFromBasket(id) {
  const deleteFrom = `https://paperback-vy73.onrender.com/api/remove_from_basket/${id}`;
  axios.delete(deleteFrom).then(({ data }) => console.log(data.msg));
}
