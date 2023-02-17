import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CardIconContainer, CartIcon } from "./../components/checkout.styles";
import { Text } from "../../../components/typography/text.component";
export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CardIconContainer>
        <Text>{error.toString()}</Text>
      </CardIconContainer>
    </SafeArea>
  );
};
