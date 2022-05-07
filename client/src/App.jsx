import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPageDetails from './components/LoginPageDetails';
import SignUpPageDetails from './components/SignUpPageDetails';
import MoodPageDetails from './components/MoodPageDetails';
import CalendarDetails from './components/CalendarDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPageDetails />} />
        <Route path='/signup' element={<SignUpPageDetails />}/>
        <Route path='/dashboard' element={<MoodPageDetails />} />
        <Route path='/exercises' element={<CalendarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
