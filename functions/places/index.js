const { mocks, addMockImage } = require("./mocks");
const url = require("url");
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
const functions = require("firebase-functions");
const axios = require("axios");

function addGoogleImage(restaurant) {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
    return restaurant;
  }

  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      functions.config().google.key
    }`,
  ];

  return restaurant;
}

module.exports.locationRequest = (request, response) => {
  const { location, mock } = url.parse(request.url, true).query;
  const locationIndex = location.toLowerCase().replace(/['"]+/g, "");
  if (mock === "true") {
    const { results } = mocks[locationIndex];
    if (results) {
      const mappedResults = addMockImage(results);
      return response.json(mappedResults);
    }
    return response.json([]);
  }
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&type=restaurant&key=${
        functions.config().google.key
      }`
    )
    .then((res) => {
      res.data.results = res.data.results.map((restaurant) =>
        addGoogleImage(restaurant)
      );
      return response.json(res.data.results);
    })
    .catch((e) => {
      response.status(400);
      return response.json({
        error: e.response.data.error_message,
      });
    });
};
