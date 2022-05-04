import React from 'react';
import { Link } from 'react-router-dom';

function SignInRedirection() {
  return (
    <div>
      <div>
        <p>Already have an account?</p>
      </div>
      <div>
        <Link to="/">Sign in</Link>
      </div>
    </div>
  )
}

export default SignInRedirection;
