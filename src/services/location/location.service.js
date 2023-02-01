import camelize from "camelize";
import { GEOCODE } from "@env";
export const locationRequest = async (searchTerm) => {
  try {
    const response = await fetch(`${GEOCODE}${searchTerm}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error;
  }
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry } = formattedResponse.results[0];
  const { viewport } = geometry;
  const { lng, lat } = geometry.location;
  return { lng, lat, viewport };
};
