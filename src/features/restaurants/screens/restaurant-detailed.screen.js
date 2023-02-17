import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { AccordionList } from "./../components/accordion-list.component";
import styled from "styled-components/native";
import { CartContext } from "../../../services/cart/cart.context";
import { OrderSection } from "../components/restaurant-info-card.styles";
import { OrderButton } from "./../components/restaurant-info-card.styles";
import { CheckoutContext } from "./../../../services/checkout/checkout.context";

const ScrollViewContainer = styled(ScrollView).attrs({
  contentContainerStyle: { padding: 8, justifyConytent: "flex-start" },
})``;

export const RestaurantDetailedScreen = ({ navigation, route }) => {
  const { restaurant } = route.params;
  const {
    cart,
    restaurant: restaurantCart,
    addtoCart,
    clearCart,
  } = useContext(CartContext);
  const { setOrderStatus, setError } = useContext(CheckoutContext);
  const categories = {
    Breakfast: {
      icon: "bread-slice",
      items: ["Eggs Benedict", "Classic Breakfast"],
    },
    Lunch: {
      icon: "hamburger",
      items: ["Burger w/ Fries", "Mushroom Soup", "Mushroom Soup"],
    },
    Dinner: {
      icon: "food-variant",
      items: [
        "Spaghetti Bolognese",
        "Veal Cutlet with Chicken Mushroom Rotini",
        "Steak Frites",
      ],
    },
    Drinks: {
      icon: "cup",
      items: ["Cofee", "Te", "Modelo", "Coke", "Fanta"],
    },
  };
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollViewContainer>
        {Object.keys(categories).map((keyName) => {
          return (
            <AccordionList
              key={keyName}
              item={categories[keyName]}
              title={keyName}
            />
          );
        })}
      </ScrollViewContainer>

      <OrderSection>
        <OrderButton
          icon="cart-outline"
          mode="contained"
          onPress={() => {
            addtoCart({ item: "Special offer", price: "1299" }, restaurant);
            setOrderStatus("");
            setError(null);
            navigation.navigate("Checkout", { screen: "CheckoutScreen" });
          }}
        >
          ORDER SPECIAL ONLY 12.99!
        </OrderButton>
      </OrderSection>
    </SafeArea>
  );
};
