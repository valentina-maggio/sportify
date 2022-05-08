import * as React from 'react';
import Dropdown from './Dropdown';
import Calendar from './Calendar';

function WorkoutDropdown() {
  const [exercise, setExercise] = React.useState('exercise');
  // const [category, setCategory] = React.useState('category');
  const [duration, setDuration] = React.useState('duration');

  const handleExerciseChange = (event) => {
    setExercise(event.target.value);
  };

  // const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div>
      <Calendar />
      <Dropdown
        label="Select exercise"
        options={[
          { label: '5K Run', value: '5K run' },
          { label: 'Full body HIIT', value: 'full body hiit' },
          { label: 'Yoga for beginners', value: 'Yoga for beginners' },
          { label: 'Toned arms', value: 'toned arms' },
          { label: 'Kickboxing', value: 'kickboxing' },
        ]}
        value={exercise}
        onChange={handleExerciseChange}
      />

      {/* <Dropdown
        label="Select category"
        options={[
          { label: 'Cardio', value: 'cardio' },
          { label: 'HIIT', value: 'hiit' },
          { label: 'Strength', value: 'strength' },
          { label: 'Low Impact', value: 'low impact' },
          { label: 'Yoga', value: 'yoga' },
          { label: 'Pilates', value: 'pilates' },

        ]}
        value={category}
        onChange={handleCategoryChange}
      /> */}
      <Dropdown
        label="Select duration"
        options={[
          { label: '10 minutes', value: '10 minutes' },
          { label: '15 minutes', value: '15 minutes' },
          { label: '20 minutes', value: '20 minutes' },
          { label: '30 minutes', value: '30 minutes' },
          { label: '45 minutes', value: '45 minutes' },
          { label: '60 minutes', value: '60 minutes' },
        ]}
        value={duration}
        onChange={handleDurationChange}
      />
       <input type="submit" value="Schedule workout" />
    </div>
  );
}

export default WorkoutDropdown;

