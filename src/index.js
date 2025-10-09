import "./styles.css";
import weatherApi from "./weatherApi.js";
import gifApi from "./gifApi.js";

const searchForm = document.querySelector("form.search");
const queryInput = document.querySelector("form.search > input.query");
const contentContainer = document.querySelector("body div.content");

// Default weather shown
search("Everest, Nepal");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  search(queryInput.value);
});

async function search(query) {
  await weatherApi.getWeather(query);
  contentContainer.innerHTML = "";
  contentContainer.appendChild(weatherApi.displayWeather(contentContainer));

  const gifSearchQuery = `${weatherApi.weatherConditions} weather`;
  const weatherGif = document.querySelector(".weather-gif");
  weatherGif.src = await gifApi.get(gifSearchQuery);
}
