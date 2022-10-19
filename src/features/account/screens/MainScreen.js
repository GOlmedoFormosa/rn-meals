import React from "react";

import { Spacer } from "../../../components/Spacer/SpacerComponent";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "./Account.styles";

export const MainScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <Title>Meals</Title>
    <AccountContainer>
      <AuthButton
        title="Login"
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer size="large" />
      <AuthButton
        title="Register"
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </AuthButton>
      <Spacer />
    </AccountContainer>
  </AccountBackground>
);
