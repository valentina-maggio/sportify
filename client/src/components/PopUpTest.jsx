import Popup from 'reactjs-popup';
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './PopUp.css';

// import { useLocation } from 'react-router-dom';

function PopUp() {
  const state = sessionStorage.getItem('item_key');

  console.log(`State passed in Workout Dropdown ${state}`);
  console.log('Test');

  const [exercise, setExercise] = useState({
    name: '',
    category: '',
    intensity: '',
    link: '',
  });

  const handleChange = (e) => {
    setExercise({
      ...exercise,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      console.log(exercise);
      await axios.post('http://localhost:3001/exercises', exercise);
    } catch (error) {
      console.log('Exercise could not be saved.', error.message);
    }
    setExercise('');
  };

  return (
    <div className='popup-container'>
      {/* eslint-disable-next-line react/button-has-type */}
      <Popup
        trigger={<input className='submit' type='submit' value='Create' />}
        position='top left'
      >
        <div className='popup-form'>
          <Box component='form'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className='create-form'>
                <TextField
                  type='text'
                  id='exercise-name'
                  label='Exercise'
                  name='name'
                  value={exercise.name}
                  onChange={handleChange}
                />
              </div>
              <div className='create-form'>
                <TextField
                  className='create-form'
                  type='text'
                  id='category'
                  label='Category'
                  name='category'
                  value={exercise.category}
                  onChange={handleChange}
                />
              </div>
              <div className='create-form'>
                <TextField
                  className='create-form'
                  type='text'
                  id='intensity'
                  label='Intensity'
                  value={exercise.intensity}
                  name='intensity'
                  onChange={handleChange}
                />
              </div>
              <div className='create-form'>
                <TextField
                  className='create-form'
                  type='text'
                  id='link'
                  label='URL'
                  value={exercise.link}
                  name='link'
                  onChange={handleChange}
                />
              </div>
            </form>
            <input
              className='submit'
              type='submit'
              value='Save Exercise'
              onClick={handleSubmit}
            />
          </Box>
        </div>
      </Popup>
    </div>
  );
}

export default PopUp;
