import { View } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]} 0;
  align-items: center;
`;
