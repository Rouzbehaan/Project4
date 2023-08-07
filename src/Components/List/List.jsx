import "./List.css";
export default function List({ activities, isGoodWeather, changeActivities }) {
  function handleDelete(id) {
    changeActivities(activities.filter((activity) => activity.id !== id));
  }
  try {
    const goodWeatherActivities = activities.filter(
      (activity) => activity.isForGoodWeather
    );
    const badWeatherActivities = activities.filter(
      (activity) => !activity.isForGoodWeather
    );
    return !isGoodWeather ? (
      <section className="list-box-bad-weather">
        <h2>
          Bad Weather outside! <br /> Here&apos;s what you can do:
        </h2>
        <ul className="list-container">
          {badWeatherActivities.map((activity) => (
            <li className="activity" key={activity.id}>
              <p>{activity.activityText}</p>
              <button
                className="list-button"
                onClick={() => handleDelete(activity.id)}
              >
                X
              </button>
            </li>
          ))}
          <div className="space"></div>
        </ul>
      </section>
    ) : (
      <section className="list-box-good-weather">
        <h2>
          The weather is awesome!(out of Berlin) <br /> Go outside and:
        </h2>
        <ul className="list-container">
          {goodWeatherActivities.map((activity) => (
            <li className="activity" key={activity.id}>
              <p>{activity.activityText}</p>
              <button
                className="list-button"
                onClick={() => handleDelete(activity.id)}
              >X              
              </button>
            </li>
          ))}
          <div className="space"></div>
        </ul>
      </section>
    );
  } catch (e) {
    console.error(e);
  }
}

