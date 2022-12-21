import { StyleSheet, Platform } from "react-native";
const SafeAreaViewAndroid = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});

export { SafeAreaViewAndroid };
