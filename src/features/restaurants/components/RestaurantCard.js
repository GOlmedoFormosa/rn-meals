import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = ({ restaurant = {} }) => {
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{ uri: photos ? photos[0] : "" }}
      />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
