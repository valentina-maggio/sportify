import NavbarCalendarPage from './NavbarCalendarPage';
import WorkoutForm from './WorkoutForm';
// import Calendar from './Calendar';
import Weather from './Weather';

function WorkoutScheduler() {
  return (
    <>
      <NavbarCalendarPage />
      {/* <Calendar /> */}
      <WorkoutForm />
      <Weather />
    </>
  );
}

export default WorkoutScheduler;
