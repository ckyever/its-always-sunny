export class Weather {
  #location;
  #weatherDescription;
  #conditions;
  #currentTemperature;
  #feelsLikeTemperature;
  #maxTemperature;
  #minTemperature;
  #precipitationAmount;
  #precipitationProbability;
  #icon;
  #windSpeed;
  #windDirection;
  #humidity;
  #sunrise;
  #sunset;
  #uvIndex;

  constructor({
    location = null,
    weatherDescription = null,
    conditions = null,
    currentTemperature = null,
    feelsLikeTemperature = null,
    maxTemperature = null,
    minTemperature = null,
    precipitationAmount = null,
    precipitationProbability = null,
    icon = null,
    windSpeed = null,
    windDirection = null,
    humidity = null,
    sunrise = null,
    sunset = null,
    uvIndex = null,
  } = {}) {
    this.#location = location;
    this.#weatherDescription = weatherDescription;
    this.#conditions = conditions;
    this.#currentTemperature = currentTemperature;
    this.#feelsLikeTemperature = feelsLikeTemperature;
    this.#maxTemperature = maxTemperature;
    this.#minTemperature = minTemperature;
    this.#precipitationAmount = precipitationAmount;
    this.#precipitationProbability = precipitationProbability;
    this.#icon = icon;
    this.#windSpeed = windSpeed;
    this.#windDirection = windDirection;
    this.#humidity = humidity;
    this.#sunrise = sunrise;
    this.#sunset = sunset;
    this.#uvIndex = uvIndex;
  }

  get location() {
    return this.#location;
  }

  get weatherDescription() {
    return this.#weatherDescription;
  }

  get conditions() {
    return this.#conditions;
  }

  get currentTemperature() {
    return this.#currentTemperature;
  }

  get feelsLikeTemperature() {
    return this.#feelsLikeTemperature;
  }

  get maxTemperature() {
    return this.#maxTemperature;
  }

  get minTemperature() {
    return this.#minTemperature;
  }

  get precipitationAmount() {
    return this.#precipitationAmount;
  }

  get precipitationProbability() {
    return this.#precipitationProbability;
  }

  get icon() {
    return this.#icon;
  }

  get windSpeed() {
    return this.#windSpeed;
  }
  get windDirection() {
    return this.#windDirection;
  }
  get humidity() {
    return this.#humidity;
  }
  get sunrise() {
    return this.#sunrise;
  }
  get sunset() {
    return this.#sunset;
  }
  get uvIndex() {
    return this.#uvIndex;
  }
}
