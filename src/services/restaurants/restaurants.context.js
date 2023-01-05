import React, { createContext, useEffect, useState, useContext } from "react";
import { restaurantsRequest, restaurantTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";
export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationSearch) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(locationSearch)
        .then(restaurantTransform)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

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
