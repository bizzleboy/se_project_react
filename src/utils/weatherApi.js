import { latitude, longitude, APIkey, BASE_URL } from "./constants";
import { checkResponse } from "./api"; // Import the checkResponse function here

export const getForecastWeather = () => {
  return fetch(
    `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse); // Use the imported function here
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return weather;
};
