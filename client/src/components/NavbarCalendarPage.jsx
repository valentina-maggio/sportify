import { Link } from "react-router-dom";

function NavbarCalendarPage() {
  return (
    <header>
      <div>
        <h3>Sportify</h3>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/username/calendar">Profile</Link>
          </li>
          <li>
            <Link to="/username/calendar">Workouts</Link>
          </li>
          <li>
            <Link to="/username/calendar">Logout</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavbarCalendarPage;
