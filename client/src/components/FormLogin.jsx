import React from 'react';

function FormLogin() {
  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
        />
      </form>
    </div>
  );
}

export default FormLogin;
