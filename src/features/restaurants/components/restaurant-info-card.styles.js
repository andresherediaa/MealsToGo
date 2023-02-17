import styled from "styled-components/native";
import { Button, Card } from "react-native-paper";
import { View } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: flex-start;
  z-index: 1;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const ImageContainer = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;

export const OrderSection = styled.View`
  margin: 9% auto 3%;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const OrderButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  textColor: colors.text.inverse,
})`
  width: 80%;
  padding: 3px 2px;
  border-radius: 0;
`;
