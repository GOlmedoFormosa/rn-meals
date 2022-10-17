import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const AccountStack = createStackNavigator();

const MainScreen = () => (
  <View>
    <Text>Main</Text>
  </View>
);

const LoginScreen = () => (
  <View>
    <Text>Login</Text>
  </View>
);
export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Main" component={MainScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
    </AccountStack.Navigator>
  );
};
