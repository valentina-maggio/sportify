import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import './WorkoutPage.css';
import WorkoutChart from './WorkoutChart';

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
          
          
        
        </div>

      
      </div>
    </header>
  );
}

export default UpcomingAndHistoryWorkoutPage;