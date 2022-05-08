import NavbarCalendarPage from './NavbarCalendarPage';
// import WorkoutForm from './WorkoutForm';
// import Calendar from './Calendar';
import Weather from './Weather';
import WorkoutDropdown from './WorkoutDropdown';

function WorkoutScheduler() {
  return (
    <>
      <NavbarCalendarPage />
      {/* <Calendar /> */}
      {/* <WorkoutForm /> */}
      <WorkoutDropdown />
      <Weather />
    </>
  );
}

export default WorkoutScheduler;
