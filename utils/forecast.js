const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/cc858d8e16580a0ed61d90785b06186d/" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Not connected weather service", undefined);
    } else if (body.error) {
      callback("unable to find a location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degrees out. There is a " +
          body.currently.precipProbability +
          " % chance to rain."
      );
    }
  });
};

module.exports = forecast;
