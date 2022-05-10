import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FormLogin.css';
// import { useEffect } from "react/cjs/react.production.min";

function FormLogin() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log(user);
      const response = await axios.post(
        'http://localhost:3001/users/login',
        user
      );

      if (response.status === 200) {
        sessionStorage.setItem('item_key', user.email);
        navigate('/dashboard');
      } else {
        // TODO: investigate this alert not showing up on unsuccessful login
        alert('Incorrect email or password.');
      }
    } catch (error) {
      console.log('User could not be logged in', error.message);
    }
  };

  return (
    <div className='login-container'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className='email'
          type='email'
          id='email'
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          className='password'
          type='password'
          id='password'
          name='password'
          value={user.password}
          placeholder='Password'
          onChange={handleChange}
        />
        <input
          className='submit'
          type='submit'
          value='Login'
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default FormLogin;
