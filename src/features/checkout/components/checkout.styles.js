import styled from "styled-components/native";
import {
  Avatar,
  Button,
  TextInput,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";
import { colors } from "./../../../infrastructure/theme/colors";

export const CardIconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  margin-bottom: 20px;
`;

export const SummaryContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding: 20px 15px;
`;

export const ItemContainer = styled.View`
  padding: 10px 0;
`;

export const TotalContainer = styled.View``;

export const InputNameContainer = styled(TextInput)``;

export const ClearCartButton = styled(Button)`
  border-radius: 0;
  background-color: ${(props) => props.theme.colors.ui.error};
  width: 80%;
  align-self: center;
  margin-top: 12px;
`;

export const PayCartButton = styled(ClearCartButton).attrs({
  textColor: colors.text.inverse,
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 116,
  color: MD2Colors.red800,
})`
  flex: 1;
  position: absolute;
  justify-content: center;
  left: 35%;
  top: 50%;
`;
