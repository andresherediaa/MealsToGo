import React, { useEffect, useState, createContext } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("Chicago");
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword) {
      return null;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((data) => {
        setIsLoading(false);
        setLocation(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        setLocation(null);
      });
  }, [keyword]);
  return (
    <LocationContext.Provider
      value={{
        loading,
        location,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
