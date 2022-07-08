import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  // useMemo,
} from "react";
import { LocationContext } from "../location/locationContext";

import { restaurantsRequest, restaurantsFormat } from "./restaurantsServices";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (currentLocation) => {
    setRestaurants([]);
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(currentLocation)
        .then(restaurantsFormat)
        .then((res) => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationStr = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationStr);
    }
  }, [location]);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
