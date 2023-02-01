import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantList } from "../../restaurants/components/list-restaurant.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
export const SettingsFavourites = ({navigation}) => {
  const { favourites, loading } = useContext(FavouritesContext);
  return (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetailed", { restaurant: item })
              }
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
