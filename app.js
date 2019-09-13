const geoCode = require("../weather-app/utils/geoCode");
const forecast = require("../weather-app/utils/forecast");

const address = process.argv[2];

geoCode(address, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(forecastData);
  });
});
