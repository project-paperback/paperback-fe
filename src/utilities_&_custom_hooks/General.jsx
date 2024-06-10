import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useSearchParams } from "react-router-dom";

export function usePagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page"));

  const [currentPage, setCurrentPage] = useState(page);

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    setSearchParams({ page: newPage });
  };
  const handlePrevPage = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    setSearchParams({ page: newPage });
  };
  return { currentPage, handleNextPage, handlePrevPage };
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
