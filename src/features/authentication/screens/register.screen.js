import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";
import { LoginContainer } from "../components/account.styles";
import { Spacer, Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = () => {
  const { onRegister, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const code = error ? error.code : "";
  return (
    <AccountBackground>
      <AccountCover />
      <Title variant="label">Meals To Go</Title>
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
        <AuthInput
          label="Repeat Password"
          value={repeatPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(pwd) => setRepeatPassword(pwd)}
        />
        <Spacer size={7} />
        {code.length > 0 && <Text variant="error">Error: {code}</Text>}
        <Spacer size={7} />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => onRegister(email, password, repeatPassword)}
        >
          <Text variant="account">Register</Text>
        </AuthButton>
      </LoginContainer>
    </AccountBackground>
  );
};
