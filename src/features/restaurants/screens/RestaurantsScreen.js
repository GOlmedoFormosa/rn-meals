import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

// restaurant components
import { RestaurantCard } from "../components/RestaurantCard";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listContainer}>
        <RestaurantCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
