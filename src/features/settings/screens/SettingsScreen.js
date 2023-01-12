import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import { Container } from "../../../components/Container/ContainerComponent";
import { Spacer } from "../../../components/Spacer/SpacerComponent";
import { SettingsItem, AvatarContainer } from "./SettingsScreen.styles";
import { Text } from "../../../components/Typography/TypographyComponent";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <AvatarContainer>
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          <Spacer position="top" size="large">
            <Text variant="caption">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
      </TouchableOpacity>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </Container>
  );
};
