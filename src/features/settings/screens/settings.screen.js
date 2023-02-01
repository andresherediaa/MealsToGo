import React, { useContext, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  SettingsContainer,
  Loading,
  ListContainer,
  SettingsItem,
  AvatarContainer,
  AvatarIcon,
  AvatarPhoto,
} from "./../components/settings.styles";
import { List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, isLoading, user } = useContext(AuthenticationContext);
  const [photoUri, setPhotoUri] = useState(null);

  const loadProfilePhoto = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@photo-${uid}`);
      if (value !== null) {
        setPhotoUri(value);
      }
    } catch (e) {
      console.log("error loading photo uri", e);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadProfilePhoto(user.uid);
    }, [user])
  );
  return (
    <SafeArea>
      <SettingsContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <AvatarContainer>
            {!photoUri && (
              <AvatarIcon size={180} icon="human" backgroundColor="#2182BD" />
            )}
            {photoUri && (
              <AvatarPhoto
                size={180}
                source={{ uri: photoUri }}
                backgroundColor="#2182BD"
              />
            )}

            <Text variant="label">{user.email}</Text>
          </AvatarContainer>
        </TouchableOpacity>

        {isLoading ? (
          <Loading size="large" />
        ) : (
          <ListContainer>
            <SettingsItem
              title="Favourites"
              description="View your favourites"
              left={(props) => (
                <List.Icon {...props} color="black" icon="heart" />
              )}
              onPress={() => navigation.navigate("SettingsFavourites")}
            />
            <SettingsItem
              title="Logout"
              left={(props) => (
                <List.Icon {...props} color="black" icon="door" />
              )}
              onPress={onLogout}
            />
          </ListContainer>
        )}
      </SettingsContainer>
    </SafeArea>
  );
};
