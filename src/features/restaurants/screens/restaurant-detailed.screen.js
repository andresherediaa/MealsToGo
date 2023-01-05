import React from "react";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { AccordionList } from "./../components/accordion-list.component";
import styled from "styled-components/native";

const ScrollViewContainer = styled(ScrollView).attrs({
  contentContainerStyle: { padding: 8, justifyConytent: 'flex-start'},
})``;

export const RestaurantDetailedScreen = ({ navigation, route }) => {
  const { restaurant } = route.params;
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
    </SafeArea>
  );
};
