import React, {
  useState,
  createContext,
  // useContext,
  useEffect,
  // useMemo,
} from "react";

import { restaurantsRequest, restaurantsFormat } from "./restaurantsServices";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    retrieveRestaurants();
  }, []);
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
