import { View } from "react-native";
import styled from "styled-components/native";

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

export const Spacer = styled(View)`
  ${({ theme, position, size }) => getVariant(theme, position, size)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
