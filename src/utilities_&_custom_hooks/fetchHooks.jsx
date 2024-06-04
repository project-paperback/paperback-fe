import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useFetchData(url, id, currentPage) {
  console.log(id);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  let secondURL = url; // Initialize with the base URL

  // Append query parameters conditionally
  if (id) {
    secondURL += `/${id}`;
  } else if (currentPage) {
    secondURL += `?page_number=${currentPage}`;
  }
  if (searchParams.get("publisher")) {
    const encodedPublisher = searchParams
      .get("publisher")
      .split(",")
      .map((item) => item.split(" ").join("+"))
      .join("%2C");
    const publisher = encodedPublisher;
    secondURL += `&publisher=${publisher}`;
  }
  if (searchParams.get("category")) {
    const encodedCategory = searchParams
      .get("category")
      .split(",")
      .map((item) => item.split(" ").join("+"))
      .join("%2C");
    const category = encodedCategory;
    secondURL += `&category=${category}`;
  }
  console.log(secondURL);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = secondURL;

        const response = await axios.get(apiUrl);
        const data = response.data;

        setData(data);

        setIsPending(false);
      } catch (error) {
        setError(error);
        setIsPending(false);
      }
    };

    fetchData();
  }, [url, id, currentPage, searchParams]);

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
