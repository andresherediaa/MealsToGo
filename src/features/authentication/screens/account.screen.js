import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "./../components/account.styles";
import { Text } from "../../../components/typography/text.component";


export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title variant="label">Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          <Text variant="account">Login</Text>
        </AuthButton>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          <Text variant="account">Create an Account</Text>
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
