import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator } from "react-native-paper";
export const AuthInput = styled(TextInput)`
  height: 60px;
  width: 300px;
`;

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/background.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  justify-content: space-between;
  height: 170px;
`;

export const AuthButton = styled(Button)`
  justify-content: center;
  align-items: center;
  padding: 6px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.primary};
  border-radius: 0;
  color: white;
`;

export const LoginContainer = styled(AccountContainer)`
  height: auto;
`;

export const Title = styled(Text)`
  font-size: 25px;
  margin-bottom: 20px;
`
export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;