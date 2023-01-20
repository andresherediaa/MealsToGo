import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  SettingsContainer,
  Loading,
  ListContainer,
  SettingsItem,
  AvatarContainer,
  AvatarIcon
} from "./../components/settings.styles";
import { List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const SettingsScreen = ({navigation}) => {
  const { onLogout, isLoading, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <SettingsContainer>
        <AvatarContainer>
          <AvatarIcon size={150} icon="human" backgroundColor="#2182BD" />
          <Text variant="label">{user.email}</Text>
        </AvatarContainer>
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
