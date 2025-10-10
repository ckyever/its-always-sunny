import { titleCase, getShort12HourTime } from "./utility.js";

// Weather icons
import snowIcon from "./assets/snow.svg";
import snowShowersDayIcon from "./assets/snow-showers-day.svg";
import snowShowersNightIcon from "./assets/snow-showers-night.svg";
import thunderRainIcon from "./assets/thunder-rain.svg";
import thunderShowersDayIcon from "./assets/thunder-showers-day.svg";
import thunderShowersNightIcon from "./assets/thunder-showers-night.svg";
import rainIcon from "./assets/rain.svg";
import showersDayIcon from "./assets/showers-day.svg";
import showersNightIcon from "./assets/showers-night.svg";
import fogIcon from "./assets/fog.svg";
import windIcon from "./assets/wind.svg";
import cloudyIcon from "./assets/cloudy.svg";
import partlyCloudyIcon from "./assets/partly-cloudy-day.svg";
import partlyCloudyNightIcon from "./assets/partly-cloudy-night.svg";
import clearDayIcon from "./assets/clear-day.svg";
import clearNightIcon from "./assets/clear-night.svg";
import notAvailableIcon from "./assets/not-available.svg";

// Conditions data icons
import precipitationIcon from "./assets/precipitation.svg";
import windSpeedIcon from "./assets/wind-speed.svg";
import humidityIcon from "./assets/humidity.svg";
import sunriseIcon from "./assets/sunrise.svg";
import sunsetIcon from "./assets/sunset.svg";
import uvIndexIcon from "./assets/uv-index.svg";

function getIcon(iconType) {
  let icon;

  switch (iconType) {
    case "snow":
      icon = snowIcon;
      break;
    case "snow-showers-day":
      icon = snowShowersDayIcon;
      break;
    case "snow-showers-night":
      icon = snowShowersNightIcon;
      break;
    case "thunder-rain":
      icon = thunderRainIcon;
      break;
    case "thunder-showers-day":
      icon = thunderShowersDayIcon;
      break;
    case "thunder-showers-night":
      icon = thunderShowersNightIcon;
      break;
    case "rain":
      icon = rainIcon;
      break;
    case "showers-day":
      icon = showersDayIcon;
      break;
    case "showers-night":
      icon = showersNightIcon;
      break;
    case "fog":
      icon = fogIcon;
      break;
    case "wind":
      icon = windIcon;
      break;
    case "cloudy":
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
      icon = notAvailableIcon;
  }
  return icon;
}

function createConditionsDataElement(icon, label, value) {
  const conditionsData = document.createElement("div");
  conditionsData.classList = "data-container";
  const conditionsDataImage = document.createElement("img");
  conditionsDataImage.classList = "icon";
  conditionsDataImage.src = icon;
  conditionsData.appendChild(conditionsDataImage);
  const conditionsDataText = document.createElement("div");
  conditionsDataText.classList = "data-text";
  const conditionsDataLabel = document.createElement("span");
  conditionsDataLabel.classList = "label";
  conditionsDataLabel.innerText = label;
  conditionsDataText.appendChild(conditionsDataLabel);
  const conditionsDataValue = document.createElement("span");
  conditionsDataValue.classList = "value";
  conditionsDataValue.innerText = value;
  conditionsDataText.appendChild(conditionsDataValue);
  conditionsData.appendChild(conditionsDataText);

  return conditionsData;
}

function createHourlyDataElement(
  temperature,
  iconType,
  precipitation,
  datetime,
) {
  const hourlyData = document.createElement("div");
  hourlyData.classList = "hourly-data";

  const temperatureElement = document.createElement("span");
  temperatureElement.classList = "temperature";
  temperatureElement.innerText = temperature;
  hourlyData.appendChild(temperatureElement);

  const iconElement = document.createElement("img");
  iconElement.classList = "icon";
  iconElement.src = getIcon(iconType);
  hourlyData.appendChild(iconElement);

  const precipitationElement = document.createElement("span");
  precipitationElement.classList = "precipitation";
  precipitationElement.innerText = `${Math.floor(precipitation)}%`;
  hourlyData.appendChild(precipitationElement);

  const hourElement = document.createElement("span");
  hourElement.classList = "hour";
  hourElement.innerText = getShort12HourTime(datetime, false);
  hourlyData.appendChild(hourElement);

  return hourlyData;
}

