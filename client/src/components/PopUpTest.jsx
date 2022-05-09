import Popup from 'reactjs-popup';
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function PopUpTest() {

  const { state } = useLocation();

  console.log(`State passed is ${state}`);

  const [exercise, setexercise] = useState({
    name: "",
    category: "",
    intensity: "",
    link: "",
  });

  const handleChange = (e) => {
    setexercise({
      ...exercise,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      console.log(exercise);
      await axios.post("http://localhost:3001/exercises", exercise);
    } catch (error) {
      console.log("Exercise could not be saved.", error.message);
    }
  };

  return (
    <div>
      <h4>Create a New Workout</h4>
      {/* eslint-disable-next-line react/button-has-type */}
      <Popup trigger={<button> Create </button>} 
      position="right center">
        <div>
        <h2>Exercise</h2>
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
            value={exercise.name}
            placeholder="Name"
            onChange={handleChange}
          />
        <input
          type="text"
          id="category"
          name="category"
          value={exercise.category}
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          type="text"
          id="intensity"
          value={exercise.intensity}
          name="intensity"
          placeholder="Intensity"
          onChange={handleChange}
        />
        <input
          type="text"
          id="link"
          value={exercise.link}
          name="link"
          placeholder="Link"
          onChange={handleChange}
        />
      </form>
      <input type="submit" value="Save exercise" onClick={handleSubmit} />
    </div>
      </Popup> 
    </div>
  )
}

export default PopUpTest;

