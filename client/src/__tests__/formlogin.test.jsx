import React from 'react';
import { render, screen } from '@testing-library/react';
import FormLogin from '../components/FormLogin';

  test('inputs should be initially empty', () => {
    render(<FormLogin />);
    const emailElement = screen.getByPlaceholderText(/email/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);

    expect(emailElement.value).toBe('');
    expect(passwordElement.value).toBe('');
  });
