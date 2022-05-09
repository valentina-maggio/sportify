import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBarLogin() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='images/logo-and-name-copy.png' alt='Logo' />
      </div>
      <div>
        <Link to='/register' className='register-link'>Register</Link>
      </div>
    </div>
  );
}

export default NavBarLogin;

