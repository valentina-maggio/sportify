import { BrowserRouter } from 'react-router-dom';
import NavBarLogin from './components/NavBarLogin';
import FormLogin from './components/FormLogin';
import SubBar from './components/SubBar';
import FormSignUp from './components/FormSignUp';

function App() {
  return (
    <BrowserRouter>
      <NavBarLogin />
      <SubBar />
      <FormLogin />
      <FormSignUp />
    </BrowserRouter>
  );
}

export default App;
