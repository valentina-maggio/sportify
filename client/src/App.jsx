import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPageDetails from './components/LoginPageDetails';
import SignUpPageDetails from './components/SignUpPageDetails';
import MoodPageDetails from './components/MoodPageDetails';
import WorkoutScheduler from "./components/WorkoutScheduler";
import WorkoutPageDetails from "./components/WorkoutPageDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPageDetails />} />
        <Route path='/signup' element={<SignUpPageDetails />}/>
        <Route path='/dashboard' element={<MoodPageDetails />} />
        <Route path="username/calendar" element={<WorkoutScheduler />} />
        <Route path="username/workout" element={<WorkoutPageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
