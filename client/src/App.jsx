import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPageDetails from './components/LoginPageDetails';
import SignUpPageDetails from './components/SignUpPageDetails';
import MoodPageDetails from './components/MoodPageDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPageDetails />} />
        <Route path='/signup' element={<SignUpPageDetails />}/>
        <Route path='/dashboard' element={<MoodPageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
