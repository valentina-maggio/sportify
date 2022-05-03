import React from 'react';

function FormLogin() {
  return (
    <div>
    <form>
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
        placeholder="Password"
      />
      <input 
        type="submit" 
        value="Login"
      />
    </form>
  </div>
  );
}

export default FormLogin;
