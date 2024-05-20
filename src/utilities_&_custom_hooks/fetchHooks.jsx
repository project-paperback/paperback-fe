import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchData(url, id, pageNumber) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  let buildUrl = "";
  if (id) {
    buildUrl = `${url}/${id}`;
  } else if (pageNumber) {
    buildUrl = `${url}?page_number=${pageNumber}`;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = buildUrl;
        const response = await axios.get(apiUrl);
        const data = response.data;
        setData(data);
        console.log(data);

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

export function useFetchBasket(url, changeQty) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(url).then(({ data }) => setData(data.basketItems));
  }, [url, changeQty]);

  return { data, isPending, error };
}
