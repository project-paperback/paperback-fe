import { useState, useEffect } from "react";

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
