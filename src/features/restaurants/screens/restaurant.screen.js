import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native";
const SearchContainer = styled(View)`
  padding: 8px;
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8 },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, loading, error } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#d90429" />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
