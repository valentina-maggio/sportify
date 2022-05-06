import React from 'react';

function FormLogin() {
  return (
    <div>
    <form onSubmit={ handleSubmit }>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={ (e) => {setEmail(e.target.value);} }
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange = { (e) => { setPassword(e.target.value);} }
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
