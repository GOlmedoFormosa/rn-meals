import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { theme } from "./src/infraestructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
