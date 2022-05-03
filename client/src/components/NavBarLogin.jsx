import { Link } from 'react-router-dom';

function NavBarLogin() {
  return (
    <header>
      <div>
        <h1>Sportify</h1>
      </div>
      <div>
        <ul>
          <Link to="/">Register</Link>
        </ul>
      </div>
    </header>
  );
}

export default NavBarLogin;
