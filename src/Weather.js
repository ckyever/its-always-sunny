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
}
