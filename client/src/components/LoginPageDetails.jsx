import NavBarLogin from './NavBarLogin';
import SubBar from './SubBar';
import FormLogin from './FormLogin';
import BackgroundImageLoginSignup from './BackgroungImageLoginSignup';
import './LoginPageDetails.css';

function LoginPageDetails() {
  return (
    <>
      <NavBarLogin />
      <SubBar />
      <div className='main-container'>
        <div>
          <BackgroundImageLoginSignup />
        </div>
        <div className='form-login'>
          <FormLogin />
        </div>
      </div>
    </>
  );
}

export default LoginPageDetails;
