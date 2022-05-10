import WorkoutDropdown from './WorkoutDropdown';
import NavBarExercisesPage from './NavBarExercisesPage';
import PopUp from './PopUp';
import Weather from './Weather';

function ExercisesPageDetails() {
  return (
    <>
      <NavBarExercisesPage />
      <WorkoutDropdown />
      <PopUp />
      <Weather />
    </>
  );
}

export default ExercisesPageDetails;
