import FormCalendar from './FormCalendar';
import NavbarCalendarPage from './NavbarCalendarPage';
import Calendar from './Calendar';
import Weather from '../Weather';

function CalendarDetails() {
  return (
    <>
      <NavbarCalendarPage />
      <FormCalendar />
      <Calendar />
      <Weather />
    </>
  );
}

export default CalendarDetails;
