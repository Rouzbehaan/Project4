import { useEffect, useState } from "react";
import "./Fetch.css";
export default function FetchedWeather({ changeWeather }) {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (!response.ok) {
          throw new Error("Failing Weather Fetch");
        }
        const weather = await response.json();
        changeWeather(weather.isGoodWeather);
        setWeatherData(weather);
      } catch (error) {
        console.error("Error :", error);
      }
    }
    fetchWeather();
  }, [changeWeather]);
  return (
    <div className="weatherBox">
      <ul className="temperature">{weatherData.temperature} °C</ul>
      <ul className="emoji">{weatherData.condition}</ul>
    </div>
  );
}