export const generateWeatherDisplay = (weather) => {
  const weatherContainer = document.createElement("div");
  weatherContainer.classList = "weather-container";

  const location = document.createElement("h2");
  location.classList = "location";
  location.textContent = titleCase(weather.location);
  weatherContainer.appendChild(location);

  const weatherSummary = document.createElement("div");
  weatherSummary.classList = "weather-summary";

  const currentConditionsText = document.createElement("span");
  currentConditionsText.classList = "text";
  currentConditionsText.textContent =
    weather.conditions === "Clear" ? "Sunny" : weather.conditions;
  weatherSummary.appendChild(currentConditionsText);

  const mainSummary = document.createElement("div");
  mainSummary.classList = "main-summary";
  const currentConditionsIcon = document.createElement("img");
  currentConditionsIcon.src = getIcon(weather.icon);
  currentConditionsIcon.classList = "weather-icon";
  mainSummary.appendChild(currentConditionsIcon);
  const currentTemperature = document.createElement("span");
  currentTemperature.classList = "current-temperature";
  currentTemperature.textContent = `${Math.floor(weather.currentTemperature)}°`;
  mainSummary.appendChild(currentTemperature);
  weatherSummary.appendChild(mainSummary);

  const feelsLikeTemperature = document.createElement("span");
  feelsLikeTemperature.classList = "feels-like-temperature";
  feelsLikeTemperature.textContent = `Feels like ${Math.floor(weather.feelsLikeTemperature)}°`;
  weatherSummary.appendChild(feelsLikeTemperature);

  const temperatureRange = document.createElement("span");
  temperatureRange.classList = "temperature-range";
  temperatureRange.textContent = `High ${Math.floor(weather.maxTemperature)}° - Low ${Math.floor(weather.minTemperature)}°`;
  weatherSummary.appendChild(temperatureRange);

  weatherContainer.appendChild(weatherSummary);

  const currentData = document.createElement("div");
  currentData.classList = "current-data";
  currentData.appendChild(
    createConditionsDataElement(
      precipitationIcon,
      "Precipitation",
      `${Math.floor(weather.precipitationAmount)}%`,
    ),
  );
  currentData.appendChild(
    createConditionsDataElement(
      windSpeedIcon,
      "Wind",
      `${weather.windSpeed} km/h`,
    ),
  );
  currentData.appendChild(
    createConditionsDataElement(
      humidityIcon,
      "Humidity",
      `${Math.floor(weather.humidity)}%`,
    ),
  );
  currentData.appendChild(
    createConditionsDataElement(
      sunriseIcon,
      "Sunrise",
      getShort12HourTime(weather.sunrise, true),
    ),
  );
  currentData.appendChild(
    createConditionsDataElement(
      sunsetIcon,
      "Sunset",
      getShort12HourTime(weather.sunset, true),
    ),
  );
  currentData.appendChild(
    createConditionsDataElement(uvIndexIcon, "UV Index", weather.uvIndex),
  );
  weatherContainer.append(currentData);

  const hourlyContainer = document.createElement("div");
  hourlyContainer.classList = "hourly-container";

  weather.hourly.forEach((data) => {
    hourlyContainer.appendChild(
      createHourlyDataElement(
        Math.floor(data.temperature),
        data.icon,
        Math.floor(data.precipitation),
        data.datetime,
      ),
    );
  });
  weatherContainer.append(hourlyContainer);

  return weatherContainer;
};
