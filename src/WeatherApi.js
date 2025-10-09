import { Weather } from "./Weather.js";

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
    });
  }

  async getWeather(location) {
    let success = null;
    try {
      const response = await fetch(WeatherApi.endpointTemplate(location));
      const data = await response.json();
      this.#currentWeather = this.createWeather(data);
      success = true;
    } catch {
      success = false;
    }
    return success;
  }

  displayWeather() {
    // CKYTODO: Temporarily display to console
    console.log(this.#currentWeather);
  }
}

export default new WeatherApi();
