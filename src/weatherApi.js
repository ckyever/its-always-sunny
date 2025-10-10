import { Weather, HourlyWeather } from "./Weather.js";
import { generateWeatherDisplay } from "./weatherDisplay.js";

class WeatherApi {
  static visualCrossingApiKey = "PMM3RB9EUK4F9UD89KCKVKN4W";
  static endpointTemplate = (location) =>
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&iconSet=icons2&key=${WeatherApi.visualCrossingApiKey}&contentType=json`;

  #currentWeather;

  constructor() {
    this.#currentWeather = new Weather({});
  }

  createWeather(data) {
    const HOURS_IN_A_DAY = 24;
    const NUMBER_OF_HOURS_TO_SHOW = 8;
    let currentHour = new Date().getHours();
    let currentDayIndex = 0;

    let hourlyWeather = [];
    for (let i = 0; i < NUMBER_OF_HOURS_TO_SHOW; i++) {
      // We reached midnight so go to the next day
      if (currentHour > HOURS_IN_A_DAY - 1) {
        currentDayIndex++;
        currentHour = 0;
      }

      const weather = new HourlyWeather(
        data.days[currentDayIndex].hours[currentHour].datetime,
        data.days[currentDayIndex].hours[currentHour].temp,
        data.days[currentDayIndex].hours[currentHour].precipprob,
        data.days[currentDayIndex].hours[currentHour].icon,
      );
      hourlyWeather.push(weather);
      currentHour++;
    }

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
      windSpeed: data.currentConditions.windspeed,
      windDirection: data.currentConditions.winddir,
      humidity: data.currentConditions.humidity,
      sunrise: data.currentConditions.sunrise,
      sunset: data.currentConditions.sunset,
      uvIndex: data.currentConditions.uvindex,
      hourly: hourlyWeather,
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
