import Popup from 'reactjs-popup';
import axios from 'axios';
import { useState } from 'react';

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
          <input type='submit' value='Save exercise' onClick={handleSubmit} />
        </div>
      </Popup>
    </div>
  );
}

export default PopUp;
