import WorkoutDropdown from './WorkoutDropdown';
import NavBarExercisesPage from './NavBarExercisesPage';
import PopUp from './PopUp';
import Weather from './Weather';
import './ExercisesPageDetails.css';

function ExercisesPageDetails() {
  return (
    <>
      <NavBarExercisesPage />
      <div className='schedule-parent-container'>
        <div className='left-container'>
          <WorkoutDropdown />
          <PopUp />
        </div>
        <div className='right-container'>
          <Weather />
        </div>
      </div>
    </>
  );
}

export default ExercisesPageDetails;
