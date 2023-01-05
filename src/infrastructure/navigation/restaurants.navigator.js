import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "./../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailedScreen } from "./../../features/restaurants/screens/restaurant-detailed.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <RestaurantStack.Screen
        name="RestaurantScreen"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetailed"
        component={RestaurantDetailedScreen}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};
