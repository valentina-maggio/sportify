import FormExercise  from './FormExercise';
import NavbarCalendarPage from './NavbarCalendarPage';
import Calendar from './Calendar';
import Weather from './Weather';

function CalendarDetails() {
  return (
    <>
      <NavbarCalendarPage />
      <FormExercise />
      <Calendar />
      <Weather />
    </>
  );
}

export default CalendarDetails;
