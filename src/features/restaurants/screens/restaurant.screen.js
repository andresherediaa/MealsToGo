import React, { useContext } from "react";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native";
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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, loading } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <Search />
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#d90429" />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetailed", {restaurant: item })}
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
