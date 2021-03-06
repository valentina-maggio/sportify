/* eslint-disable react/prop-types */
import './WeatherForecast.css';

function WeatherForecast({ weatherInfo, date }) {
  return (
    <div>
      <h1 className='Forecast__title'>{[date[0], date[1], date[2]]}</h1>
      <img
        className='Forecast__weather-icon'
        src={
          // eslint-disable-next-line prefer-template
          'https://openweathermap.org/img/wn/' +
          weatherInfo.weather[0].icon +
          '.png'
        }
        alt={weatherInfo.weather[0].main}
      />
      <div className='Forecast__temperature'>
        <span className='temperature__max'>
          {Math.round(weatherInfo.temp.max)}
          <sup className='temperature__symbol'>°</sup>
        </span>
        <span className='temperature__min'>
          {Math.round(weatherInfo.temp.min)}
          <sup className='temperature__symbol'>°</sup>
        </span>
      </div>
    </div>
  );
}

export default WeatherForecast;
