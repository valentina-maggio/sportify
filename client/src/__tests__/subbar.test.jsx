import React from 'react';
import { render, screen } from '@testing-library/react';
import SubBar from '../components/SubBar';

  test('displays the page subtitle', () => {
    render(<SubBar />);
    const subTitleElement = screen.getByText('Sportifier, are you ready to change your life?');

    expect(subTitleElement).toHaveTextContent('Sportifier, are you ready to change your life?');
  });