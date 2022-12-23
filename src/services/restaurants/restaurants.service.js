import { mocks } from "./mocks";
import camelize from "camelize";
import { mockImages } from "./mocks";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    if (!mocks[location]) {
      reject("Error: Location Not found !");
    }
    resolve(mocks[location]);
  });
};

export const restaurantTransform = ({ results }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  const newResult = camelize(mappedResults);
  return newResult;
};
