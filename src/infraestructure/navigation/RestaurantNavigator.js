import "react-native-gesture-handler";

import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/RestaurantDetailsScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDeatils"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
