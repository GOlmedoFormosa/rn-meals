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
  Title,
  ErrorContainer,
} from "./Account.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals</Title>
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
          onChangeText={(text) => setPassword(text)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry // hide text
          onChangeText={(text) => setRepeatedPassword(text)}
        />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />
        <AuthButton
          title="Login"
          icon="email"
          mode="contained"
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          Register
        </AuthButton>
        <Spacer size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
