import { Link } from 'react-router-dom';

function MoodPage() {
  return (
    <div className='mood-container'>
      <h1>How do you feel today?</h1>
      <div className='xxxxx'>
        <Link to='/dashboard'>Profile</Link>
        <Link to='/dasboard'>Calendar</Link>
        <Link to='/dashboard'>Workouts</Link>
      </div>
    </div>
  );
}

export default MoodPage;
