import React, { useState } from 'react';

import './WeatherSearch.css';

// eslint-disable-next-line react/prop-types
function WeatherSearch({ searchCity }) {
  const [currentCity, setCurrentCity] = useState('');

  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }

  function handleButtonClick() {
    if (currentCity.trim() === '') return;
    searchCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') handleButtonClick();
  }

  return (
    <div className='Search'>
      <label className='Search__label'>
        <input
          type='text'
          placeholder='City'
          className='Search__input'
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </label>
      <button
        type='button'
        className='Search__button'
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
}

export default WeatherSearch;
