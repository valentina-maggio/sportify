import FormExercise, {WorkoutDropdown}  from './FormExercise';
import NavbarCalendarPage from './NavbarCalendarPage';
import Calendar from './Calendar';
import Weather from './Weather';

function CalendarDetails() {
  return (
    <>
      <NavbarCalendarPage />
      <FormExercise />
      <WorkoutDropdown />
      <Calendar />
      <Weather />
    </>
  );
}

export default CalendarDetails;
