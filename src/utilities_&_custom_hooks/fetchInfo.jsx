import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(url, id, pageNumber) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = id ? `${url}/${id}` : `${url}?page_number=${pageNumber}`;
        const response = await axios.get(apiUrl);
        setData(response.data);
        setIsPending(false);
      } catch (error) {
        setError(error);
        setIsPending(false);
      }
    };

    fetchData();
  }, [url, id, pageNumber]);
  return { data, isPending, error };
}
