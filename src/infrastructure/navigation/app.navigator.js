import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "./../../features/map/screens/map.screen";
import { RestaurantContextProvider } from "./../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "./../../services/location/location.context";
import { FavouritesContextProvider } from "./../../services/favourites/favourites.context";
import { SettingsNavigator } from "./settings.navigator";
import { CheckoutScreen } from "./../../features/checkout/screens/checkout.screen";
import { CheckoutContextProvider } from "../../services/checkout/checkout.context";
import { CartContextProvider } from "./../../services/cart/cart.context";
import { CheckoutNavigator } from "./checkout-navigator";

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Maps: "md-map",
  Checkout: "md-cart",
};
const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <CartContextProvider>
        <LocationContextProvider>
          <CheckoutContextProvider>
            <RestaurantContextProvider>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsNavigator}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Checkout"
                  component={CheckoutNavigator}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Maps"
                  component={MapScreen}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Settings"
                  component={SettingsNavigator}
                  options={{ headerShown: false }}
                />
              </Tab.Navigator>
            </RestaurantContextProvider>
          </CheckoutContextProvider>
        </LocationContextProvider>
      </CartContextProvider>
    </FavouritesContextProvider>
  );
};
