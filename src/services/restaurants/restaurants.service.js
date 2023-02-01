import camelize from "camelize";
import { PLACES_NEARBY } from "@env";
export const restaurantsRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  try {
    const data = await fetch(`${PLACES_NEARBY}${location}`);
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
