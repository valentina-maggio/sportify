import FormWorkout  from './FormWorkout';
import NavbarCalendarPage from './NavbarCalendarPage';
import Calendar from './Calendar';
import Weather from './Weather';

function CalendarDetails() {
  return (
    <>
      <NavbarCalendarPage />
      <FormWorkout />
      <Calendar />
      <Weather />
    </>
  );
}

export default CalendarDetails;
