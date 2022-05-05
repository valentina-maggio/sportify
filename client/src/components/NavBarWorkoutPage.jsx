import { Link } from 'react-router-dom';

function NavBarWorkoutPage() {
  return (
    <header className='navbar'>
      <div>
        <h1>Sportify</h1>
      </div>
      <div className='nav-links'>
        <Link to='/dashboard'>Profile</Link>
        <Link to='/dasboard'>Calendar</Link>
        <Link to='/dashboard'>Logout</Link>
      </div>
    </header>
  );
}

export default NavBarWorkoutPage;