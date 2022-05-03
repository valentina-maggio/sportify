import React from 'react';

function FormSignUp() {
  return (
    <div>
    <form>
      <input
        type="username"
        id="username"
        name="username"
        placeholder="Username"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
      />
      <input 
        type="submit" 
        value="Login"
      />
    </form>
  </div>
  );
}

export default FormSignUp;
