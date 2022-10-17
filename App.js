import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { theme } from "./src/infraestructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurantsContext";
import { LocationContextProvider } from "./src/services/location/locationContext";
import { FavouritesContextProvider } from "./src/services/favourites/favouritesContext";
import { AuthenticationContextProvider } from "./src/services/authentication/authenticationContext";
import { Navigator } from "./src/infraestructure/navigation";

// const firebaseConfig = {
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appId: "app-id",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCAiICZ64wpPY1OCBM76ryD9mqMD2cuVQI",
  authDomain: "gao-restaurant-self-service.firebaseapp.com",
  projectId: "gao-restaurant-self-service",
  storageBucket: "gao-restaurant-self-service.appspot.com",
  messagingSenderId: "1006499699291",
  appId: "1:1006499699291:web:9176dd02fd5f2b4b92fd7e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigator />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
