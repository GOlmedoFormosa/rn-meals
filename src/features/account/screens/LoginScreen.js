import React, { useState, useContext } from "react";

import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import { Spacer } from "../../../components/Spacer/SpacerComponent";
import { Text } from "../../../components/Typography/TypographyComponent";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "./Account.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry // hide text
          secure
          onChangeText={(text) => setPassword(text)}
        />
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large" />
        <AuthButton
          title="Login"
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
      </AccountContainer>
    </AccountBackground>
  );
};
AuthInput;
