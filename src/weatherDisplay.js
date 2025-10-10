import { titleCase } from "./utility.js";

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
  currentConditionsIcon.classList = "weather-icon";
  currentConditions.appendChild(currentConditionsIcon);
  const currentConditionsText = document.createElement("span");
  currentConditionsText.classList = "text";
  currentConditionsText.textContent = weather.conditions;
  currentConditions.appendChild(currentConditionsText);
  weatherSummary.appendChild(currentConditions);

  const currentTemperature = document.createElement("span");
  currentTemperature.classList = "current-temperature";
  currentTemperature.textContent = `${Math.floor(weather.currentTemperature)}°`;
  weatherSummary.appendChild(currentTemperature);

  const feelsLikeTemperature = document.createElement("span");
  feelsLikeTemperature.classList = "feels-like-temperature";
  feelsLikeTemperature.textContent = `Feels like ${Math.floor(weather.feelsLikeTemperature)}°`;
  weatherSummary.appendChild(feelsLikeTemperature);

  const temperatureRange = document.createElement("span");
  temperatureRange.classList = "temperature-range";
  temperatureRange.textContent = `High ${Math.floor(weather.maxTemperature)}° - Low ${Math.floor(weather.minTemperature)}°`;
  weatherSummary.appendChild(temperatureRange);

  firstRow.appendChild(weatherSummary);
  weatherContainer.appendChild(firstRow);

  const currentData = document.createElement("div");
  currentData.classList = "current-data";

  const precipitation = document.createElement("div");
  precipitation.classList = "data-container";
  const precipitationImage = document.createElement("img");
  precipitationImage.classList = "icon";
  precipitationImage.src = precipitationIcon;
  precipitation.appendChild(precipitationImage);
  const precipitationText = document.createElement("div");
  precipitationText.classList = "data-text";
  const precipitationLabel = document.createElement("span");
  precipitationLabel.classList = "label";
  precipitationLabel.innerText = "Precipitation";
  precipitationText.appendChild(precipitationLabel);
  const precipitationValue = document.createElement("span");
  precipitationValue.classList = "value";
  precipitationValue.innerText = `${weather.precipitationAmount}%`;
  precipitationText.appendChild(precipitationValue);
  precipitation.appendChild(precipitationText);
  currentData.appendChild(precipitation);

  const windSpeed = document.createElement("div");
  windSpeed.classList = "data-container";
  const windSpeedImage = document.createElement("img");
  windSpeedImage.classList = "icon";
  windSpeedImage.src = windSpeedIcon;
  windSpeed.appendChild(windSpeedImage);
  const windSpeedText = document.createElement("div");
  windSpeedText.classList = "data-text";
  const windSpeedLabel = document.createElement("span");
  windSpeedLabel.classList = "label";
  windSpeedLabel.innerText = "Wind";
  windSpeedText.appendChild(windSpeedLabel);
  const windSpeedValue = document.createElement("span");
  windSpeedValue.classList = "value";
  windSpeedValue.innerText = `${weather.windSpeed} km/h`;
  windSpeedText.appendChild(windSpeedValue);
  windSpeed.appendChild(windSpeedText);
  currentData.appendChild(windSpeed);

  const humidity = document.createElement("div");
  humidity.classList = "data-container";
  const humidityImage = document.createElement("img");
  humidityImage.classList = "icon";
  humidityImage.src = humidityIcon;
  humidity.appendChild(humidityImage);
  const humidityText = document.createElement("div");
  humidityText.classList = "data-text";
  const humidityLabel = document.createElement("span");
  humidityLabel.classList = "label";
  humidityLabel.innerText = "Humidity";
  humidityText.appendChild(humidityLabel);
  const humidityValue = document.createElement("span");
  humidityValue.classList = "value";
  humidityValue.innerText = `${weather.humidity}%`;
  humidityText.appendChild(humidityValue);
  humidity.appendChild(humidityText);
  currentData.appendChild(humidity);

  const sunrise = document.createElement("div");
  sunrise.classList = "data-container";
  const sunriseImage = document.createElement("img");
  sunriseImage.classList = "icon";
  sunriseImage.src = sunriseIcon;
  sunrise.appendChild(sunriseImage);
  const sunriseText = document.createElement("div");
  sunriseText.classList = "data-text";
  const sunriseLabel = document.createElement("span");
  sunriseLabel.classList = "label";
  sunriseLabel.innerText = "Sunrise";
  sunriseText.appendChild(sunriseLabel);
  const sunriseValue = document.createElement("span");
  sunriseValue.classList = "value";
  sunriseValue.innerText = weather.sunrise;
  sunriseText.appendChild(sunriseValue);
  sunrise.appendChild(sunriseText);
  currentData.appendChild(sunrise);

  const sunset = document.createElement("div");
  sunset.classList = "data-container";
  const sunsetImage = document.createElement("img");
  sunsetImage.classList = "icon";
  sunsetImage.src = sunsetIcon;
  sunset.appendChild(sunsetImage);
  const sunsetText = document.createElement("div");
  sunsetText.classList = "data-text";
  const sunsetLabel = document.createElement("span");
  sunsetLabel.classList = "label";
  sunsetLabel.innerText = "Sunset";
  sunsetText.appendChild(sunsetLabel);
  const sunsetValue = document.createElement("span");
  sunsetValue.classList = "value";
  sunsetValue.innerText = weather.sunset;
  sunsetText.appendChild(sunsetValue);
  sunset.appendChild(sunsetText);
  currentData.appendChild(sunset);

  const uvIndex = document.createElement("div");
  uvIndex.classList = "data-container";
  const uvIndexImage = document.createElement("img");
  uvIndexImage.classList = "icon";
  uvIndexImage.src = uvIndexIcon;
  uvIndex.appendChild(uvIndexImage);
  const uvIndexText = document.createElement("div");
  uvIndexText.classList = "data-text";
  const uvIndexLabel = document.createElement("span");
  uvIndexLabel.classList = "label";
  uvIndexLabel.innerText = "UV Index";
  uvIndexText.appendChild(uvIndexLabel);
  const uvIndexValue = document.createElement("span");
  uvIndexValue.classList = "value";
  uvIndexValue.innerText = weather.uvIndex;
  uvIndexText.appendChild(uvIndexValue);
  uvIndex.appendChild(uvIndexText);
  currentData.appendChild(uvIndex);

  weatherContainer.append(currentData);

  return weatherContainer;
};
