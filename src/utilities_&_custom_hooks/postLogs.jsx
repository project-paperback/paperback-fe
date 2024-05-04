import axios from "axios";
import { useEffect, useState } from "react";

export function useLogIn(userEmail, userPassword) {
  const sendToAutehticate = { userEmail, userPassword };

  const logInReq = axios.post(
    "https://paperback-vy73.onrender.com/api/sign_in",
    sendToAutehticate
  );
  const userLogged = logInReq.loggedIn;
  return userLogged;
}
