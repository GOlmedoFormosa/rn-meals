import React, { useContext } from "react";
import { View, Button } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authenticationContext";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View>
      <Button title="logout" onPress={() => onLogout()} />
    </View>
  );
};
