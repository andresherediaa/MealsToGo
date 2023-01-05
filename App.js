import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";

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
          <Navigation />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
