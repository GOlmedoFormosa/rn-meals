import React from "react";

// components
import { Container } from "../../../components/Container/ContainerComponent";

// restaurant components
import { RestaurantDetailsCard } from "../components/RestaurantDetailsCard";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <Container>
      <RestaurantDetailsCard restaurant={restaurant} />
    </Container>
  );
};
