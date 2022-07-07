import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

// restaurant components
import { Container } from "../../../components/Container/ContainerComponent";
import { Spacer } from "../../../components/Spacer/SpacerComponent";
import { RestaurantCard } from "../components/RestaurantCard";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};
