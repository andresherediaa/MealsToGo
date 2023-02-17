import camelize from "camelize";
import { host, isLocal } from "./../../utils/env";
export const locationRequest = async (searchTerm) => {
  try {
    const response = await fetch(
      `${host}/geocode?city=${searchTerm}&mock=${isLocal}`
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error;
  }
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
