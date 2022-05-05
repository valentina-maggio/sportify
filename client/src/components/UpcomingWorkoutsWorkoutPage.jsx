import { Link } from 'react-router-dom';
import "./WorkoutPage.css"

function UpcomingWorkoutsWorkoutPage() {
  return (
    <header className='center'>
      <div className='content-container'>
        <div className='left-panel-box'>
          <h1>Upcoming Workouts</h1>
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
        <div className='left-panel-box'>
          <h1>Workout History</h1>
          <div className='right-panel-box'>
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
          </div>
        </div>
      </div>
     
    </header>
  );
}

export default UpcomingWorkoutsWorkoutPage;