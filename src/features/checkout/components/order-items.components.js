import React from "react";
import { List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { ItemContainer } from "./checkout.styles";

export const ListOrders = ({ cart }) => {
  return (
    <List.Section>
      {cart.map(({ item, price }, index) => (
        <ItemContainer key={index}>
          <Text variant="label">{item + "-" + price}</Text>
        </ItemContainer>
      ))}
    </List.Section>
  );
};
