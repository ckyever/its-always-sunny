import { Weather } from "./Weather.js";
import { generateWeatherDisplay } from "./weatherDisplay.js";

class WeatherApi {
  static visualCrossingApiKey = "PMM3RB9EUK4F9UD89KCKVKN4W";
  static endpointTemplate = (location) =>
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=${WeatherApi.visualCrossingApiKey}&contentType=json`;

  #currentWeather;

  constructor() {
    this.#currentWeather = new Weather({});
  }

  createWeather(data) {
    return new Weather({
      location: data.resolvedAddress,
      weatherDescription: data.description,
      conditions: data.currentConditions.conditions,
      currentTemperature: data.currentConditions.temp,
      feelsLikeTemperature: data.currentConditions.feelslike,
      maxTemperature: data.days[0].tempmax,
      minTemperature: data.days[0].tempmin,
      precipitationAmount: data.days[0].precip,
      precipitationProbability: data.days[0].precipprob,
      icon: data.currentConditions.icon,
    });
  }

  async getWeather(location) {
    let success = null;
    try {
      const response = await fetch(WeatherApi.endpointTemplate(location));
      const data = await response.json();
      console.log(data); // CKYTODO Remove after development
      this.#currentWeather = this.createWeather(data);
      console.log(this.#currentWeather); // CKYTODO Remove after development
      success = true;
    } catch {
      success = false;
    }
    return success;
  }

  displayWeather() {
    return generateWeatherDisplay(this.#currentWeather);
  }

  get weatherConditions() {
    return this.#currentWeather.conditions;
  }
}

export default new WeatherApi();
