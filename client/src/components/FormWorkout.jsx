import { useState } from "react";
import axios from "axios";

function FormWorkout() {
  const [workout, setWorkout] = useState({
    name: "",
    duration: "",
    type: "",
    intensity: "",
    link: "",
  });

  const handleChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/calendar",
        workout
      );
      console.log(response);
    } catch (error) {
      console.log("Exercise could not be saved.", error.message);
    }
  };

  return (
    <div>
      <h2>Workout</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          id="name"
          name="name"
          value={workout.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          id="type"
          name="type"
          value={workout.type}
          placeholder="Type"
          onChange={handleChange}
        />
        <input
          type="text"
          id="duration"
          value={workout.duration} // Count in base 10
          name="duration"
          placeholder="Duration"
          onChange={parseInt(handleChange, 10)}
        />
        <input
          type="text"
          id="intensity"
          value={workout.intensity}
          name="intensity"
          placeholder="Intensity"
          onChange={handleChange}
        />
        <input
          type="text"
          id="link"
          value={workout.link}
          name="link"
          placeholder="Link"
          onChange={handleChange}
        />
      </form>
      <input type="submit" value="Save workout" onClick={handleSubmit} />
    </div>
  );
}

export default FormWorkout;
