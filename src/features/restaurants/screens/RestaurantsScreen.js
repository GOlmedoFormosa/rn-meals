import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

// restaurant components
import { Container } from "../../../components/Container/ContainerComponent";
import { Spacer } from "../../../components/Spacer/SpacerComponent";
import { RestaurantCard } from "../components/RestaurantCard";

import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};
