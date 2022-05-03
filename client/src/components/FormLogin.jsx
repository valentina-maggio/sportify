import React from 'react';

function FormLogin() {
  return (
    <div>
    <form>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email"
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

export default FormLogin;
