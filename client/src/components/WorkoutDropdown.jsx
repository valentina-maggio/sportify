import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Button from '@mui/material/Button';

import axios from 'axios';
import './WorkoutDropdown.css';

function WorkoutDropdown() {
  const state = sessionStorage.getItem('item_key');

  console.log(`State passed in Workout Dropdown ${state}`);

  const [listOfExercises, setExercise] = useState([]);
  useEffect(() => {
    const handleSubmit = async () => {
      try {
        console.log('list of exercises');
        const response = await axios.get('http://localhost:3001/exercises', {
          params: { user: state },
        });
        return setExercise(response.data);
      } catch (error) {
        return console.log('Could not get list of exercises.', error.message);
      }
    };
    handleSubmit();
  }, []);

  const names = listOfExercises.map((x) => x.name);
  const uniqueNames = [...new Set(names)];
  console.log(uniqueNames);

  console.log(listOfExercises);

  const [selectExercise, setSelectExercise] = useState({
    workoutDate: '',
    exerciseName: '',
    duration: '',
    category: '',
    username: state,
  });

  const handleChange = (newValue) => {
    if (typeof newValue.target === 'undefined') {
      setSelectExercise({
        ...selectExercise,
        workoutDate: newValue,
      });
    } else {
      setSelectExercise({
        ...selectExercise,
        [newValue.target.name]: newValue.target.value,
      });
    }
  };

  const handleSubmitSelectExercise = async () => {
    try {
      await axios.post('http://localhost:3001/workouts', selectExercise);
    } catch (error) {
      console.log('Exercise could not be saved.', error.message);
    }
  };

  return (
    <div>
      <div className='Select-container'>
        <div className='heading'>
          <h2>Select Exercise</h2>
        </div>
        <div className='schedule-container'>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitSelectExercise();
              }}
            >
              <div className='calendar' sx={{ minWidth: 120 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DateTimePicker
                      disablePast
                      name='workoutDate'
                      label='Select Date & Time'
                      value={selectExercise.workoutDate}
                      onChange={handleChange}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id='name-label'>Exercise</InputLabel>
                    <Select
                      className='name'
                      labelId='name-label'
                      name='exerciseName'
                      label='Name'
                      value={selectExercise.exerciseName}
                      onChange={handleChange}
                    >
                      {uniqueNames.map((ex) => (
                        <MenuItem value={ex}>{ex}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id='category-label'>Category</InputLabel>
                    {/* <option>Category</option> */}
                    <Select
                      className='category'
                      labelId='category-label'
                      name='category'
                      label='category'
                      value={selectExercise.category}
                      onChange={handleChange}
                    >
                      <MenuItem value='Cardio'>Cardio</MenuItem>
                      <MenuItem value='HIIT'>HIIT</MenuItem>
                      <MenuItem value='Strength'>Strength</MenuItem>
                      <MenuItem value='Low Impact'>Low Impact</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id='duration-label'>Duration</InputLabel>
                    <Select
                      className='duration'
                      labelId='duration-label'
                      name='duration'
                      label='Duration'
                      value={selectExercise.duration}
                      onChange={handleChange}
                    >
                      <MenuItem value='5 min'>5 min</MenuItem>
                      <MenuItem value='10 min'>10 min</MenuItem>
                      <MenuItem value='15 min'>15 min</MenuItem>
                      <MenuItem value='20 min'>20 min</MenuItem>
                      <MenuItem value='30 min'>30 min</MenuItem>
                      <MenuItem value='40 min'>40 min</MenuItem>
                      <MenuItem value='45 min'>45 min</MenuItem>
                      <MenuItem value='60 min'>60 min</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <input className='submit' type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutDropdown;
