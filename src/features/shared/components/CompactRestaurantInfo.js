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

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
