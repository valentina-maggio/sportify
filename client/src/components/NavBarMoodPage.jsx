import { Link } from 'react-router-dom';

function NavBarMoodPage() {
  return (
    <header className='navbar'>
      <div>
        <h1>Sportify</h1>
      </div>
      <div className='nav-links'>
        <Link to='/dashboard'>Profile</Link>
        <Link to='/dasboard'>Calendar</Link>
        <Link to='/dashboard'>Workouts</Link>
        <Link to='/dashboard'>Logout</Link>
      </div>
    </header>
  );
}

export default NavBarMoodPage;
