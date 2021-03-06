import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';

import './WeatherAndForecast.css';

// eslint-disable-next-line react/prop-types
function WeatherAndForecast({ weatherInfo, location }) {
  // eslint-disable-next-line no-use-before-define
  const date = dateBuilder(new Date());

  function dateBuilder(d) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

  // eslint-disable-next-line no-shadow
  const date = [];

    for (let count = 0; count < 7; count += 1) {
      if (d.getDay() + count < 7) date[count] = d.getDay() + count;
      else if (d.getDay() + count === 7) date[count] = 0;
      else if (d.getDay() + count === 8) date[count] = 1;
      else if (d.getDay() + count === 9) date[count] = 2;
      else if (d.getDay() + count === 10) date[count] = 3;
      else if (d.getDay() + count === 11) date[count] = 4;
      else if (d.getDay() + count === 12) date[count] = 5;
    }

    return [
      days[date[0]],
      days[date[1]],
      days[date[2]],
      days[date[3]],
      days[date[4]],
      days[date[5]],
      days[date[6]],
    ];
  }

  return (
    <div className='weatherandforecast'>
      <WeatherCurrent
        weatherInfo={weatherInfo}
        location={location}
        date={date[0]}
      />
      <div className='weatherandforecast-container'>
        {/* eslint-disable-next-line react/prop-types */}
        <WeatherForecast weatherInfo={weatherInfo.daily[0]} date={date[0]} />
        {/* eslint-disable-next-line react/prop-types */}
        <WeatherForecast weatherInfo={weatherInfo.daily[1]} date={date[1]} />
        {/* eslint-disable-next-line react/prop-types */}
        <WeatherForecast weatherInfo={weatherInfo.daily[2]} date={date[2]} />
        {/* eslint-disable-next-line react/prop-types */}
        <WeatherForecast weatherInfo={weatherInfo.daily[3]} date={date[3]} />
        {/* eslint-disable-next-line react/prop-types */}
        <WeatherForecast weatherInfo={weatherInfo.daily[4]} date={date[4]} />
        {/* eslint-disable-next-line react/prop-types */}
        <WeatherForecast weatherInfo={weatherInfo.daily[5]} date={date[5]} />
        {/* eslint-disable-next-line react/prop-types */}
        <WeatherForecast weatherInfo={weatherInfo.daily[6]} date={date[6]} />
      </div>
    </div>
  );
}

export default WeatherAndForecast;
