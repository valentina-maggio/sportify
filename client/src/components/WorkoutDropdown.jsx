import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
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
import Button from '@mui/material/Button';

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
        const response = await axios.get('http://localhost:3001/exercises');
        return setExercise(response.data);
      } catch (error) {
        return console.log('Could not get list of exercises.', error.message);
      }
    };
    handleSubmit();
  }, []);

  const names = listOfExercises.map((x) => x.name);
  const uniqueNames = [...new Set(names)];

  const exerciseName = uniqueNames.map((el, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <option key={index + 1} value={el}>
      {el}
    </option>
  )); // eslint-disable-line

  const [selectExercise, setSelectExercise] = useState({
    workoutDate: '',
    exerciseName: '',
    duration: '',
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
      <h2>Select Exercise</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitSelectExercise();
        }}
      >
        <div className='calendar'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DateTimePicker
                name='workoutDate'
                label='Select Workout Date & Time'
                value={selectExercise.workoutDate}
                onChange={handleChange}
                // eslint-disable-next-line react/jsx-props-no-spreading
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div>
          <Select
            className='name'
            name='exerciseName'
            label='Name'
            value={selectExercise.exerciseName}
            onChange={handleChange}
          >
            <MenuItem value='{exerciseName}'>{exerciseName}</MenuItem>
          </Select>
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
                value={selectExercise.name}
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
          <option>Duration</option>
          <Select
            className='duration'
            name='duration'
            label='Duration'
            value={selectExercise.name}
            onChange={handleChange}
          >
            <option value='5 min'>5 min</option>
            <option value='10 min'>10 min</option>
            <option value='15 min'>15 min</option>
            <option value='20 min'>20 min</option>
            <option value='30 min'>30 min</option>
            <option value='40 min'>40 min</option>
            <option value='45 min'>45 min</option>
            <option value='60 min'>60 min</option>
          </Select>
        </div>
        <Button
          className='submit'
          variant='contained'
          sx={{
            '&.MuiButton-text': { color: '#yellow' },
            // border: '2px black solid',
          }}
          type='submit'
          value='Schedule workout'
        >
          Schedule Workout
        </Button>
      </form>
    </div>
  );
}

export default WorkoutDropdown;
