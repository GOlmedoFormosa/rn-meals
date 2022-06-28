import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionsVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (theme, position, size) => {
  const property = positionsVariant[position];
  const sizeIndex = sizesVariant[size];
  const value = theme.space[sizeIndex];
  return `${property}: ${value}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(theme, position, size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
