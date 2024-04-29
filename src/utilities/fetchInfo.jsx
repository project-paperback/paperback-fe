import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(url, id) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await axios.get(id ? `${url}/${id}` : url);
        setData(request.data);
        setIsPending(false);
      } catch (error) {
        setError(error);
        setIsPending(false);
      }
    };
    getData();
  }, [url, id]);
  return { data, isPending, error };
}
