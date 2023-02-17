import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "./src/infrastructure/navigation";
import { firebaseApp } from "./src/services/authentication/config";
import { getAuth } from "firebase/auth";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const auth = getAuth(firebaseApp);
//init firebase

const App = () => {
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
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
};

export default App;
