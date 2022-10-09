import "react-native-gesture-handler";

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";

const RestaurantStack = createStackNavigator();
const TestScreen = () => <></>;

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen name="Deatils" component={TestScreen} />
    </RestaurantStack.Navigator>
  );
};
