import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { AccountScreen } from "../../features/authentication/screens/account.screen";
import { LoginScreen } from "../../features/authentication/screens/login.screen";
import { RegisterScreen } from "../../features/authentication/screens/register.screen";

const AccountStack = createStackNavigator();
export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
