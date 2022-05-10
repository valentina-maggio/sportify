import WorkoutDropdown from './FormExercise';
import NavBarExercisesPage from './NavBarExercisesPage';
import PopUpTest from './PopUpTest';
import Weather from './Weather';

function ExercisesPageDetails() {
  return (
    <>
      <NavBarExercisesPage />
      <WorkoutDropdown />
      <PopUpTest />
      <Weather />
    </>
  );
}

export default ExercisesPageDetails;
