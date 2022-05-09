import FormExercise, {WorkoutDropdown}  from './FormExercise';
import NavBarExercisesPage from './NavBarExercisesPage';
// import Calendar from './Calendar';
import Weather from './Weather';

function ExercisesPageDetails() {
  return (
    <>
      <NavBarExercisesPage />
      <FormExercise />
      <WorkoutDropdown />
      {/* <Calendar /> */}
      <Weather />
    </>
  );
}

export default ExercisesPageDetails;
