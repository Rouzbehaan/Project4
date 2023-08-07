import "./App.css";
import Form from "./Components/Form/Form.jsx";
import List from "./Components/List/List.jsx";
import FetchedWeather from "./Components/Fetch/Fetch";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App() {
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  // This uses the useState hook to define a state variable named isGoodWeather, which is initialized with the value true. 
  // The setIsGoodWeather function is used to update this state.
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  // This uses the useLocalStorageState hook to define a state variable named activities. 
  // It is initialized with the value retrieved from the browser's local storage under the key "activities". 
  // If the key does not exist, it uses an empty array as the default value.
  // The setActivities function is used to update this state.
  // console.log(isGoodWeather);

  // console.log(activities);
  function changeWeather(newWeatherStatus) {
    setIsGoodWeather(newWeatherStatus);
  }
  // This function takes a new weather status (true or false) as an argument and updates the isGoodWeather state with that value.

  function changeActivities(newArray) {
    setActivities(newArray);
  }
  // This function takes a new array of activities as an argument and updates the activities state with that value.

  function onAddActivity({ activityInput, isForGoodWeather }) {
    const newActivity = {
      id: uid(),
      activityText: activityInput,
      isForGoodWeather: isForGoodWeather,
    };
    setActivities([...activities, newActivity]);
  }
// This function takes an object with two properties as an argument: activityInput and isForGoodWeather.

  return (
    <section>
      <FetchedWeather changeWeather={changeWeather} />
      <List
        activities={activities}
        isGoodWeather={isGoodWeather}
        changeActivities={changeActivities}
      ></List>
      <Form onAddActivity={onAddActivity} />
    </section>
  );
}
// The return statement renders the App component's content inside a <section> element.
// It includes the FetchedWeather component, which is passed the changeWeather function as a prop.
// This component likely allows the user to fetch weather data and change the isGoodWeather state accordingly.
// The List component is also rendered, which is passed the activities, isGoodWeather, and changeActivities props. 
// This component likely displays the list of activities and allows the user to modify them.
// Lastly, the Form component is rendered, which is passed the onAddActivity function as a prop. 
// This component is likely used for user input to add new activities.