import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const defaultSpacerStyles = (theme, size) => `
  margin: ${size ? size + "px" : "0px"};
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const account = (theme) => `
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.text.inverse};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const title = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  account,
  title,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};

export const Spacer = styled.View`
  ${({ size, theme }) => defaultSpacerStyles(theme, size)}
`;
