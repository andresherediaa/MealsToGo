import React from "react";
import Start from "../../../../assets/start";
import Open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
  ImageContainer,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
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
              <Spacer $position="right" $size="medium">
                <Text variant="error">CLOSED TEMPORARILY</Text>
              </Spacer>
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
