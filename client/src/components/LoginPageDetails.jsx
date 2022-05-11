import NavBarLogin from './NavBarLogin';
import LoginHeading from './LoginHeading';
import FormLogin from './FormLogin';
import BackgroundImageLoginSignup from './BackgroungImageLoginSignup';
import './LoginPageDetails.css';

function LoginPageDetails() {
  return (
    <>
      <NavBarLogin />

      <div className='main-container'>
        <div>
          <BackgroundImageLoginSignup />
        </div>
        <div className='right-container'>
          <div className='heading'>
            <LoginHeading />
          </div>
          <div className='form-login'>
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPageDetails;
