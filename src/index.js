import "./styles.css";
import weatherApi from "./WeatherApi.js";

const searchForm = document.querySelector("form.search");
const queryInput = document.querySelector("form.search > input.query");

// Default weather shown
search("Everest, Nepal");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  search(queryInput.value);
});

async function search(query) {
  await weatherApi.getWeather(query);
  weatherApi.displayWeather();
}
