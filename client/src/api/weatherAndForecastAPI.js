// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { OPENWEATHER_KEY  } from "../env";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: OPENWEATHER_KEY,
        units: "metric"
      }
    }
  );

 
  return response;
}

export default getWeatherAndForecast;