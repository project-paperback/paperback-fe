import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(url, id, currentPage) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${url}?page_number=${currentPage}`; // Build URL with current page
        const response = await axios.get(apiUrl);
        const data = response.data;

        setData(data);
        setIsPending(false);
      } catch (error) {
        setError(error);
        setIsPending(false);
      }
    };

    if (currentPage) {
      // Only fetch if currentPage exists
      fetchData();
    }
  }, [currentPage]); // Only include currentPage in dependency array

  return { data, isPending, error };
}

export function useFetchBasket(url, changeQty) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(url).then(({ data }) => setData(data.basketItems));
  }, [url, changeQty]);

  return { data, isPending, error };
}
