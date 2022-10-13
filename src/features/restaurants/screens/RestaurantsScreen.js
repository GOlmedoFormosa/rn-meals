import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";

// common components
import { Container } from "../../../components/Container/ContainerComponent";
import { Spacer } from "../../../components/Spacer/SpacerComponent";

// restaurant components
import { RestaurantCard } from "../components/RestaurantCard";
import { Search } from "../components/Search";

// services
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext";
import { FavouritesContext } from "../../../services/favourites/favouritesContext";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoaderContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
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
