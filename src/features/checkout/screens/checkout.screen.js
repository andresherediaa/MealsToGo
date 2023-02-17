import React, { useContext, useState, useEffect } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CardIconContainer,
  CartIcon,
  ClearCartButton,
  InputNameContainer,
  PaymentProcessing,
  SummaryContainer,
} from "./../components/checkout.styles";
import { Text } from "../../../components/typography/text.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { ScrollView } from "react-native";
import { ListOrders } from "../components/order-items.components";
import { CheckoutContext } from "./../../../services/checkout/checkout.context";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, total, clearCart } = useContext(CartContext);
  const { orderStatus, loading, error } = useContext(CheckoutContext);
  const [name, setName] = useState("");

  useEffect(() => {
    if (orderStatus === "succeeded") {
      navigation.navigate("CheckoutSuccessScreen");
    }
    if (error !== null) {
      navigation.navigate("CheckoutErrorScreen", { error });
    }
  }, [error, orderStatus]);

  if (loading) {
    return <PaymentProcessing />;
  }

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CardIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your Cart is Empty !!</Text>
        </CardIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <SummaryContainer>
          <Text>Your Order</Text>
          <ListOrders cart={cart} />
          <Text>Total: {total} </Text>
        </SummaryContainer>
        <InputNameContainer
          label="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {name.length > 0 && (
          <CreditCardInput name={name} navigation={navigation} />
        )}
        <ClearCartButton mode="contained" onPress={() => clearCart()}>
          CLEAR CART
        </ClearCartButton>
      </ScrollView>
    </SafeArea>
  );
};
