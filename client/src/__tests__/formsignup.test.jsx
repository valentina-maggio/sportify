import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSignUp from '../components/FormSignUp';

  test('inputs should be initially empty', () => {
    render(<FormSignUp />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    const emailElement = screen.getByPlaceholderText(/email/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);

    expect(usernameElement.value).toBe('');
    expect(emailElement.value).toBe('');
    expect(passwordElement.value).toBe('');
  });

  test('displays a submit button for the Login', () => {
    render(<FormSignUp />);
    const submitInput = screen.getByDisplayValue(/register/i);

    expect(submitInput.value).toBe('Register');
  });
