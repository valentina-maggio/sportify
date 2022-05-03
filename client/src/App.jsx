import { BrowserRouter } from 'react-router-dom';
import NavBarLogin from './components/NavBarLogin';
import FormLogin from './components/FormLogin';

function App() {
  return (
    <BrowserRouter>
      <NavBarLogin />
      <FormLogin />
    </BrowserRouter>
  );
}

export default App;
