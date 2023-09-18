export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

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
