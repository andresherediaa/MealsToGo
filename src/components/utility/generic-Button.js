import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const GenericButton = styled(Button)`
  justify-content: center;
  align-items: center;
  padding: 6px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.primary};
  border-radius: 5px;
`;
