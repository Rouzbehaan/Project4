// Components/List/List.jsx
import React, { useEffect } from "react";
import "./List.css"; // Import the CSS file for the styles and animations

const List = ({ activities, isGoodWeather, changeActivities }) => {
  function handleDelete(id) {
    changeActivities(activities.filter((activity) => activity.id !== id));
  }
  // A function that takes an id as an argument and removes the activity with that specific id from the activities list. 
  // It uses the changeActivities prop, which is expected to be a function that updates the list of activities.
  
  // Use useEffect to trigger the animation whenever the activities array changes
  useEffect(() => {
    const listItems = document.querySelectorAll(".list-item");
    if (listItems.length > 0) {
      const lastItem = listItems[listItems.length - 1];
      lastItem.classList.add("animate"); // Add the animation class to the last added item
    }
  }, [activities]);
  // This hook is used to add an animation class to the last added item in the activities list. 
  // It's triggered every time the activities array changes.

  const goodWeatherActivities = activities.filter((activity) => activity.isForGoodWeather);
  const badWeatherActivities = activities.filter((activity) => !activity.isForGoodWeather);
  // Filter the activities based on the isForGoodWeather property to segregate activities suitable for good weather and bad weather.
  
  return (
    <div className="list">
      {!isGoodWeather ? (
        <section className="list-box-bad-weather">
          <h2>
            Bad Weather outside! ☂️ <br /> Here&apos;s what you can do 📺:
          </h2>
          <ul className="list-container">
            {badWeatherActivities.map((activity) => (
              <li className={`activity ${activity.isForGoodWeather ? "good-weather" : "bad-weather"}`} key={activity.id}>
                <p>{activity.activityText}</p>
                <button className="list-button" onClick={() => handleDelete(activity.id)}>
                🗑️
                </button>
              </li>
            ))}
            <div className="space"></div>
          </ul>
        </section>
      ) : (
        <section className="list-box-good-weather">
          <h2>
            The weather is awesome!(out of Berlin)🏖️ <br /> Leave the city and go 🎠:
          </h2>
          <ul className="list-container">
            {goodWeatherActivities.map((activity) => (
              <li className={`activity ${activity.isForGoodWeather ? "good-weather" : "bad-weather"}`} key={activity.id}>
                <p>{activity.activityText}</p>
                <button className="list-button" onClick={() => handleDelete(activity.id)}>
                🗑️
                </button>
              </li>
            ))}
            <div className="space"></div>
          </ul>
        </section>
      )}
    </div>
  );
};

// Depending on the value of isGoodWeather, it either displays activities suitable for bad weather or those suitable for good weather.
// Each activity has a delete button associated with it. On clicking this button, the handleDelete function is called to remove the activity from the list.

export default List;

// The use of ternary expressions in the render method (the ? : syntax) conditionally renders either the good weather or bad weather activities section.
// The map() function is used to iterate through the activities and render each one
// The key prop is used to uniquely identify each activity. This is required by React to keep track of the activities in the list.
// The handleDelete function is passed as a callback to the onClick event of the delete button. 
// This is how the button is able to remove the activity from the list.
// The className prop is used to conditionally add the good-weather or bad-weather class to the activity based on the value of the isForGoodWeather property.
// This is how the activities are styled differently based on the weather.
// The space div is used to add some space at the bottom of the list. This is to ensure that the last activity is not hidden behind the footer.
