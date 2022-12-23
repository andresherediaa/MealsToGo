import styled from "styled-components/native";
import { css } from "styled-components/native";
import { View } from "react-native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};
const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};
export const Spacer = styled.View`
  ${(props) => {
    return css`
      ${positionVariant[props.$position]}:${props.theme.space[
        sizeVariant[props.$size]
      ]}
    `;
  }}
`;
