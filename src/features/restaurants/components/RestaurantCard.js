import React from "react";
import { Card as RNPaperCard } from "react-native-paper";
import { View, Image } from "react-native";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/Spacer/SpacerComponent";
import { Text } from "../../../components/Typography/TypographyComponent";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

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

const Section = styled(View)`
  align-items: center;
  flex-direction: row;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemprarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card elevation={5}>
      <CardCover key={name} source={{ uri: photos ? photos[0] : "" }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemprarily && (
              <Text variant="error">CLOSED TEMPORARLY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
