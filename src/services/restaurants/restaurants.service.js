import { mocks } from "./mocks";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    if (!mocks[location]) {
      reject("Error: Location Not found !");
    }
    resolve(mocks[location]);
  });
};

restaurantsRequest()
  .then((result) => {
    console.log("Results", result);
  })
  .catch((err) => {
    console.log("error", err);
  });
