import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import WorkoutChart from './WorkoutChart';
import './WorkoutPage.css';

function UpcomingAndHistoryWorkoutPage() {
  const navigate = useNavigate();

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

  const deleteWorkout = async (e) => {
    const workoutToDelete = e.currentTarget.id;
    await axios
      .delete(`http://localhost:3001/workouts/${workoutToDelete}`)
      .then((response) => {
        console.log(response);
        navigate('/workouts');
      })
      .catch((error) => {
        console.log(`error occurred ${error}`);
        alert(`${error.message}`);
      });
  };

  // const deleteWorkout = async (e) => {

  //   const workoutToDelete = e.currentTarget.id

  //   console.log(e.currentTarget.id);
  //   try {
  //     console.log('I am in try');
  //     await axios.delete(`http://localhost:3001/workouts/${workoutToDelete}`);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  return (
    <header className='center'>
      <div className='content-container'>
        <div className='left-panel-box'>
          <h2>Upcoming Workouts</h2>
          {workouts.map((workout) => (
            // eslint-disable-next-line
            <div className='box' id={workout._id} onClick={deleteWorkout}>
              <h3>
                {workout.name}
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ color: 'red', cursor: 'pointer' }}
                />
              </h3>
              <h4>{workout.category}</h4>
              <h4>{workout.duration} mins</h4>
              <span>{workout.date}</span>
            </div>
          ))}
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
