import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurantsContext";
import { LocationContextProvider } from "../../services/location/locationContext";
import { FavouritesContextProvider } from "../../services/favourites/favouritesContext";

import { RestaurantNavigator } from "./RestaurantNavigator";
import { SettingsNavigator } from "./SettingsNavigator";
import { MapScreen } from "../../features/map/screens/MapScreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
