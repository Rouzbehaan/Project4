import "./Form.css";
export default function Form({ onAddActivity }) 
{
  function handleSubmitData(event) {
    // This is a functional component named "Form" that takes a prop named "handleAddActivity". 
    // The "handleAddActivity" prop is a function that will be used to add the new activity data when the form is submitted.//
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    event.target.reset();
    document.getElementById("activityInput").focus();
  }
  // This is an inner function defined within the "Form" component. 
  // It handles the form submission when the user clicks the "Add" button. 
  // It prevents the default form submission behavior, extracts the data from the form using FormData, converts it into a regular JavaScript object using "Object.fromEntries", 
  // calls the "handleAddActivity" function with the data, resets the form, and focuses on the input field with the ID "activityInput".

  return (
    <form className="activity-form" onSubmit={handleSubmitData}>
      {/* This is the main form element that wraps the entire form content. The "onSubmit" attribute is set to call the "handleSubmitData" function when the form is submitted. */}
      <h2 className="activity-form__title">Add new Activity :</h2>
      {/* This is a heading displaying the title "Add new Activity". */}
      <div className="activity-form__new-activity">
      {/* This div contains the input field for entering the new activity. */}
        <label htmlFor="activityInput"></label>
        {/* This empty label is used to associate with the input field with the ID "activityInput" for accessibility purposes. */}
        <input
          type="text"
          id="activityInput"
          name="activityInput"
          minLength="3"
          placeholder="Write Your Beloved Activity Here "
        />
        {/* This is the input field where the user can enter the new activity. The ID "activityInput" is associated with the label. It has a minimum length set to 3 characters, and it shows the placeholder text "Write Your Beloved Activity Here". */}
      </div>
      <div className="activity-checkbox">
      {/* This div contains a checkbox input field for indicating whether the activity is suitable for good weather. */}
        <label className="checkbox-label">Good-Weather Activity :</label>
        {/* This label text describes the checkbox for indicating if the activity is suitable for good weather. */}
        <input
          className="checkbox"
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
          // This is the checkbox input field where the user can indicate if the activity is suitable for good weather.
        />
      </div>
      <button className="activity-button" type="submit">
        Add
      </button>
      {/* This is the "Add" button that will trigger the form submission when clicked. */}
    </form>
  );
}