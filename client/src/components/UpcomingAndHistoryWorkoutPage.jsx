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
    <div className='content-container'>
      <div className='upcoming-data'>
        <div className='upcoming-heading'>
          <h2>Upcoming Workouts</h2>
        </div>
        <div className='left-panel-box'>
          {workouts.map((workout) => (
            // eslint-disable-next-line
            <div className='box' id={workout._id} onClick={deleteWorkout} key={workout._id}>
              <div className='ex-container'>
                <div className='delete-icon'>
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: 'red', cursor: 'pointer' }}
                  />
                </div>
                <div className='upcoming-ex'>
                  <h3>{workout.name}</h3>
                  <h4>{workout.category}</h4>
                  <h4>{workout.duration} mins</h4>
                  <h4 className='upcoming-date'>
                    {format(new Date(workout.date), 'Pp')}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='right-panel-box'>
        <h2>Workout Stats</h2>
        <WorkoutChart />
      </div>
    </div>
  );
}

export default UpcomingAndHistoryWorkoutPage;
