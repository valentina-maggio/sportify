// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import WorkoutChart from './WorkoutChart';
import './WorkoutPage.css';

function UpcomingAndHistoryWorkoutPage() {
  const [workouts, setWorkouts] = useState([]);
  

  const requestWorkouts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/workouts');
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
  const [workoutDelete, setWorkoutDelete] = useState([]);

  const deleteWorkout = async () => {
    console.log('workout deleted');
    try {
      console.log('I am in try');
      console.log(workoutDelete);
      console.log(setWorkoutDelete);
      await axios.post('http://localhost:3001/workouts/delete', workoutDelete);
    } catch (error) {
      console.log(error.message);
    }
  }

  const settingWorkoutId = (e) => {
    setWorkoutDelete(e);
  }

  return (
    <header className='center'>
      <div className='content-container'>
        <div className='left-panel-box'>
          <form onSubmit={(e) => { 
            e.preventDefault();
            settingWorkoutId();
            deleteWorkout();
          }} >
          <h2>Upcoming Workouts</h2>
          {workouts.map((workout) => (
            // eslint-disable-next-line
            <div className='box' key={workout._id} value={workoutDelete} name='workoutDelete' deleteItem={settingWorkoutId}>
              <h3>{workout.name}
                <FontAwesomeIcon
                icon={faTimes} 
                style={{color: 'red', cursor: 'pointer'}} 
                />
              </h3>
              <h4>{workout.category}</h4>
              <h4>{workout.duration} mins</h4>
              <span>{workout.date}</span>
            </div>
          ))}
          </form>
        </div>
        <div className='right-panel-box'>
          <h2>Workout History</h2>
          <WorkoutChart />
          
        </div>

      
      </div>
    </header>
  );
}

export default UpcomingAndHistoryWorkoutPage;
