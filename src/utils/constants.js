export const weatherOptions = [
  {
    url: require("../images/day/SunnyDay.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/RainyDay.svg").default,
    day: true,
    type: "rainy",
  },
  {
    url: require("../images/day/CloudyDay.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/day/FoggyDay.svg").default,
    day: true,
    type: "foggy",
  },
  {
    url: require("../images/day/SnowyDay.svg").default,
    day: true,
    type: "snowy",
  },
  {
    url: require("../images/day/StormyDay.svg").default,
    day: true,
    type: "stormy",
  },

  {
    url: require("../images/night/SunnyNight.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../images/night/RainyNight.svg").default,
    day: false,
    type: "rainy",
  },
  {
    url: require("../images/night/CloudyNight.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/FoggyNight.svg").default,
    day: false,
    type: "foggy",
  },
  {
    url: require("../images/night/SnowyNight.svg").default,
    day: false,
    type: "snowy",
  },
  {
    url: require("../images/night/StormyNight.svg").default,
    day: false,
    type: "stormy",
  },
];
// constants.js
export const latitude = 44.34;
export const longitude = 10.99;
export const APIkey = "ec4e77eb45a78170f9ea4f3adc4e998d";
export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
