import Popup from 'reactjs-popup';
import axios from 'axios';
// import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './PopUp.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css';

function PopUp() {
  const state = sessionStorage.getItem('item_key');

  const [exercise, setExercise] = useState({
    user: state,
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
      const res = await axios.post('http://localhost:3001/exercises', exercise);
      console.log(res);
      if (res.status === 200){
        // alert('New exercise was saved.')
        console.log('New exercise was saved.');
      }
    } catch (error) {
      console.log('Exercise could not be saved.', error.message);
    }
    // setExercise('');
  };

  const notify = () => {
    toast.success('New exercise successfully saved!', {
      // position: 'top-left',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      padding: 10,
      icon: '🚀'
      });
    }

  return (
    <div className='popup-container'>
      {/* eslint-disable-next-line react/button-has-type */}
      <Popup
        trigger={<input className='submit' type='submit' value='Create' />}
        position='top left'
      >
        <div className='parent-popup'>
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
                onClick={ () => {
                  handleSubmit();
                  notify();
                 }} />
              <ToastContainer />
            </Box>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default PopUp;
