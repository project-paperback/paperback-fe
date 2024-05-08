import axios from "axios";
import { useState } from "react";
export function useLogIn(userEmail, userPassword) {
  const sendToAutehticate = { userEmail, userPassword };

  const logInReq = axios.post(
    "https://paperback-vy73.onrender.com/api/sign_in",
    sendToAutehticate
  );
  const userLogged = logInReq.loggedIn;
  return userLogged;
}

export function useSendToBasket(id) {
  const [itemSent, setItemSent] = useState("");
  const [errorInBasket, setErrorInBasket] = useState("");
  const sendTo = `https://paperback-vy73.onrender.com/api/add_to_basket`;

  const sendToBasket = async (id) => {
    try {
      const productId = id;

      const sendToBasket = await axios.post(sendTo, { productId });
      setItemSent(sendToBasket.msg);
    } catch (error) {
      error.response;

      setErrorInBasket({ response: error.response });
    }
  };

  return { itemSent, errorInBasket, sendToBasket, setErrorInBasket };
}
