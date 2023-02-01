import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { List, Avatar, Button } from "react-native-paper";
import { Camera, CameraType } from "expo-camera";
import { theme } from './../../../infrastructure/theme/index';
import { colors } from './../../../infrastructure/theme/colors';

export const SettingsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;
export const LogoutButton = styled(Button)`
  justify-content: center;
  align-items: center;
  padding: 6px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.brand.muted};
  width: 50%;
  border-radius: 5px;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const ListContainer = styled(List.Section)`
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
`;

export const AvatarContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AvatarIcon = styled(Avatar.Icon)`
  margin-bottom: 10px;
`;
export const AvatarPhoto = styled(Avatar.Image)`
  margin-bottom: 10px;
`;

//Camera Styles
export const CameraContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
export const CameraFront = styled(Camera).attrs({
  type: CameraType.front,
})`
  flex: 1;
`;

export const TouchCircle = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50;
  background-color: transparent;
  border: ${(props) => props.theme.colors.brand.primary} solid 4px;
  position: absolute;
  bottom: 30px;
`;
