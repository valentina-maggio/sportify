import { BrowserRouter } from 'react-router-dom';
import NavBarLogin from './components/NavBarLogin';
import FormLogin from './components/FormLogin';
import SubBar from './components/SubBar';
import FormSignUp from './components/FormSignUp';
import SignInRedirection from './components/SignInRedirection';

function App() {
  return (
    <BrowserRouter>
      <NavBarLogin />
      <SubBar />
      <FormLogin />
      <FormSignUp />
      <SignInRedirection />
    </BrowserRouter>
  );
}

export default App;
