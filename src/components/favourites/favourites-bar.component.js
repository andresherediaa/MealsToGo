import React from "react";
import { View, ScrollView } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";

const FavouritesWrapped = styled(View)`
  padding: 10px;
`;

const CompactRestaurantInfoWrapper = styled(TouchableOpacity)`
  margin-right: 15px;
`;
export const FavouritesBar = ({ favourites, onNavigation }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapped>
      <Text variant="caption">Favoritos</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((favourite) => (
          <CompactRestaurantInfoWrapper
            onPress={() =>
              onNavigation("RestaurantDetailed", { restaurant: favourite })
            }
            key={favourite.placeId}
          >
            <CompactRestaurantInfo restaurant={favourite} />
          </CompactRestaurantInfoWrapper>
        ))}
      </ScrollView>
    </FavouritesWrapped>
  );
};
