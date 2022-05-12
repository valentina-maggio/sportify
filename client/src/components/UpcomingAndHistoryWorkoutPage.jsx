import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import WorkoutChart from './WorkoutChart';

import './WorkoutPage.css';

function UpcomingAndHistoryWorkoutPage() {
  const state = sessionStorage.getItem('item_key');
  console.log(`State passed in Workout Dropdown ${state}`);

  const [workouts, setWorkouts] = useState([]);

  const requestWorkouts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/workouts', {
        params: { user: state },
      });
      console.log(res);
      setWorkouts(res.data);
    } catch (error) {
      console.log(`Workout.jxs Component: ${error}`);
    }
  };

  useEffect(() => {
    requestWorkouts();
  }, []);

  // Delete upcoming workout

  const deleteWorkout = async (e) => {
    const workoutToDelete = e.currentTarget.id;

    console.log(workoutToDelete);

    await axios
      .delete(`http://localhost:3001/workouts/${workoutToDelete}`)
      .then((response) => {
        console.log(response);
        requestWorkouts();
      })
      .catch((error) => {
        console.log(`error occurred ${error}`);
        alert(`${error.message}`);
      });
  };

  return (
    <div className="content-container">
      <div className="left-panel-box">
        <h2>Upcoming Workouts</h2>
        {workouts.map((workout) => (
          // eslint-disable-next-line
          <div
            className="box"
            id={workout._id}
            onClick={deleteWorkout}
            key={workout._id}
          >
            <FontAwesomeIcon 
              icon={faTimes}
              style={{ color: 'red', cursor: 'pointer' }}
            />
            <h3>{workout.name}</h3>
            <h4>{workout.category}</h4>
            <h4>{workout.duration} mins</h4>
            <span>{format(new Date(workout.date), 'Pp')}</span>
          </div>
        ))}
      </div>
      <div className="right-panel-box">
        <h2>Workout History</h2>
        <WorkoutChart />
      </div>
    </div>
  );
}

export default UpcomingAndHistoryWorkoutPage;
