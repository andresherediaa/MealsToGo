import React, { useContext, useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../components/list-restaurant.component";
import { Text } from "../../../components/typography/text.component";
import { LocationContext } from "./../../../services/location/location.context";
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ErrorContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, loading, error } = useContext(RestaurantContext);
  const { error: errorLocation } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <Search
        isToggleFavourites={isToggled}
        onToggleFavourites={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigation={navigation.navigate}
        />
      )}
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#d90429" />
        </LoadingContainer>
      )}

      {error || errorLocation || !Array.isArray(restaurants) ? (
        <ErrorContainer>
          <Text variant="error">Problems getting Location Info</Text>
        </ErrorContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetailed", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
