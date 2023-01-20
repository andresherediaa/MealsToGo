import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountCover,
  AuthButton,
  AuthInput,
  Loading,
  Title,
} from "../components/account.styles";
import { LoginContainer } from "../components/account.styles";
import { Spacer, Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const code = error ? error.code : "";
  return (
    <AccountBackground>
      <AccountCover />
      <Title variant="label">Meals To Go</Title>
      {isLoading ? (
        <Loading size="large"/>
      ) : (
        <LoginContainer>
          <AuthInput
            label={"E-mail"}
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email"
          />
          <Spacer size={7} />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(pwd) => setPassword(pwd)}
          />
          <Spacer size={7} />
          {code.length > 0 && <Text variant="error">Error: {code}</Text>}
          <Spacer size={7} />
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            <Text variant="account">Login</Text>
          </AuthButton>
        </LoginContainer>
      )}
    </AccountBackground>
  );
};
