import React, { useState, createContext } from "react";
import { locationRequest, locationFormat } from "./locationServices";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword) {
      return;
    }
    locationRequest(searchKeyword?.toLowerCase())
      .then(locationFormat)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  // useEffect(() => {
  //   onSearch(keyword);
  // }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        keyword,
        location,
        search: onSearch, // (searchTerm) => setTerm(searchTerm),
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
