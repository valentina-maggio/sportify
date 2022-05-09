import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBarRegister() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='images/logo-and-name-copy.png' alt='Logo' />
      </div>
      <div>
        <Link to='/' className='login-link'>Login</Link>
      </div>
    </div>
  );
}

export default NavBarRegister;