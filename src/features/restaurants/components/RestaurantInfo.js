import React from "react";
import { View, Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://i.pinimg.com/originals/e3/2d/67/e32d67b771afab60e846a71dbab5b44c.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemprarily,
  } = restaurant;
  return (
    <View>
      <Text>Restaurant Info component</Text>
    </View>
  );
};
