import camelize from "camelize";
import { host, isLocal } from "../../utils/env";
export const restaurantsRequest = async (location) => {
  try {
    const data = await fetch(
      `${host}/placesNearby?location=${location}&mock=${isLocal}`
    );
    const restaurants = await data.json();
    return restaurants;
  } catch (error) {
    return error;
  }
};

export const restaurantTransform = (results) => {
  const newResult = camelize(results);
  return newResult;
};
