import { Link } from 'react-router-dom';
import "./WorkoutPage.css";
import WorkoutChart from './WorkoutChart';
import ExerciseChart from './ExerciseChart';
// import WorkoutChart from './WorkoutChart'


function UpcomingAndHistoryWorkoutPage() {
  return (
    <header className='center'>
      <div className='content-container'>
        <div className='left-panel-box'>
          <h2>Upcoming Workouts</h2>
          <div className='left-panel-box'>
            <div className="box">
              <p className="p">HITT</p>
              <p className="p">30 mins</p>
              <p className="p"><Link to ="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</Link></p>
              <p className="p">06/05/2022</p>
            </div>
            <div className="box">
              <p className="p">HITT</p>
              <p className="p">20 mins</p>
              <p className="p"><Link to ="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</Link></p>
              <p className="p">08/05/2022</p>
            </div>
            <div className="box">
              <p className="p">Low Impact</p>
              <p className="p">40 mins</p>
              <p className="p"><Link to ="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</Link></p>
              <p className="p">10/05/2022</p>
            </div>
            <div className="box">
              <p className="p">Yoga</p>
              <p className="p">30 mins</p>
              <p className="p"><Link to ="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</Link></p>
              <p className="p">11/05/2022</p>
            </div>
          </div>
        </div>
        <div className='right-panel-box'>
          <h2>Workout History</h2>
          <WorkoutChart />
          <ExerciseChart />
          
          {/* <div className='right-panel-box'>
            <div className="box">
              <p className="p">Yoga</p>
              <p className="p">30 mins</p>
              <p className="p"><Link to ="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</Link></p>
              <p className="p">11/04/2022</p>
            </div>
            <div className="box">
              <p className="p">HIIT</p>
              <p className="p">30 mins</p>
              <p className="p"><Link to ="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</Link></p>
              <p className="p">15/04/2022</p>
            </div>
            <div className="box">
              <p className="p">Yoga</p>
              <p className="p">30 mins</p>
              <p className="p"><Link to ="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</Link></p>
              <p className="p">20/04/2022</p>
            </div>
            <div className="box">
              <p className="p">HIIT</p>
              <p className="p">30 mins</p>
              <p className="p"><Link to ="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</Link></p>
              <p className="p">22/04/2022</p>
            </div>
          </div> */}
        </div>

      {/* <WorkoutChart /> */}
      </div>
    </header>
  );
}

export default UpcomingAndHistoryWorkoutPage;