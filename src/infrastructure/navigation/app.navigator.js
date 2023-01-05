import { Text } from "react-native";
import { SafeArea } from "./../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from './../../features/map/screens/map.screen';

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Maps: "md-map",
};
const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>settings screen</Text>
    </SafeArea>
  );
};
const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Maps"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
