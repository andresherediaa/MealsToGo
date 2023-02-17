const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { locationRequest } = require("./places");
const { paymentRequest } = require("./pay");
const stripeClient = require("stripe")();

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  locationRequest(request, response);
});

exports.payment = functions.https.onRequest((request, response) => {
  paymentRequest(request, response, stripeClient);
});
