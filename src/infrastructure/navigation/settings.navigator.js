import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "./../../features/settings/screens/settings.screen";
import { SettingsFavourites } from "./../../features/settings/screens/settings.favourites";
import { SettingsCamera } from "./../../features/settings/screens/settings.camera";
const SettingsStack = createStackNavigator();
export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <SettingsStack.Screen
        name="SettingsFavourites"
        component={SettingsFavourites}
      />
      <SettingsStack.Screen
        name="Camera"
        component={SettingsCamera}
      />
    </SettingsStack.Navigator>
  );
};
