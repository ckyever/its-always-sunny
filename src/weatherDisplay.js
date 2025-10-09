import { titleCase } from "./utility.js";

export const generateWeatherDisplay = (weather) => {
  const weatherContainer = document.createElement("div");
  weatherContainer.classList = "weather-container";

  const weatherSummary = document.createElement("div");
  weatherSummary.classList = "weather-summary";

  const location = document.createElement("h2");
  location.classList = "location";
  location.textContent = titleCase(weather.location);
  weatherSummary.appendChild(location);

  const currentConditions = document.createElement("div");
  currentConditions.classList = "current-conditions";
  const currentConditionsText = document.createElement("span");
  currentConditionsText.classList = "text";
  currentConditionsText.textContent = weather.conditions;
  currentConditions.appendChild(currentConditionsText);
  weatherSummary.appendChild(currentConditions);

  const currentTemperature = document.createElement("span");
  currentTemperature.classList = "current-temperature";
  currentTemperature.textContent = `${weather.currentTemperature}°`;
  weatherSummary.appendChild(currentTemperature);

  const feelsLikeTemperature = document.createElement("span");
  feelsLikeTemperature.classList = "feels-like-temperature";
  feelsLikeTemperature.textContent = `Feels like ${weather.feelsLikeTemperature}°`;
  weatherSummary.appendChild(feelsLikeTemperature);

  const temperatureRange = document.createElement("span");
  temperatureRange.classList = "temperature-range";
  temperatureRange.textContent = `High ${weather.maxTemperature}° - Low ${weather.minTemperature}`;
  weatherSummary.appendChild(temperatureRange);

  weatherContainer.appendChild(weatherSummary);

  return weatherContainer;
};
