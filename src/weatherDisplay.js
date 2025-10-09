import { titleCase } from "./utility.js";

// Weather icons
import snowIcon from "./assets/snow.svg";
import rainIcon from "./assets/rain.svg";
import fogIcon from "./assets/fog.svg";
import windIcon from "./assets/wind.svg";
import cloudyIcon from "./assets/cloudy.svg";
import partlyCloudyIcon from "./assets/partly-cloudy-day.svg";
import partlyCloudyNightIcon from "./assets/partly-cloudy-night.svg";
import clearDayIcon from "./assets/clear-day.svg";
import clearNightIcon from "./assets/clear-night.svg";

function getIcon(iconType) {
  let icon;

  switch (iconType) {
    case "snow":
      icon = snowIcon;
      break;
    case "rain":
      icon = rainIcon;
      break;
    case "fog":
      icon = fogIcon;
      break;
    case "wind":
      icon = windIcon;
      break;
    case "cloud":
      icon = cloudyIcon;
      break;
    case "partly-cloudy-day":
      icon = partlyCloudyIcon;
      break;
    case "partly-cloudy-night":
      icon = partlyCloudyNightIcon;
      break;
    case "clear-day":
      icon = clearDayIcon;
      break;
    case "clear-night":
      icon = clearNightIcon;
      break;
    default:
      icon = clearDayIcon;
  }
  return icon;
}

export const generateWeatherDisplay = (weather) => {
  const weatherContainer = document.createElement("div");
  weatherContainer.classList = "weather-container";

  const location = document.createElement("h2");
  location.classList = "location";
  location.textContent = titleCase(weather.location);
  weatherContainer.appendChild(location);

  const firstRow = document.createElement("div");
  firstRow.classList = "row";

  const weatherSummary = document.createElement("div");
  weatherSummary.classList = "weather-summary";

  const currentConditions = document.createElement("div");
  currentConditions.classList = "current-conditions";
  const currentConditionsIcon = document.createElement("img");
  currentConditionsIcon.src = getIcon(weather.icon);
  currentConditions.appendChild(currentConditionsIcon);
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

  firstRow.appendChild(weatherSummary);
  weatherContainer.appendChild(firstRow);

  return weatherContainer;
};
