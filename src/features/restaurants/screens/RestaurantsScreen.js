import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

// restaurant components
import { RestaurantCard } from "../components/RestaurantCard";

const Container = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantScreen = () => {
  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ListContainer>
        <RestaurantCard />
      </ListContainer>
    </Container>
  );
};
