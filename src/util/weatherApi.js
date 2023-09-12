//ec4e77eb45a78170f9ea4f3adc4e998d
//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 44.34;
const longitude = 10.99;
const APIkey = "ec4e77eb45a78170f9ea4f3adc4e998d";
export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};
export const parseWeatherData = (data) => {
  console.log(data);
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};
const response = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02n",
    },
  ],
  base: "stations",
  main: {
    temp: 66.38,
    feels_like: 65.68,
    temp_min: 61.61,
    temp_max: 69.21,
    pressure: 1015,
    humidity: 63,
    sea_level: 1015,
    grnd_level: 932,
  },
  visibility: 10000,
  wind: {
    speed: 6.78,
    deg: 208,
    gust: 9.82,
  },
  clouds: {
    all: 13,
  },
  dt: 1694549306,
  sys: {
    type: 2,
    id: 2044440,
    country: "IT",
    sunrise: 1694494265,
    sunset: 1694540052,
  },
  timezone: 7200,
  id: 3163858,
  name: "Zocca",
  cod: 200,
};
