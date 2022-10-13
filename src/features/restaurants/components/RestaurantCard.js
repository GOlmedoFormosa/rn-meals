import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/Spacer/SpacerComponent";
import { Text } from "../../../components/Typography/TypographyComponent";
import { Favourite } from "../../../features/shared/components/Favourite";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Card,
  CardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Icon,
  Address,
} from "./RestaurantCard.styles";

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
    placeId,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card elevation={5}>
      <Favourite restaurant={restaurant} />
      <CardCover key={name} source={{ uri: photos ? photos[0] : "" }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`start-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
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
