import React, { useState, useContext, useEffect } from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import styled from "styled-components/native";
import { CheckoutContext } from "../../../services/checkout/checkout.context";
import { CartContext } from "./../../../services/cart/cart.context";
import { PayCartButton } from "./checkout.styles";

const CreditCardInputContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CreditCardInput = ({ name, navigation }) => {
  const [isIncomplete, setIsIncomplete] = useState(false);
  const {
    setCardInfoData,
    token,
    paymentRequestContext,
    setToken,
    error,
    orderStatus,
  } = useContext(CheckoutContext);
  const [cardInfo, setCardInfo] = useState({});
  const { total } = useContext(CartContext);

  const onChangeForm = (formData) => {
    const { valid, values } = formData;
    if (valid) {
      const cardInfo = {
        number: values.number,
        exp_month: values.expiry.split("/")[0],
        exp_year: values.expiry.split("/")[1],
        cvc: values.cvc,
        name,
      };
      setIsIncomplete(valid);
      setCardInfoData(cardInfo);
      setCardInfo(cardInfo);
    }
  };

  const checkAndGetToken = async () => {
    if (
      isIncomplete &&
      token &&
      token.id !== undefined &&
      total &&
      name.length > 0
    ) {
      await paymentRequestContext(token.id, total, name);
    }
  };

  return (
    <CreditCardInputContainer>
      <LiteCreditCardInput onChange={onChangeForm} />
      <PayCartButton onPress={() => checkAndGetToken()}>Pay</PayCartButton>
    </CreditCardInputContainer>
  );
};
