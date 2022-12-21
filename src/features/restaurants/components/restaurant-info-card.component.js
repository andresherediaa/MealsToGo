import React from "react";
import Start from "../../../../assets/start";
import Open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
  ImageContainer,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant Pepito",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.vox-cdn.com/thumbor/HmsSKbk9Khv2MoO6j4rcqnWZVag=/0x0:5996x4003/620x465/filters:focal(1003x1633:1961x2591):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59732085/2021_03_23_Merois_008.12.jpg",
    ],
    address = "Some ramfom address",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((start, startIndex) => (
              <Start width={20} height={20} key={startIndex} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && <Open width={20} height={20} />}
            <ImageContainer source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
