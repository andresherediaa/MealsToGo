import React, { createContext, useEffect, useState, useContext } from "react";
import { restaurantsRequest, restaurantTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";
export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { keyword } = useContext(LocationContext);

  const retrieveRestaurants = (locationSearch) => {
    setLoading(true);
    setRestaurants([]);
    restaurantsRequest(locationSearch)
      .then(restaurantTransform)
      .then((results) => {
        setLoading(false);
        setRestaurants(results);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setRestaurants([]);
        setError(err);
      });
  };
  useEffect(() => {
    if (keyword) {
      const locationString = keyword;
      retrieveRestaurants(locationString);
    }
  }, [keyword]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        loading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
