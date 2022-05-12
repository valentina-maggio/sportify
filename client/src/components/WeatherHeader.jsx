import WeatherSearch from './WeatherSearch';
import './WeatherHeader.css';

// eslint-disable-next-line react/prop-types
function WeatherHeader({ searchCity }) {
  return (
    <header className='Header'>
      <h2 className='Header__title'> Weather </h2>
      <WeatherSearch searchCity={searchCity} />
    </header>
  );
}

export default WeatherHeader;
