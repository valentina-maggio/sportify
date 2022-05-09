import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import Dropdown from './Dropdown';

function FormExercise() {

  const { state } = useLocation();

  console.log(`State passed is ${state}`);

  const [exercise, setexercise] = useState({
    name: "",
    category: "",
    duration: "",
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
        {/* <input
          type="text"
          id="duration"
          value={exercise.duration}
          name="duration"
          placeholder="Duration"
          onChange={handleChange}
        /> */}
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
  );
}


function WorkoutDropdown()  {
  const [listOfExercises, setExercise] = useState([])
  useEffect(() => {
    const handleSubmit = async () => {
      try {
        console.log("list of exercises");
        const response = await axios.get("http://localhost:3001/exercises");      
        return setExercise(response.data);
      } catch (error) {
        return console.log("Could not get list of exercises.", error.message);
      }    
    };  
    handleSubmit();
  }, []);

  const exerciseName = listOfExercises.map((el, index) => (<option key={index + 1} value={el.name}>{el.name}</option>)); // eslint-disable-line

 // const exerciseDuration = listOfExercises.map((el, index) => (<option key={index + 1} value={el.duration}>{el.duration}</option>)); // eslint-disable-line

  console.log(exerciseName);

  return(
    <div>      
      <h2>Select Exercise</h2>
      <form>
        <option>Name</option>             
        <select label="Name">
          {exerciseName}
        </select>
        <option>Duration</option> 
        <select label="Duration">
          <option value="5 min">5 min</option>
          <option value="10 min">10 min</option>
          <option value="15 min">15 min</option>
          <option value="20 min">20 min</option>
          <option value="30 min">30 min</option>
          <option value="40 min">40 min</option>
          <option value="45 min">45 min</option>
          <option value="60 min">60 min</option>
        </select>
        <input type="submit" value="Schedule workout"/>
      </form>
    </div>
  ); 
}

export default FormExercise;
export{ WorkoutDropdown };
