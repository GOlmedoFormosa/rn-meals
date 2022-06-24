import React from "react";
import { Card as RNPaperCard } from "react-native-paper";
import { Text } from "react-native";
import styled from "styled-components";

const Card = styled(RNPaperCard)`
  backgroundcolor: white;
`;

const CardCover = styled(RNPaperCard.Cover)`
  backgroundcolor: white;
  padding: 20px;
`;

const Title = styled(Text)`
  color: red;
  padding: 16px;
`;

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    // icon,
    photos = [
      "https://i.pinimg.com/originals/e3/2d/67/e32d67b771afab60e846a71dbab5b44c.jpg",
    ],
    // address = "100 some random street",
    // isOpenNow = true,
    // rating = 4,
    // isClosedTemprarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <CardCover key={name} source={{ uri: photos ? photos[0] : "" }} />
      <Title>{name}</Title>
    </Card>
  );
};
