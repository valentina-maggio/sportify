import WorkoutDropdown from './WorkoutDropdown';
import NavBarExercisesPage from './NavBarExercisesPage';
import PopUpTest from './PopUpTest';
import Weather from './Weather';
import './ExercisesPageDetails.css';

function ExercisesPageDetails() {
  return (
    <>
      <NavBarExercisesPage />
      <div className='schedule-parent-container'>
        <div className='left-container'>
          <div className='workout'>
            <WorkoutDropdown />
          </div>
          <div className='popup'>
            <PopUpTest />
          </div>
        </div>
        <div className='right-container'>
          <Weather />
        </div>
      </div>
    </>
  );
}

export default ExercisesPageDetails;
