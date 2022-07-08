import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationFormat } from "./locationServices";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [term, setTerm] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchTerm) => {
    setIsLoading(true);
    locationRequest(searchTerm?.toLowerCase())
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

  useEffect(() => {
    onSearch(term);
  }, [term]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        term,
        location,
        search: (searchTerm) => setTerm(searchTerm),
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
