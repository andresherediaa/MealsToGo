import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Maps: "md-map",
};
const MapsScreen = () => {
  return (
    <SafeArea>
      <Text>Mpas screen</Text>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>settings screen</Text>
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export default function App() {
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Maps" component={MapsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
