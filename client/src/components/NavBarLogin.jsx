import { Link } from 'react-router-dom';

function NavBarLogin() {
  return (
    <header id="navbar">
      <div>
        <h1>Sportify</h1>
      </div>
      <div id="register-link">
        <Link to="/">Register</Link>
      </div>
    </header>
  );
}

export default NavBarLogin;
