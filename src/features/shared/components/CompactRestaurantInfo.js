import React from "react";
import { View, Image as RNImage, Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

import { Text } from "../../../components/Typography/TypographyComponent";

const CompactImage = styled(RNImage)`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  height: 120px;
  width: 120px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  // the is map is because we have this issue in android just when we are in the map
  // for the favourites bar it should use the CompactImage all the time.
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
