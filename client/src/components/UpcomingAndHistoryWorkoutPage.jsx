import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

  return (
    <header className="center">
      <div className="content-container">
        <div className="left-panel-box">
          <h2>Upcoming Workouts</h2>
          {workouts.map((workout) => (
            // eslint-disable-next-line
            <div key={workout._id}>
              <span>{workout.date}</span>
              <h3>{workout.name}</h3>
              <h4>{workout.category}</h4>
              <h4>{workout.duration}</h4>
            </div>
          ))}
        </div>
        <div className="right-panel-box">
          <h2>Workout History</h2>
          <div className="right-panel-box">
            <div className="box">
              <p className="p">Yoga</p>
              <p className="p">30 mins</p>
              <p className="p">
                <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </Link>
              </p>
              <p className="p">11/04/2022</p>
            </div>
            <div className="box">
              <p className="p">HIIT</p>
              <p className="p">30 mins</p>
              <p className="p">
                <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </Link>
              </p>
              <p className="p">15/04/2022</p>
            </div>
            <div className="box">
              <p className="p">Yoga</p>
              <p className="p">30 mins</p>
              <p className="p">
                <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </Link>
              </p>
              <p className="p">20/04/2022</p>
            </div>
            <div className="box">
              <p className="p">HIIT</p>
              <p className="p">30 mins</p>
              <p className="p">
                <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </Link>
              </p>
              <p className="p">22/04/2022</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default UpcomingAndHistoryWorkoutPage;
