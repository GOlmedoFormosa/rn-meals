import React from "react";
import Lottie from "lottie-react-native";

import { Spacer } from "../../../components/Spacer/SpacerComponent";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "./Account.styles";

export const MainScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <AnimationWrapper>
      <Lottie
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/watermelon.json")}
      />
    </AnimationWrapper>
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
