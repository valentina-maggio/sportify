import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPageDetails from './components/LoginPageDetails';
import RegisterDetails from './components/RegisterDetails';
import DashboardDetails from './components/DashboardDetails';
import ExercisesPageDetails from './components/ExercisesPageDetails';
import WorkoutPageDetails from './components/WorkoutPageDetails';
import WorkoutChart from './components/WorkoutChart';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPageDetails />} />
        <Route path='/register' element={<RegisterDetails />}/>
        <Route path='/dashboard' element={<DashboardDetails />} />
        <Route path='/exercises' element={<ExercisesPageDetails />} />
        <Route path='/workouts' element={<WorkoutPageDetails />} />
        <Route path='/workouts/chart' element={<WorkoutChart />} />
      </Routes>
    </Router>
  );
}

export default App;
