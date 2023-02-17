import { host, stripe_key } from "./../../utils/env";
import createStripe from "stripe-client";

const stripe = createStripe(stripe_key);
export const checkoutRequest = async (card) => {
  try {
    const cardToken = await stripe.createToken({ card });
    return cardToken;
  } catch (error) {
    return error;
  }
};

export const paymentRequest = async (token, amount, name) => {
  try {
    const payment = await fetch(`${host}/payment`, {
      body: JSON.stringify({
        token,
        name,
        amount,
      }),
      method: "POST",
    });
    const dataPayment = await payment.json();
    return dataPayment;
  } catch (error) {
    return error;
  }
};
