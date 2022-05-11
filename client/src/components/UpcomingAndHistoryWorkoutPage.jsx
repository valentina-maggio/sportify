import { useEffect, useState } from 'react';
import axios from 'axios';
import WorkoutChart from './WorkoutChart';
import './WorkoutPage.css'

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

  return (
    <header className="center">
      <div className="content-container">
        <div className="left-panel-box">
          <h2>Upcoming Workouts</h2>
          {workouts.map((workout) => (
            // eslint-disable-next-line
            <div className="box" key={workout._id}>
              <h3>{workout.workoutName}</h3>
              <h4>{workout.category}</h4>
              <h4>{workout.duration} mins</h4>
              <span>{workout.workoutScheduledDate}</span>
            </div>
          ))}
        </div>
        <div className="right-panel-box">
          <h2>Workout History</h2>
          <WorkoutChart />
        </div>
      </div>
    </header>
  );
}

export default UpcomingAndHistoryWorkoutPage;
