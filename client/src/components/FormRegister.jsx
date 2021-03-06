import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormRegister.css';

function FormRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        navigate('/', {
          state: email,
        });
      } else {
        alert('User already exists');
      }
    } catch (err) {
      console.error();
    }
  };

  return (
    <div className='register-main'>
      <form onSubmit={handleSubmit}>
        <input
          className='username'
          type='username'
          id='username'
          name='username'
          placeholder='Username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className='email'
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className='password'
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input className='submit' type='submit' value='Register' />
      </form>
    </div>
  );
}

export default FormRegister;
