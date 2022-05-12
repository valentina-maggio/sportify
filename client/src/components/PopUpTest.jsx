import Popup from 'reactjs-popup';
import axios from 'axios';
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
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <Popup trigger={<button> Create </button>} position='right center'>
        <div>
          <h2>Exercise</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type='text'
              id='name'
              name='name'
              value={exercise.name}
              placeholder='Name'
              onChange={handleChange}
            />
            <input
              type='text'
              id='category'
              name='category'
              value={exercise.category}
              placeholder='Category'
              onChange={handleChange}
            />
            <input
              type='text'
              id='intensity'
              value={exercise.intensity}
              name='intensity'
              placeholder='Intensity'
              onChange={handleChange}
            />
            <input
              type='text'
              id='link'
              value={exercise.link}
              name='link'
              placeholder='Link'
              onChange={handleChange}
            />
          </form>
          <input type='submit' value='Save exercise' onClick={ () => {
            handleSubmit();
            notify();
            }} />
            <ToastContainer />
        </div>
      </Popup>
    </div>
  );
}

export default PopUp;
