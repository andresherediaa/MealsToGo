import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import { Platform } from "react-native";
import WebView from "react-native-webview";
import { Favourite } from "../favourites/favourite.component";

const Item = styled(View)`
  padding: 5px;
  max-width: 120px;
  align-items: center;
  height: 150px;
  justify-content: center;
`;

const CompactImage = styled(Image)`
  border-radius: 25%;
  width: 120px;
  margin-bottom: 5px;
  max-height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 25%;
  width: 120px;
  margin-bottom: 2px;
  max-height: 100px;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = Platform.OS === "android" ? CompactWebview : CompactImage;
  return (
    <Item>
      <Favourite restaurant={restaurant} />
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};
