import React, { useContext, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";

// restaurant components
import { Search } from "../components/Search";
import { FavouritesBar } from "../components/FavouritesBar";
import { RestaurantCard } from "../components/RestaurantCard";

// common components
import { Container } from "../../../components/Container/ContainerComponent";
import { Spacer } from "../../../components/Spacer/SpacerComponent";
// animations
import { FadeInView } from "../../../components/Animations/FadeAnimation";

// shared components
import { RestaurantList } from "../../shared/components/RestaurantList";

// services
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext";
import { FavouritesContext } from "../../../services/favourites/favouritesContext";

const LoaderContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  return (
    <Container>
      {isLoading && (
        <LoaderContainer>
          <Loader size={50} animating={true} color={Colors.blue300} />
        </LoaderContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          goToDetails={(restaurant) =>
            navigation.navigate("RestaurantDeatils", {
              restaurant,
            })
          }
        />
      )}

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
              <FadeInView>
                <RestaurantCard restaurant={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};
