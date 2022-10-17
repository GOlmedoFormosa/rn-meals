import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../../features/account/screens/MainScreen";
import { LoginScreen } from "../../features/account/screens/LoginScreen";
import { RegisterScreen } from "../../features/account/screens/RegisterScreen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Main" component={MainScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
