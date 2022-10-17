import React from "react";
import { View, Text } from "react-native";

import { AccountBackground, AccountCover } from "./Account.styles";

export const MainScreen = () => (
  <AccountBackground>
    <View>
      <Text>Main</Text>
    </View>
    <AccountCover />
  </AccountBackground>
);
