const WeatherOptions = [
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

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = WeatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section id="weather" className="weather">
      <div className="weather__info">{weatherTemp}F</div>

      <img src={imageSrcUrl} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
