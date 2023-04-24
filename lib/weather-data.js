import axios from "axios";
import { geocodingAPI, weatherAPI } from "@component/utils/values";

export const getWeatherOfCountry = async (country) => {
  return await axios
    .get(
      `${weatherAPI}lat=${country.lat}&lon=${country.lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e.message); // "oh, no!"
    });
};

export const getGeoCoding = async (countryName) => {
  return await axios
    .get(`${geocodingAPI}q=${countryName}&appid=${process.env.WEATHER_API_KEY}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e.message); // "oh, no!"
    });
};
