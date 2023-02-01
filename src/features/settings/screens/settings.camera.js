import React, { useState, useContext, useEffect } from "react";
import { Camera } from "expo-camera";
import { Button, TouchableOpacity, View } from "react-native";
import { CameraContainer, TouchCircle } from "../components/settings.styles";
import { CameraFront } from "./../components/settings.styles";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsCamera = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const { user } = useContext(AuthenticationContext);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <CameraContainer>
        <Text variant="caption">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </CameraContainer>
    );
  }

  const takePhoto = async (uid) => {
    try {
      const { uri } = await cameraRef.takePictureAsync();
      await AsyncStorage.setItem(`@photo-${uid}`, uri);
      navigation.goBack();
    } catch (e) {
      console.log("error storing", e);
    }
  };

  return (
    <CameraContainer>
      <CameraFront ref={(ref) => setCameraRef(ref)}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            takePhoto(user.uid);
          }}
        >
          <TouchCircle />
        </TouchableOpacity>
      </CameraFront>
    </CameraContainer>
  );
};
