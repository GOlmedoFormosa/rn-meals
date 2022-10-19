import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/SettingsScreen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      {/* <SettingsStack.Screen name="Favourites" component={FavouritesScreen} /> */}
    </SettingsStack.Navigator>
  );
};
