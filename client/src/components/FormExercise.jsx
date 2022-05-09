import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import axios from "axios";

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

  const [value, setValue] = useState(new Date());
 
  const handleChange = (newValue) => {
    setValue(newValue);}

  const exerciseName = listOfExercises.map((el, index) => (<option key={index + 1} value={el.name}>{el.name}</option>)); // eslint-disable-line

  console.log(exerciseName);

  return(
    <div>      
      <h2>Select Exercise</h2>
      <form>
       <div className="calendar" style={{margin: "5% 40%"}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DateTimePicker
              label="Select Workout Date & Time"
              value={value}
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
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

export default WorkoutDropdown;
