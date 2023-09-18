//ec4e77eb45a78170f9ea4f3adc4e998d
//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

import { latitude, longitude, APIkey, BASE_URL } from "./constants";

export const getForecastWeather = () => {
  return fetch(
    `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
};

export const parseWeatherData = (data) => {
  console.log(data);
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};
