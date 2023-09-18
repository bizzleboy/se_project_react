import React from "react";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const matchedWeatherOption = weatherOptions.find(
    (option) => option.day === day && option.type === type
  );

  const imageSrcUrl = matchedWeatherOption ? matchedWeatherOption.url : "";

  return (
    <section id="weather" className="weather">
      <div className="weather__info">{weatherTemp}F</div>
      {imageSrcUrl && (
        <img
          src={imageSrcUrl}
          className="weather__image"
          alt={`Weather type: ${type}`}
        />
      )}
    </section>
  );
};

export default WeatherCard;
