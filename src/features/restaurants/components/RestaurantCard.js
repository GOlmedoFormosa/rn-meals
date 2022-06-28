import React from "react";
import { Card as RNPaperCard } from "react-native-paper";
import { Text, View } from "react-native";
import styled from "styled-components";

const Card = styled(RNPaperCard)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(RNPaperCard.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    // icon,
    photos = [
      "https://i.pinimg.com/originals/e3/2d/67/e32d67b771afab60e846a71dbab5b44c.jpg",
    ],
    address = "100 some random street",
    // isOpenNow = true,
    // rating = 4,
    // isClosedTemprarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <CardCover key={name} source={{ uri: photos ? photos[0] : "" }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
