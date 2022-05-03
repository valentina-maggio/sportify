import { BrowserRouter } from 'react-router-dom';
import NavBarLogin from './components/NavBarLogin';
import FormLogin from './components/FormLogin';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <BrowserRouter>
      <NavBarLogin />
      <FormLogin />
      <LoginButton />
    </BrowserRouter>
  );
}

export default App;
