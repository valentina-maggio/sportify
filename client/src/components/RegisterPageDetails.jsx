import NavBarRegister from './NavBarRegister';
import RegisterHeading from './RegisterHeading';
import FormRegister from './FormRegister';
import './RegisterPageDetails.css';

function SignUpPageDetails() {
  return (
    <>
      <NavBarRegister />
      <div className='register-container'>
        <div className='register-heading'>
          <RegisterHeading />
          <FormRegister />
        </div>
      </div>
    </>
  );
}

export default SignUpPageDetails;
