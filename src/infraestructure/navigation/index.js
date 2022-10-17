import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationContext } from "../../services/authentication/authenticationContext";
import { AppNavigator } from "./AppNavigator";
import { AccountNavigator } from "./AccountNavigator";

export const Navigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
