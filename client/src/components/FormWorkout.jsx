import { useState } from "react";
import axios from "axios";

function FormWorkout() {
  const [workout, setWorkout] = useState({
    name: "",
    category: "",
    duration: "",
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
      console.log(workout);
      await axios.post("http://localhost:3001/exercises", workout);
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
          id="category"
          name="category"
          value={workout.category}
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          type="text"
          id="duration"
          value={workout.duration}
          name="duration"
          placeholder="Duration"
          onChange={handleChange}
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
