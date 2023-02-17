import React, { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "../cart/cart.context";
import { checkoutRequest, paymentRequest } from "./checkout.service";

export const CheckoutContext = createContext();
export const CheckoutContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [cardInfo, setCardInfo] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderStatus, setOrderStatus] = useState("");
  const { clearCart } = useContext(CartContext);

  const getToken = async () => {
    const token = await checkoutRequest(cardInfo);
    setToken(token);
  };
  useEffect(() => {
    getToken(cardInfo);
  }, [cardInfo]);

  const paymentRequestContext = async (token, amount, name) => {
    setIsLoading(true);
    try {
      const dataPayment = await paymentRequest(token, amount, name);
      const { statusCode, status } = dataPayment;
      if (statusCode && statusCode >= 400) {
        throw new Error(JSON.stringify(dataPayment.raw.message));
      } else if (status && status === "succeeded") {
        clearCart();
        setToken(null);
        setIsLoading(false);
        setOrderStatus("succeeded");
      }
    } catch (error) {
      setIsLoading(false);
      setToken(null);
      clearCart();
      setOrderStatus("");
      setError(error);
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        token,
        setCardInfoData: setCardInfo,
        loading,
        error,
        orderStatus,
        paymentRequestContext,
        getToken,
        setOrderStatus,
        setToken,
        setError
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
