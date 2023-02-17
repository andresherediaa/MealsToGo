import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutErrorScreen } from "./../../features/checkout/screens/checkout-error.screen";
import { CheckoutSuccessScreen } from "./../../features/checkout/screens/checkout-success.screen";
const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <CheckoutStack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      <CheckoutStack.Screen
        name="CheckoutSuccessScreen"
        component={CheckoutSuccessScreen}
        options={{ headerShown: false }}
      />
      <CheckoutStack.Screen
        name="CheckoutErrorScreen"
        component={CheckoutErrorScreen}
        options={{ headerShown: false }}
      />
    </CheckoutStack.Navigator>
  );
};
