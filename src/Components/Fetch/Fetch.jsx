import { useEffect, useState } from "react";
import "./Fetch.css";
export default function FetchedWeather({ changeWeather }) {
  // It's a functional component called FetchedWeather which receives a changeWeather prop (a function).

  const [weatherData, setWeatherData] = useState({}); // It has a state variable named weatherData which is initialized to an empty object.
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

  // It has a useEffect hook that calls the fetchWeather function when the component is mounted.
  // The fetchWeather function makes a GET request to the weather API endpoint and stores the response in the weather variable.
  // The weather variable is then passed to the changeWeather function and the weatherData state variable is updated with the weather data.
  // If there is an error, it is logged to the console.
  // The useEffect hook is set to run only when the changeWeather function changes.

  return (
    <div className="weatherBox">
      <ul className="temperature">{weatherData.temperature} °C</ul>
      <ul className="emoji">{weatherData.condition}</ul>
    </div>
  );
}
// The FetchedWeather component returns a div element with the class name "weatherBox".
// The div contains two unordered list elements with the class names "temperature" and "emoji".
// The unordered list elements display the temperature and the weather condition emoji.
// The weather data is displayed using the weatherData state variable.
// The weatherData state variable is updated using the setWeatherData function.
// The weatherData state variable is initialized to an empty object.
// The weatherData state variable is updated with the weather data received from the weather API endpoint.
// The weatherData state variable is passed to the changeWeather function.
// The changeWeather function is passed to the FetchedWeather component as a prop.
// The changeWeather function is called with the weather data received from the weather API endpoint.
// The changeWeather function is defined in the App component.
// The changeWeather function updates the isGoodWeather state variable in the App component.
// The isGoodWeather state variable is passed to the Activity component as a prop.
// The Activity component is rendered conditionally based on the value of the isGoodWeather state variable.







