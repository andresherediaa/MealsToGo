const { locations } = require("./location.mock");
const url = require("url");
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response) => {
  const { city, mock } = url.parse(request.url, true).query;
  const cityIndex = city.toLowerCase().replace(/['"]+/g, "");
  if (mock === "true") {
    const locationMock = locations[cityIndex];
    return response.json(locationMock);
  }
  client
    .geocode({
      params: {
        city: cityIndex,
        components: 'country:US',
        key: functions.config().google.key,
      },
      timeout: 2000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.json({
        error: e.response.data.error_message,
        city,
      });
    });
};
