import { Link } from 'react-router-dom';
import './NavBar.css'

function NavbarCalendarPage() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='images/logo-and-name-copy.png' alt='Logo' />
      </div>
      <div>
        <Link to='/username/calendar' className='workouts-link'>View Your Workouts</Link>
        <Link to='/' className='logout-link'>Logout</Link>
      </div>
    </div>
  );
}

export default NavbarCalendarPage;
