const { mocks, addMockImage } = require("./mocks");
const url = require("url");

module.exports.locationRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;
  const { results } = mocks[location.toLowerCase().replace(/['"]+/g, "")];
  const mappedResults = addMockImage(results);
  response.json(mappedResults);
};
