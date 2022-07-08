import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";

// restaurant components
import { Container } from "../../../components/Container/ContainerComponent";
import { Spacer } from "../../../components/Spacer/SpacerComponent";
import { RestaurantCard } from "../components/RestaurantCard";
import { Search } from "../components/Search";
// services
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoaderContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  zindex: 10;
`;

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return (
    <Container>
      {isLoading && (
        <LoaderContainer>
          <Loader size={50} animating={true} color={Colors.blue300} />
        </LoaderContainer>
      )}
      <Search />
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
