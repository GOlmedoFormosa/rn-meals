import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { RestaurantCard } from "../../restaurants/components/RestaurantCard";

import { Container } from "../../../components/Container/ContainerComponent";
import { Text } from "../../../components/Typography/TypographyComponent";
import { Spacer } from "../../../components/Spacer/SpacerComponent";

import { FavouritesContext } from "../../../services/favourites/favouritesContext";
import { RestaurantList } from "../../shared/components/RestaurantList";

const NoFavouritesArea = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return !favourites.length ? (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  ) : (
    <Container>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDeatils", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};
