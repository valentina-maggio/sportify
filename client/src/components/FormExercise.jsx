import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import axios from "axios";
// import Dropdown from './Dropdown';

function FormExercise() {

  // const { state } = useLocation();

  // console.log(`State passed is ${state}`);

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
  );
}


function WorkoutDropdown()  {

  const { state } = useLocation();

  console.log(`State passed in Workout Dropdown ${state}`);

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

  const names = listOfExercises.map(x => x.name);
  const uniqueNames = [...new Set(names)];

  const exerciseName = uniqueNames.map((el, index) => (<option key={index + 1} value={el}>{el}</option>)); // eslint-disable-line

  const [selectExercise, setSelectExercise] = useState({
    workoutDate: "",
    exerciseName: "",
    duration: "",
    username: state
  });

  console.log("First Value");
  console.log(selectExercise);

  const handleChange = (newValue) => {
    if(typeof newValue.target === 'undefined'){
      setSelectExercise({
        ...selectExercise,
        workoutDate: newValue,
      });
    }else{
      setSelectExercise({
        ...selectExercise,
        [newValue.target.name]: newValue.target.value,
      });
    }
  }

  const handleSubmitSelectExercise = async () => {
    try {
      console.log(selectExercise);
      await axios.post("http://localhost:3001/workouts", selectExercise);
    } catch (error) {
      console.log("Exercise could not be saved.", error.message);
    }
  };

  console.log("Changed Value");
  console.log(selectExercise);

  console.log(exerciseName);

  return(
    <div>      
      <h2>Select Exercise</h2>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitSelectExercise();
      }}>
       <div className="calendar" style={{margin: "5% 40%"}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DateTimePicker
              name="workoutDate" 
              label="Select Workout Date & Time"
              value={selectExercise.workoutDate}
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <div>
        <option>Name</option>             
        <select
        name="exerciseName"
        label="Name"
        value={selectExercise.exerciseName}
        onChange={handleChange}>
        {exerciseName}
        </select>
      </div>
      <div>
        <option>Duration</option> 
        <select
        name="duration"
        label="Duration"
        value={selectExercise.name}
        onChange={handleChange}>
          <option value="5 min">5 min</option>
          <option value="10 min">10 min</option>
          <option value="15 min">15 min</option>
          <option value="20 min">20 min</option>
          <option value="30 min">30 min</option>
          <option value="40 min">40 min</option>
          <option value="45 min">45 min</option>
          <option value="60 min">60 min</option>
        </select>
      </div>
        <input type="submit" value="Schedule workout"/>
      </form>
    </div>
  ); 
}

export default FormExercise;
export{ WorkoutDropdown };
