import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CardIconContainer, CartIcon } from "./../components/checkout.styles";
import { Text } from "../../../components/typography/text.component";
export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CardIconContainer>
        <Text>Order Process Success!!!</Text>
      </CardIconContainer>
    </SafeArea>
  );
};
