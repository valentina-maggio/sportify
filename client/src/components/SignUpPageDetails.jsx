import NavBarLogin from './NavBarLogin';
import SubBar from './SubBar';
import FormSignUp from './FormSignUp';
import SignInRedirection from './SignInRedirection';
import BackgroundImageLoginSignup from './BackgroungImageLoginSignup';

function SignUpPageDetails() {
  return (
    <>
      <NavBarLogin />
      <SubBar />
      <BackgroundImageLoginSignup />
      <FormSignUp />
      <SignInRedirection />
    </>
  );
}

export default SignUpPageDetails;
